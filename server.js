import 'dotenv/config';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import express from 'express';
import Stripe from 'stripe';

const requiredEnv = ['STRIPE_SECRET_KEY', 'APP_URL'];
for(const name of requiredEnv){
  if(!process.env[name]) throw new Error(`Missing required environment variable: ${name}`);
}

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const port = Number(process.env.PORT || 3000);
const appUrl = new URL(process.env.APP_URL).origin;
const priceId = 'price_1UCqqdPtIW29llGuvpdBKT3G';
const paymentMethodTypes = (process.env.PAYMENT_METHOD_TYPES || 'card')
  .split(',')
  .map(method => method.trim())
  .filter(method => method === 'card' || method === 'upi');
if(paymentMethodTypes.length === 0) throw new Error('PAYMENT_METHOD_TYPES must include card or upi');
const publicDir = path.dirname(fileURLToPath(import.meta.url));

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if(origin === 'http://localhost:8000' || origin === appUrl){
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  }
  if(req.method === 'OPTIONS'){
    res.sendStatus(204);
    return;
  }
  next();
});

app.post('/api/stripe-webhook', express.raw({type: 'application/json'}), (req, res) => {
  if(!process.env.STRIPE_WEBHOOK_SECRET){
    res.status(503).json({error: 'Stripe webhook secret is not configured'});
    return;
  }
  const signature = req.headers['stripe-signature'];
  if(typeof signature !== 'string'){
    res.status(400).json({error: 'Missing Stripe signature'});
    return;
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch(error) {
    console.error('Stripe webhook validation failed:', error.message);
    res.status(400).json({error: 'Invalid webhook signature'});
    return;
  }

  if(event.type === 'checkout.session.completed'){
    console.info('Checkout completed:', event.data.object.id);
    // Persist the customer/subscription entitlement in your user database here.
  }
  if(event.type === 'customer.subscription.deleted'){
    console.info('Subscription cancelled:', event.data.object.id);
    // Revoke the corresponding Pro entitlement in your user database here.
  }

  res.json({received: true});
});

app.use(express.json());

app.post('/api/create-checkout-session', async (req, res) => {
  if(req.body?.priceId !== priceId){
    res.status(400).json({error: 'Unsupported price'});
    return;
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{price: priceId, quantity: 1}],
      payment_method_types: paymentMethodTypes,
      success_url: `${appUrl}/?checkout=success`,
      cancel_url: `${appUrl}/?checkout=cancelled`,
      automatic_tax: {enabled: false},
    });
    if(!session.url) throw new Error('Stripe did not return a Checkout URL');
    res.json({url: session.url});
  } catch(error) {
    console.error('Stripe Checkout session creation failed:', error);
    const stripeError = error && typeof error === 'object' ? error : {};
    const message = typeof stripeError.message === 'string'
      ? stripeError.message
      : 'Stripe rejected the checkout request';
    res.status(502).json({
      error: 'Unable to create secure checkout session',
      detail: message,
      code: typeof stripeError.code === 'string' ? stripeError.code : 'stripe_request_failed',
    });
  }
});

app.use(express.static(publicDir));
app.listen(port, () => console.info(`Skyline listening at ${appUrl}`));
