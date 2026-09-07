# Skyline — Live Weather App

A live weather app with real-time data from Open-Meteo (no API key required).

## Structure
- `index.html` — markup
- `css/styles.css` — all styling (pastel mesh background, glassmorphism cards, animations)
- `js/app.js` — app logic (fetching, rendering, charts, alerts, Pro paywall, favorites)
- `assets/` — reserved for any static assets (icons are inline SVG in app.js, so this is currently empty)

## Running locally
Because the app uses `fetch()` to call Open-Meteo, and PWA install/service-worker features require a proper origin, some browsers restrict this on `file://` URLs.
Serve it locally instead:

```
cd skyline-app
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Installing as an app (PWA)
Skyline is a fully installable Progressive Web App:
- **Desktop Chrome/Edge**: an install icon appears in the address bar, or use the in-app install button (top-right, download icon) once it becomes visible.
- **Android Chrome**: tap the in-app install button, or use the browser menu → "Add to Home screen" / "Install app".
- **iOS Safari**: iOS doesn't support the install prompt API, so tap Share → "Add to Home Screen" manually. The app will still launch full-screen with its own icon.

Once installed, the app shell (HTML/CSS/JS/icons) is cached by a service worker so it opens instantly and the last-loaded forecast is available even with no connection.

## Stripe Checkout

The Pro buttons request a Checkout Session from `POST /api/create-checkout-session` with the configured Stripe Price ID and redirect only to a validated Stripe Checkout URL. Implement this endpoint on a trusted server with `STRIPE_SECRET_KEY` stored in environment variables; never expose the secret key in this frontend.

The endpoint should create a subscription Checkout Session and return `{ "url": "https://checkout.stripe.com/..." }`. Grant Pro access only after verifying Stripe webhooks server-side (for example, `checkout.session.completed` and subscription status), not from the client redirect or local storage.

This repository includes a Node.js/Express implementation in `server.js`. To run it:

```bash
npm install
cp .env.example .env
# Set rotated Stripe credentials in .env
npm start
```

Configure Stripe to send `checkout.session.completed` and `customer.subscription.deleted` events to `/api/stripe-webhook`. The webhook handler must be extended to persist entitlements for your authenticated users before enabling Pro access.

In Stripe Dashboard, activate **Cards** under Payment methods. The server defaults to `PAYMENT_METHOD_TYPES=card` for subscription checkout. You may set `PAYMENT_METHOD_TYPES=card,upi` only after confirming UPI recurring payments are enabled for your Stripe account and price currency; otherwise Stripe will reject the session.

Open `http://localhost:3000` when running this server. If you keep using the static `http://localhost:8000` preview, the frontend automatically calls the API on port 3000. A valid rotated Stripe secret key is required; placeholder keys will return a Stripe API error.

## Features
- City search with live autosuggest
- Use-my-location button (browser geolocation)
- °C / °F toggle
- Current conditions, 7-day forecast (14-day for Pro)
- Pro tier (mocked, unlocks locally): hourly temperature + precipitation charts, live AQI, extended forecast, unlimited favorites
- Weather alert banners + optional browser push notifications
- Saved favorite cities (persisted in localStorage)

Built by RajPolu — https://github.com/RajPolu
