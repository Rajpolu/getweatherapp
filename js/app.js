const ICONS = {
  sun: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`,
  moon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>`,
  cloudSun: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a4 4 0 1 1 7.6-1.8"/><path d="M6.5 20h11a3.5 3.5 0 0 0 .5-6.96A5 5 0 0 0 8.5 12.1 3.5 3.5 0 0 0 6.5 20z"/></svg>`,
  cloudMoon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 6.5A4 4 0 0 1 9 9"/><path d="M6.5 20h11a3.5 3.5 0 0 0 .5-6.96A5 5 0 0 0 8.5 12.1 3.5 3.5 0 0 0 6.5 20z"/></svg>`,
  cloud: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 20h11a3.5 3.5 0 0 0 .5-6.96A5 5 0 0 0 8.5 12.1 3.5 3.5 0 0 0 6.5 20z"/></svg>`,
  fog: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 9h13M3 13h18M3 17h13"/></svg>`,
  rain: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 15h11a3.5 3.5 0 0 0 .5-6.96A5 5 0 0 0 8.5 7.1 3.5 3.5 0 0 0 6.5 15z"/><path d="M8 18l-1 3M12 18l-1 3M16 18l-1 3"/></svg>`,
  snow: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 14h11a3.5 3.5 0 0 0 .5-6.96A5 5 0 0 0 8.5 6.1 3.5 3.5 0 0 0 6.5 14z"/><path d="M8 18v3M8 18l-2 1M8 18l2 1M12 18v3M12 18l-2 1M12 18l2 1M16 18v3M16 18l-2 1M16 18l2 1"/></svg>`,
  storm: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 13h11a3.5 3.5 0 0 0 .5-6.96A5 5 0 0 0 8.5 5.1 3.5 3.5 0 0 0 6.5 13z"/><path d="M13 13l-3 5h3l-2 4"/></svg>`,
  drop: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.7s6 6.8 6 11.3a6 6 0 0 1-12 0c0-4.5 6-11.3 6-11.3z"/></svg>`,
  wind: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h11a3 3 0 1 0-3-3M3 16h15a3 3 0 1 1-3 3M3 12h8"/></svg>`,
  sunrise: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v5M4.2 10.2l1.4 1.4M19.8 10.2l-1.4 1.4M2 18h20M6 18a6 6 0 0 1 12 0"/></svg>`,
  gauge: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15l3-5"/><circle cx="12" cy="15" r="1"/><path d="M4 15a8 8 0 1 1 16 0"/></svg>`,
  eye: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>`,
  uv: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="14" r="4"/><path d="M12 4v2M4.9 8.9l1.4 1.4M19.1 8.9l-1.4 1.4M2 14h2M20 14h2"/></svg>`,
  star: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 6.5 7 1-5 5 1.3 7-6.3-3.5-6.3 3.5 1.3-7-5-5 7-1z"/></svg>`,
  starFill: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.5 7 1-5 5 1.3 7-6.3-3.5-6.3 3.5 1.3-7-5-5 7-1z"/></svg>`,
  x: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
  pin: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.5 7-11.5A7 7 0 1 0 5 9.5C5 14.5 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.2"/></svg>`,
  lock: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>`,
  alertTriangle: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L2.5 18a1.5 1.5 0 0 0 1.3 2.2h16.4A1.5 1.5 0 0 0 21.5 18L13.7 3.9a1.5 1.5 0 0 0-2.6 0z"/><path d="M12 9v4M12 17h.01"/></svg>`,
  bellOff: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 6.2A5 5 0 0 1 17 9c0 4.2 1.6 5.4 1.6 5.4H10"/><path d="M7 9c0 2-.4 3.4-.9 4.4-.4.7-.7 1-.7 1h4.1"/><path d="M4 4l16 16"/><path d="M10.5 17.5c0 .9.7 1.5 1.5 1.5s1.5-.6 1.5-1.5"/></svg>`,
  github: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.7 5.6.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.2.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2A11 11 0 0 1 12 6c1 0 2 .1 3 .4 2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A10.5 10.5 0 0 0 23.3 12c0-6.4-5-11.5-11.3-11.5z"/></svg>`,
  checkCircle: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>`,
  sunset: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v5M4.2 10.2l1.4 1.4M19.8 10.2l-1.4 1.4M2 18h20M6 18a6 6 0 0 1 12 0M2 22h20"/></svg>`,
  activity: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  shirt: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3l4 2 4-2 4 4-3 3v11H7V10L4 7z"/></svg>`,
  heartPulse: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 8.6a5.5 5.5 0 0 0-9.8-3.4 5.5 5.5 0 0 0-9 6.2c1.4 3.3 9 9.6 9 9.6s7.6-6.3 9-9.6"/><path d="M4 12h3l2-4 3 8 2-5h3"/></svg>`,
};

const WMO = {
  0:{label:'Clear sky', icon:'sun', cat:'clear'},
  1:{label:'Mostly clear', icon:'cloudSun', cat:'clear'},
  2:{label:'Partly cloudy', icon:'cloudSun', cat:'cloud'},
  3:{label:'Overcast', icon:'cloud', cat:'cloud'},
  45:{label:'Fog', icon:'fog', cat:'fog'},
  48:{label:'Rime fog', icon:'fog', cat:'fog'},
  51:{label:'Light drizzle', icon:'rain', cat:'rain'},
  53:{label:'Drizzle', icon:'rain', cat:'rain'},
  55:{label:'Dense drizzle', icon:'rain', cat:'rain'},
  56:{label:'Freezing drizzle', icon:'rain', cat:'rain'},
  57:{label:'Freezing drizzle', icon:'rain', cat:'rain'},
  61:{label:'Light rain', icon:'rain', cat:'rain'},
  63:{label:'Rain', icon:'rain', cat:'rain'},
  65:{label:'Heavy rain', icon:'rain', cat:'rain'},
  66:{label:'Freezing rain', icon:'rain', cat:'rain'},
  67:{label:'Freezing rain', icon:'rain', cat:'rain'},
  71:{label:'Light snow', icon:'snow', cat:'snow'},
  73:{label:'Snow', icon:'snow', cat:'snow'},
  75:{label:'Heavy snow', icon:'snow', cat:'snow'},
  77:{label:'Snow grains', icon:'snow', cat:'snow'},
  80:{label:'Light showers', icon:'rain', cat:'rain'},
  81:{label:'Showers', icon:'rain', cat:'rain'},
  82:{label:'Violent showers', icon:'storm', cat:'rain'},
  85:{label:'Snow showers', icon:'snow', cat:'snow'},
  86:{label:'Snow showers', icon:'snow', cat:'snow'},
  95:{label:'Thunderstorm', icon:'storm', cat:'storm'},
  96:{label:'Thunderstorm, hail', icon:'storm', cat:'storm'},
  99:{label:'Thunderstorm, hail', icon:'storm', cat:'storm'},
};

const SKY_GRADIENTS = {
  clear_day: 'linear-gradient(160deg, #5AA9E6 0%, #86C5F0 45%, #F2C374 100%)',
  clear_night: 'linear-gradient(160deg, #171B3A 0%, #262C5C 60%, #4A4080 100%)',
  cloud_day: 'linear-gradient(160deg, #7C93AC 0%, #A2B4C6 50%, #CBD2DC 100%)',
  cloud_night: 'linear-gradient(160deg, #1A2038 0%, #333B5C 60%, #4C5680 100%)',
  rain_day: 'linear-gradient(160deg, #49596E 0%, #64768C 50%, #7C8595 100%)',
  rain_night: 'linear-gradient(160deg, #12162A 0%, #262E42 60%, #3A4256 100%)',
  snow_day: 'linear-gradient(160deg, #8B9BB2 0%, #B4C4D6 50%, #DEE6EF 100%)',
  snow_night: 'linear-gradient(160deg, #1B2340 0%, #35405E 60%, #536080 100%)',
  fog_day: 'linear-gradient(160deg, #8C929B 0%, #ABB0B7 50%, #CDD1D6 100%)',
  fog_night: 'linear-gradient(160deg, #1A1C26 0%, #363A46 60%, #50545E 100%)',
  storm_day: 'linear-gradient(160deg, #3A3554 0%, #514872 50%, #6A5A9C 100%)',
  storm_night: 'linear-gradient(160deg, #0E0C1F 0%, #241E48 60%, #382C5E 100%)',
};

const AQI_LEVELS = [
  {max:20, label:'Good', desc:'Air quality is great — no precautions needed.', color:'#4ADE80'},
  {max:40, label:'Fair', desc:'Air quality is acceptable for most people.', color:'#A3E635'},
  {max:60, label:'Moderate', desc:'Sensitive groups may notice mild effects.', color:'#FACC15'},
  {max:80, label:'Poor', desc:'Consider limiting prolonged outdoor exertion.', color:'#FB923C'},
  {max:100, label:'Very poor', desc:'Reduce time spent outdoors if possible.', color:'#F87171'},
  {max:Infinity, label:'Severe', desc:'Avoid outdoor activity where you can.', color:'#DC2626'},
];

let unit = 'C';
let currentData = null;
let currentName = '';
let favorites = [];
try{ favorites = JSON.parse(localStorage.getItem('skyline_favs') || '[]'); }catch(e){ favorites = []; }
let isPro = localStorage.getItem('skyline_pro') === '1';
const FREE_FAV_LIMIT = 3;
const FREE_FORECAST_DAYS = 7;
let alertsEnabled = localStorage.getItem('skyline_alerts') === '1';
let notifiedKeys = new Set();

if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').catch(() => {});
  });
}

let deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const btn = document.getElementById('installBtn');
  if(btn) btn.style.display = 'flex';
});
window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  const btn = document.getElementById('installBtn');
  if(btn) btn.style.display = 'none';
  showToast('Skyline installed — find it on your home screen or app list.');
});
document.getElementById('installBtn').addEventListener('click', async () => {
  if(!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  const { outcome } = await deferredInstallPrompt.userChoice;
  if(outcome === 'accepted'){
    showToast('Installing Skyline…');
  }
  deferredInstallPrompt = null;
  document.getElementById('installBtn').style.display = 'none';
});
if(window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true){
  const btn = document.getElementById('installBtn');
  if(btn) btn.style.display = 'none';
}

const app = document.getElementById('app');
const input = document.getElementById('cityInput');
const suggBox = document.getElementById('suggestions');
const STRIPE_PRICE_ID = 'price_1UCqqdPtIW29llGuvpdBKT3G';
const CHECKOUT_ENDPOINT = window.location.port === '8000'
  ? 'http://localhost:3000/api/create-checkout-session'
  : '/api/create-checkout-session';
let debounceTimer;

function cToF(c){ return c * 9/5 + 32; }
function fmtTemp(c){ return Math.round(unit === 'C' ? c : cToF(c)) + '°'; }

document.getElementById('unitC').addEventListener('click', () => setUnit('C'));
document.getElementById('unitF').addEventListener('click', () => setUnit('F'));
function setUnit(u){
  unit = u;
  document.getElementById('unitC').classList.toggle('active', u==='C');
  document.getElementById('unitF').classList.toggle('active', u==='F');
  if(currentData) render(currentData, currentName);
}

input.addEventListener('input', () => {
  clearTimeout(debounceTimer);
  const q = input.value.trim();
  if(q.length < 1){ suggBox.style.display='none'; suggSeq++; return; }
  const delay = q.length === 1 ? 220 : 140;
  debounceTimer = setTimeout(() => fetchSuggestions(q), delay);
});
document.getElementById('searchBtn').addEventListener('click', () => {
  const q = input.value.trim();
  if(q) geocodeAndLoad(q);
});
function showToast(message, opts = {}){
  const stack = document.getElementById('toastStack');
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `${opts.icon || ICONS.checkCircle}<span>${message}</span>`;
  stack.appendChild(el);
  const life = opts.duration || 3200;
  setTimeout(() => {
    el.classList.add('out');
    setTimeout(() => el.remove(), 220);
  }, life);
}

async function startProCheckout(buttons){
  buttons.filter(Boolean).forEach(button => {
    button.disabled = true;
    button.textContent = 'Opening secure checkout…';
  });

  try {
    const response = await fetch(CHECKOUT_ENDPOINT, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({priceId: STRIPE_PRICE_ID}),
    });
    const result = await response.json().catch(() => ({}));
    if(!response.ok) throw new Error(result.error || `Checkout request failed (${response.status})`);
    if(typeof result.url !== 'string' || !result.url.startsWith('https://checkout.stripe.com/')){
      throw new Error('Checkout endpoint returned an invalid Stripe URL');
    }
    window.location.assign(result.url);
  } catch(error) {
    buttons.filter(Boolean).forEach(button => {
      button.disabled = false;
      button.textContent = button.id === 'unlockProBtn2' ? 'Unlock Pro — $4.99/mo' : 'Unlock Pro';
    });
    const message = error.message.includes('Failed to fetch')
      ? 'Checkout server is not running. Start it with npm start.'
      : `Checkout failed: ${error.message}`;
    showToast(message, {icon: ICONS.alertTriangle, duration: 5000});
    console.error('Unable to start Stripe Checkout:', error);
  }
}

const voiceBtn = document.getElementById('voiceBtn');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;

if(SpeechRecognition){
  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = navigator.language || 'en-US';

  recognition.onstart = () => {
    voiceBtn.classList.add('is-listening');
    voiceBtn.setAttribute('aria-pressed', 'true');
    voiceBtn.title = 'Stop listening';
    input.placeholder = 'Listening…';
  };
  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map(result => result[0].transcript)
      .join('')
      .trim();
    input.value = transcript;
  };
  recognition.onerror = (event) => {
    if(event.error !== 'aborted' && event.error !== 'no-speech'){
      showToast(event.error === 'not-allowed'
        ? 'Microphone access was blocked. Allow it in your browser settings to use voice search.'
        : 'Voice search could not start. Please try again.', { icon: ICONS.alertTriangle });
    }
  };
  recognition.onend = () => {
    const query = input.value.trim();
    voiceBtn.classList.remove('is-listening');
    voiceBtn.setAttribute('aria-pressed', 'false');
    voiceBtn.title = 'Use voice search';
    input.placeholder = 'Search city, area, or postal code…';
    if(query) geocodeAndLoad(query);
  };
} else {
  voiceBtn.title = 'Voice search is not supported in this browser';
}

voiceBtn.addEventListener('click', () => {
  if(!recognition){
    showToast('Voice search is not supported in this browser.', { icon: ICONS.alertTriangle });
    return;
  }
  if(voiceBtn.classList.contains('is-listening')){
    recognition.stop();
    return;
  }
  input.value = '';
  suggBox.style.display = 'none';
  try {
    recognition.start();
  } catch(error) {
    if(error.name !== 'InvalidStateError') throw error;
  }
});

function updateBellIcon(){
  const btn = document.getElementById('bellBtn');
  btn.innerHTML = alertsEnabled ? ICONS.bellOff : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 9a5 5 0 0 1 10 0c0 4.2 1.6 5.4 1.6 5.4H5.4S7 13.2 7 9z"/><path d="M10.5 17.5c0 .9.7 1.5 1.5 1.5s1.5-.6 1.5-1.5"/></svg>`;
  btn.title = alertsEnabled ? 'Alerts on — click to turn off' : 'Enable weather alerts';
  btn.style.color = alertsEnabled ? 'var(--accent-ink)' : '';
}
document.getElementById('bellBtn').addEventListener('click', async () => {
  if(alertsEnabled){
    alertsEnabled = false;
    localStorage.setItem('skyline_alerts','0');
    updateBellIcon();
    showToast('Weather alerts turned off.', { icon: ICONS.bellOff });
    return;
  }
  if('Notification' in window){
    const perm = await Notification.requestPermission();
    if(perm !== 'granted'){
      showToast("Notifications blocked — you'll still see in-app alert banners.", { icon: ICONS.alertTriangle });
      alertsEnabled = true;
      localStorage.setItem('skyline_alerts','1');
      updateBellIcon();
      if(currentData) checkAlerts(currentData, currentName);
      return;
    }
  }
  alertsEnabled = true;
  localStorage.setItem('skyline_alerts','1');
  updateBellIcon();
  showToast("Weather alerts enabled — we'll notify you of severe conditions.");
  if(currentData) checkAlerts(currentData, currentName);
});
updateBellIcon();

function computeBestOutdoorWindow(data, startIdx){
  const hrs = data.hourly;
  const n = Math.min(24, hrs.time.length - startIdx);
  let bestStart = -1, bestLen = 0, curStart = -1, curLen = 0;
  for(let i = 0; i < n; i++){
    const idx = startIdx + i;
    const t = hrs.temperature_2m[idx];
    const precip = hrs.precipitation_probability[idx];
    const wind = hrs.wind_speed_10m[idx];
    const comfy = t >= 15 && t <= 30 && precip < 30 && wind < 30;
    if(comfy){
      if(curStart === -1) curStart = i;
      curLen++;
      if(curLen > bestLen){ bestLen = curLen; bestStart = curStart; }
    } else {
      curStart = -1; curLen = 0;
    }
  }
  if(bestLen < 2) return null;
  const startTime = new Date(hrs.time[startIdx + bestStart]);
  const endTime = new Date(hrs.time[startIdx + bestStart + bestLen - 1]);
  endTime.setHours(endTime.getHours() + 1);
  const fmt = (d) => d.toLocaleTimeString([], {hour:'numeric'});
  return { label: `${fmt(startTime)} – ${fmt(endTime)}`, hours: bestLen };
}

function computePressureRisk(data, startIdx){
  const hrs = data.hourly;
  const n = Math.min(9, hrs.time.length - startIdx);
  let maxDrop = 0;
  for(let i = 0; i < n - 3; i++){
    const a = hrs.pressure_msl[startIdx + i];
    const b = hrs.pressure_msl[startIdx + i + 3];
    const drop = a - b;
    if(drop > maxDrop) maxDrop = drop;
  }
  if(maxDrop >= 5){
    return { risk: maxDrop >= 8 ? 'high' : 'moderate', drop: maxDrop.toFixed(1) };
  }
  return null;
}

function computeLaundryScore(data, startIdx){
  const hrs = data.hourly;
  const n = Math.min(10, hrs.time.length - startIdx);
  let humSum = 0, windSum = 0, precipMax = 0;
  for(let i = 0; i < n; i++){
    const idx = startIdx + i;
    humSum += hrs.relative_humidity_2m[idx];
    windSum += hrs.wind_speed_10m[idx];
    precipMax = Math.max(precipMax, hrs.precipitation_probability[idx]);
  }
  const avgHum = humSum / n;
  const avgWind = windSum / n;
  let score = 100;
  score -= Math.max(0, avgHum - 55) * 1.1;
  score -= precipMax * 0.8;
  if(avgWind < 5) score -= 10;
  if(avgWind > 35) score -= 15;
  score = Math.max(0, Math.min(100, Math.round(score)));
  let label = 'Poor drying day';
  if(score >= 75) label = 'Great drying day';
  else if(score >= 50) label = 'Decent drying day';
  else if(score >= 30) label = 'Slow drying day';
  return { score, label };
}

function getActiveAlerts(data){
  const cur = data.current;
  const alerts = [];
  if(cur.apparent_temperature >= 40){
    alerts.push({key:'heat', title:'Extreme heat warning', desc:`Feels like ${Math.round(cur.apparent_temperature)}°C — stay hydrated and limit sun exposure.`});
  }
  if(cur.apparent_temperature <= -10){
    alerts.push({key:'cold', title:'Extreme cold warning', desc:`Feels like ${Math.round(cur.apparent_temperature)}°C — dress in layers and limit time outdoors.`});
  }
  const wmo = WMO[cur.weather_code];
  if(wmo && wmo.cat === 'storm'){
    alerts.push({key:'storm', title:'Thunderstorm alert', desc:'Lightning risk in the area — avoid open spaces and tall isolated trees.'});
  }
  if(cur.wind_speed_10m >= 45){
    alerts.push({key:'wind', title:'High wind advisory', desc:`Sustained winds near ${Math.round(cur.wind_speed_10m)} km/h — secure loose outdoor items.`});
  }
  if(data.daily && data.daily.uv_index_max && data.daily.uv_index_max[0] >= 8){
    alerts.push({key:'uv', title:'Very high UV today', desc:'Sun protection strongly recommended between 10am and 4pm.'});
  }
  if(data._aqi !== null && data._aqi !== undefined && data._aqi >= 100){
    alerts.push({key:'aqi', title:'Unhealthy air quality', desc:`AQI ${Math.round(data._aqi)} — sensitive groups should reduce outdoor exertion.`});
  }
  return alerts;
}

function checkAlerts(data, name){
  if(!alertsEnabled || !('Notification' in window) || Notification.permission !== 'granted') return;
  const alerts = getActiveAlerts(data);
  alerts.forEach(a => {
    const k = name + ':' + a.key;
    if(!notifiedKeys.has(k)){
      notifiedKeys.add(k);
      new Notification('Skyline — ' + a.title, { body: a.desc });
    }
  });
}

document.getElementById('locBtn').addEventListener('click', () => {
  if(!navigator.geolocation){ return; }
  app.innerHTML = '<div class="status">Getting your location…</div>';
  navigator.geolocation.getCurrentPosition(
    (pos) => loadWeather(pos.coords.latitude, pos.coords.longitude, 'Your location'),
    () => { app.innerHTML = '<div class="status error">Couldn\'t access your location. Check browser permissions and try again.</div>'; }
  );
});
input.addEventListener('keydown', (e) => {
  if(e.key === 'Enter'){
    suggBox.style.display='none';
    const q = input.value.trim();
    if(q) geocodeAndLoad(q);
  }
});
document.addEventListener('click', (e) => {
  if(!suggBox.contains(e.target) && e.target !== input) suggBox.style.display='none';
});

let suggSeq = 0;

function isPincodeLike(q){
  return /^[0-9]{3,10}$/.test(q) || /^[a-z0-9]{2,4}[\s-]?[0-9a-z]{2,4}$/i.test(q) && /\d/.test(q) && q.length <= 8;
}

async function searchOpenMeteo(q){
  try{
    const res = await fetchWithTimeout(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=6&language=en&format=json`, 5000);
    const data = await res.json();
    if(!data.results) return [];
    return data.results.map(r => ({
      lat: r.latitude, lon: r.longitude,
      name: r.name,
      sub: [r.admin1, r.country].filter(Boolean).join(', '),
      full: `${r.name}${r.admin1 ? ', '+r.admin1 : ''}, ${r.country}`
    }));
  }catch(e){ return []; }
}

async function searchNominatim(q){
  try{
    const res = await fetchWithTimeout(`https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&limit=6&q=${encodeURIComponent(q)}`, 6000);
    const data = await res.json();
    if(!Array.isArray(data)) return [];
    return data.map(r => {
      const a = r.address || {};
      const primary = a.city || a.town || a.village || a.county || a.suburb || r.name || r.display_name.split(',')[0];
      const sub = [a.state, a.country].filter(Boolean).join(', ');
      return {
        lat: parseFloat(r.lat), lon: parseFloat(r.lon),
        name: primary, sub,
        full: [primary, a.state, a.country].filter(Boolean).join(', ')
      };
    });
  }catch(e){ return []; }
}

function dedupeResults(results){
  const seen = new Set();
  const out = [];
  for(const r of results){
    const key = `${r.lat.toFixed(2)},${r.lon.toFixed(2)}`;
    if(!seen.has(key)){ seen.add(key); out.push(r); }
  }
  return out;
}

async function fetchSuggestions(q){
  const mySeq = ++suggSeq;
  const pincodeLike = isPincodeLike(q);
  try{
    let results;
    if(pincodeLike){
      const [omResults, nomResults] = await Promise.all([searchOpenMeteo(q), searchNominatim(q)]);
      results = dedupeResults([...nomResults, ...omResults]);
    } else {
      results = await searchOpenMeteo(q);
      if(results.length < 3){
        const nomResults = await searchNominatim(q);
        results = dedupeResults([...results, ...nomResults]);
      }
    }
    if(mySeq !== suggSeq) return; // a newer keystroke superseded this
    if(!results.length){ suggBox.style.display='none'; return; }
    suggBox.innerHTML = results.slice(0,6).map(r =>
      `<div data-lat="${r.lat}" data-lon="${r.lon}" data-name="${r.full}">
        ${ICONS.pin}
        <div><div class="s-name">${r.name}</div><div class="s-sub">${r.sub}</div></div>
      </div>`
    ).join('');
    suggBox.style.display='block';
    suggBox.querySelectorAll('div[data-lat]').forEach(el => {
      el.addEventListener('click', () => {
        suggBox.style.display='none';
        input.value = el.dataset.name;
        loadWeather(parseFloat(el.dataset.lat), parseFloat(el.dataset.lon), el.dataset.name);
      });
    });
  }catch(e){ if(mySeq === suggSeq) suggBox.style.display='none'; }
}

async function geocodeAndLoad(q){
  app.innerHTML = '<div class="status">Searching…</div>';
  suggBox.style.display = 'none';
  try{
    const pincodeLike = isPincodeLike(q);
    let results = pincodeLike ? await searchNominatim(q) : await searchOpenMeteo(q);
    if(!results.length){
      results = pincodeLike ? await searchOpenMeteo(q) : await searchNominatim(q);
    }
    if(!results.length){
      app.innerHTML = `<div class="status error">Couldn't find "${q}". Try a different spelling, a nearby larger city, or a full postal code.</div>`;
      return;
    }
    const r = results[0];
    loadWeather(r.lat, r.lon, r.full);
  }catch(e){
    app.innerHTML = '<div class="status error">Network issue reaching the weather service. Check your connection and try again.</div>';
  }
}

function fetchWithTimeout(url, ms = 10000){
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);
  return fetch(url, { signal: controller.signal }).finally(() => clearTimeout(id));
}

let loadToken = 0;
async function loadWeather(lat, lon, name){
  const myToken = ++loadToken;
  app.innerHTML = '<div class="status">Fetching forecast…</div>';
  try{
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
      `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,is_day,pressure_msl,visibility` +
      `&hourly=temperature_2m,weather_code,precipitation_probability,uv_index,pressure_msl,wind_speed_10m,relative_humidity_2m` +
      `&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max` +
      `&timezone=auto&forecast_days=14`;
    const aqUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=us_aqi&timezone=auto`;
    const aqRequest = fetchWithTimeout(aqUrl);
    const res = await fetchWithTimeout(url);
    if(myToken !== loadToken) return; // a newer request superseded this one
    const data = await res.json();
    data._aqi = null;
    data._lat = lat; data._lon = lon;
    currentData = data; currentName = name;
    render(data, name);

    try{
      const aqRes = await aqRequest;
      const aqData = await aqRes.json();
      if(myToken !== loadToken) return;
      data._aqi = aqData.current ? aqData.current.us_aqi : null;
      render(data, name);
    }catch(e){
      // Air quality is optional; the weather forecast is already usable.
    }
  }catch(e){
    if(myToken !== loadToken) return;
    app.innerHTML = '<div class="status error">Couldn\'t load the forecast right now. Please try again in a moment.</div>';
  }
}

function renderFavs(){
  const favRow = document.getElementById('favRow');
  favRow.innerHTML = favorites.map(f =>
    `<div class="fav-chip" data-lat="${f.lat}" data-lon="${f.lon}" data-name="${f.name}">
      ${ICONS.pin} ${f.name.split(',')[0]}
      <span class="rm" data-rm="${f.name}">${ICONS.x}</span>
    </div>`
  ).join('');
  favRow.querySelectorAll('.fav-chip').forEach(el => {
    el.addEventListener('click', (e) => {
      if(e.target.closest('.rm')) return;
      loadWeather(parseFloat(el.dataset.lat), parseFloat(el.dataset.lon), el.dataset.name);
    });
  });
  favRow.querySelectorAll('.rm').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      favorites = favorites.filter(f => f.name !== el.dataset.rm);
      localStorage.setItem('skyline_favs', JSON.stringify(favorites));
      renderFavs();
    });
  });
}

function drawTempChart(canvas, times, temps){
  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = canvas.clientWidth;
  const h = 90;
  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0,0,w,h);
  const min = Math.min(...temps), max = Math.max(...temps);
  const pad = 16;
  const xStep = (w - pad*2) / (temps.length - 1);
  const yFor = (t) => h - pad - ((t - min) / (max - min || 1)) * (h - pad*2);

  ctx.beginPath();
  temps.forEach((t, i) => {
    const x = pad + i*xStep, y = yFor(t);
    if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  });
  const grad = ctx.createLinearGradient(0,0,0,h);
  grad.addColorStop(0, 'rgba(139,124,246,0.9)');
  grad.addColorStop(1, 'rgba(96,165,250,0.9)');
  ctx.strokeStyle = grad;
  ctx.lineWidth = 4;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.stroke();

  ctx.lineTo(pad + (temps.length-1)*xStep, h);
  ctx.lineTo(pad, h);
  ctx.closePath();
  const fillGrad = ctx.createLinearGradient(0,0,0,h);
  fillGrad.addColorStop(0, 'rgba(139,124,246,0.18)');
  fillGrad.addColorStop(1, 'rgba(139,124,246,0.0)');
  ctx.fillStyle = fillGrad;
  ctx.fill();

  ctx.fillStyle = '#8B7CF6';
  temps.forEach((t,i) => {
    const x = pad + i*xStep, y = yFor(t);
    ctx.beginPath();
    ctx.arc(x,y,4,0,Math.PI*2);
    ctx.fill();
  });
}

function drawPrecipChart(canvas, percents){
  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = canvas.clientWidth;
  const h = 70;
  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0,0,w,h);
  const pad = 10;
  const barGap = 6;
  const barW = (w - pad*2 - barGap*(percents.length-1)) / percents.length;
  percents.forEach((p, i) => {
    const barH = Math.max(2, (p/100) * (h - pad*2));
    const x = pad + i*(barW+barGap);
    const y = h - pad - barH;
    ctx.fillStyle = p >= 50 ? 'rgba(91,169,230,0.85)' : 'rgba(91,169,230,0.4)';
    const r = Math.min(6, barW/2);
    ctx.beginPath();
    ctx.moveTo(x, y+r);
    ctx.arcTo(x, y, x+r, y, r);
    ctx.lineTo(x+barW-r, y);
    ctx.arcTo(x+barW, y, x+barW, y+r, r);
    ctx.lineTo(x+barW, h-pad);
    ctx.lineTo(x, h-pad);
    ctx.closePath();
    ctx.fill();
  });
}


function render(data, name){
  const cur = data.current;
  const wmo = WMO[cur.weather_code] || {label:'Unknown', icon:'cloud', cat:'cloud'};
  const isDay = cur.is_day === 1;
  let iconKey = wmo.icon;
  if(iconKey === 'sun' && !isDay) iconKey = 'moon';
  if(iconKey === 'cloudSun' && !isDay) iconKey = 'cloudMoon';
  const gradKey = `${wmo.cat}_${isDay ? 'day':'night'}`;
  const gradient = SKY_GRADIENTS[gradKey] || SKY_GRADIENTS.clear_day;

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});

  let particlesHTML = '';
  if(wmo.cat === 'rain' || wmo.cat === 'storm'){
    for(let i=0;i<24;i++){
      const left = Math.random()*100;
      const dur = (0.5 + Math.random()*0.6).toFixed(2);
      const delay = (Math.random()*2).toFixed(2);
      particlesHTML += `<div class="drop" style="left:${left}%; animation-duration:${dur}s; animation-delay:${delay}s;"></div>`;
    }
  } else if(wmo.cat === 'snow'){
    for(let i=0;i<16;i++){
      const left = Math.random()*100;
      const dur = (3 + Math.random()*3).toFixed(2);
      const delay = (Math.random()*3).toFixed(2);
      particlesHTML += `<div class="flake" style="left:${left}%; animation-duration:${dur}s; animation-delay:${delay}s;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2v20M4 7l16 10M4 17L20 7"/></svg></div>`;
    }
  } else if(wmo.cat === 'cloud' || wmo.cat === 'fog'){
    particlesHTML += `<div class="cloud-svg" style="top:16px;left:-10px;"><svg width="150" height="60" viewBox="0 0 150 60" fill="white"><ellipse cx="60" cy="35" rx="55" ry="22"/><ellipse cx="100" cy="28" rx="35" ry="18"/></svg></div>`;
  } else if(wmo.cat === 'clear' && isDay){
    particlesHTML += `<div class="sun-glow"></div>`;
  } else if(wmo.cat === 'clear' && !isDay){
    for(let i=0;i<30;i++){
      const top = Math.random()*100;
      const left = Math.random()*100;
      particlesHTML += `<div class="star" style="top:${top}%; left:${left}%;"></div>`;
    }
  }

  const totalDays = data.daily.time.length;
  const dailyHTML = data.daily.time.map((d, i) => {
    const date = new Date(d);
    const dayLabel = i === 0 ? 'Today' : date.toLocaleDateString([], {weekday:'short'});
    const w = WMO[data.daily.weather_code[i]] || {icon:'cloud'};
    return `<div class="fday">
      <div class="d">${dayLabel}</div>
      <div class="ic">${ICONS[w.icon]}</div>
      <div class="hi">${fmtTemp(data.daily.temperature_2m_max[i])}</div>
      <div class="lo">${fmtTemp(data.daily.temperature_2m_min[i])}</div>
    </div>`;
  }).join('');
  const freeDailyHTML = data.daily.time.slice(0, FREE_FORECAST_DAYS).map((d, i) => {
    const date = new Date(d);
    const dayLabel = i === 0 ? 'Today' : date.toLocaleDateString([], {weekday:'short'});
    const w = WMO[data.daily.weather_code[i]] || {icon:'cloud'};
    return `<div class="fday">
      <div class="d">${dayLabel}</div>
      <div class="ic">${ICONS[w.icon]}</div>
      <div class="hi">${fmtTemp(data.daily.temperature_2m_max[i])}</div>
      <div class="lo">${fmtTemp(data.daily.temperature_2m_min[i])}</div>
    </div>`;
  }).join('');

  const nowIdx = data.hourly.time.findIndex(t => new Date(t) >= now);
  const startIdx = Math.max(0, nowIdx);
  const hourlySlice = data.hourly.time.slice(startIdx, startIdx+12);
  const hourlyHTML = hourlySlice.map((t, i) => {
    const idx = startIdx + i;
    const date = new Date(t);
    const hourLabel = i === 0 ? 'Now' : date.toLocaleTimeString([], {hour:'numeric'});
    const w = WMO[data.hourly.weather_code[idx]] || {icon:'cloud'};
    return `<div class="hitem">
      <div class="t">${hourLabel}</div>
      <div class="ic">${ICONS[w.icon]}</div>
      <div class="v">${fmtTemp(data.hourly.temperature_2m[idx])}</div>
    </div>`;
  }).join('');

  const chartTemps = hourlySlice.map((t,i) => data.hourly.temperature_2m[startIdx+i]);
  const chartPrecip = hourlySlice.map((t,i) => data.hourly.precipitation_probability[startIdx+i]);

  const bestWindow = computeBestOutdoorWindow(data, startIdx);
  const pressureRisk = computePressureRisk(data, startIdx);
  const laundry = computeLaundryScore(data, startIdx);

  const outlookCards = [];
  if(bestWindow){
    outlookCards.push(`
      <div class="outlook-card">
        <div class="outlook-ic" style="background:linear-gradient(135deg,#5AA9E6,#8B7CF6);">${ICONS.activity}</div>
        <div class="outlook-body">
          <div class="outlook-title">Best time to be outside <span class="new-badge">New</span></div>
          <div class="outlook-desc">${bestWindow.label} looks most comfortable — mild temps, low rain chance, calm wind.</div>
        </div>
      </div>`);
  }
  if(pressureRisk){
    outlookCards.push(`
      <div class="outlook-card">
        <div class="outlook-ic" style="background:linear-gradient(135deg,#F97316,#DC2626);">${ICONS.heartPulse}</div>
        <div class="outlook-body">
          <div class="outlook-title">Pressure drop detected <span class="new-badge">New</span></div>
          <div class="outlook-desc">Barometric pressure is falling ${pressureRisk.drop} hPa over a few hours — people sensitive to migraines or joint pain sometimes notice symptoms around drops like this.</div>
        </div>
      </div>`);
  }
  outlookCards.push(`
    <div class="outlook-card">
      <div class="outlook-ic" style="background:linear-gradient(135deg,#34D399,#0EA5E9);">${ICONS.shirt}</div>
      <div class="outlook-body">
        <div class="outlook-title">Laundry day score <span class="new-badge">New</span></div>
        <div class="outlook-desc">${laundry.label} — humidity, wind and rain chance combined into one call on whether to hang washing out today.</div>
      </div>
      <div class="outlook-score">${laundry.score}</div>
    </div>`);
  const outlookHTML = outlookCards.length ? `
    <div class="section-title">Today's outlook</div>
    <div class="outlook-grid">${outlookCards.join('')}</div>
  ` : '';

  let aqiHTML = '';
  if(data._aqi !== null && data._aqi !== undefined){
    const level = AQI_LEVELS.find(l => data._aqi <= l.max);
    aqiHTML = `
      <div class="section-title">Air quality <span class="pro-badge">Pro</span></div>
      <div class="aqi-card">
        <svg class="aqi-ring" width="72" height="72" viewBox="0 0 72 72">
          <circle cx="36" cy="36" r="30" fill="none" stroke="#ECE9F9" stroke-width="8"/>
          <circle cx="36" cy="36" r="30" fill="none" stroke="${level.color}" stroke-width="8"
            stroke-dasharray="${2*Math.PI*30}" stroke-dashoffset="${2*Math.PI*30*(1-Math.min(data._aqi,150)/150)}"
            stroke-linecap="round" transform="rotate(-90 36 36)"/>
          <text x="36" y="41" text-anchor="middle" font-family="Manrope" font-weight="800" font-size="18" fill="#1B2033">${Math.round(data._aqi)}</text>
        </svg>
        <div class="aqi-info">
          <div class="aqi-title">${level.label}</div>
          <div class="aqi-desc">${level.desc}</div>
        </div>
      </div>`;
  }

  const isFav = favorites.some(f => f.name === name);

  const activeAlerts = getActiveAlerts(data);
  const alertsHTML = activeAlerts.length ? `
    <div class="alert-stack">
      ${activeAlerts.map(a => `
        <div class="alert-banner">
          ${ICONS.alertTriangle}
          <div>
            <div class="alert-title">${a.title}</div>
            <div class="alert-desc">${a.desc}</div>
          </div>
        </div>
      `).join('')}
    </div>` : '';

  const proInnerHTML = `
    <div class="section-title">Next 12 hours <span class="pro-badge">Pro</span></div>
    <div class="chart-card">
      <div class="chart-mini-label">Temperature</div>
      <canvas style="width:100%; height:90px; display:block;" id="tempChart"></canvas>
    </div>
    <div class="chart-card">
      <div class="chart-mini-label">Chance of rain</div>
      <canvas style="width:100%; height:70px; display:block;" id="precipChart"></canvas>
    </div>
    <div class="hourly-scroll">${hourlyHTML}</div>
    ${aqiHTML}
  `;

  const proSectionHTML = isPro ? proInnerHTML : `
    <div class="pro-wrap">
      <div class="pro-locked">${proInnerHTML}</div>
      <div class="pro-overlay">
        <div class="pricing-card">
          <div class="lock-ic">${ICONS.lock}</div>
          <div class="pricing-title">Unlock Skyline Pro</div>
          <div class="pricing-desc">Hourly trend chart, live air quality, UV index and more forecast detail.</div>
          <div class="pricing-amount">$4.99</div>
          <div class="pricing-period">per month, cancel anytime</div>
          <button class="pricing-cta" id="unlockProBtn">Unlock Pro</button>
        </div>
      </div>
    </div>`;

  app.innerHTML = `
    ${alertsHTML}
    <div class="hero">
      <div class="hero-sky" style="background:${gradient};"></div>
      <div class="particles">${particlesHTML}</div>
      <div class="hero-content">
        <div class="loc-line">
          ${ICONS.pin} ${name} <span class="badge">${timeStr} local</span>
          <span class="fav-toggle" id="favToggle">${isFav ? ICONS.starFill : ICONS.star}</span>
        </div>
        <div class="loc-name">${wmo.label}</div>
        <div class="temp-row">
          <div class="temp-big">${fmtTemp(cur.temperature_2m)}</div>
          <div class="temp-meta">
            <div class="condition">${ICONS[iconKey]} ${isDay ? 'Daytime' : 'Nighttime'}</div>
            <div class="feels">Feels like ${fmtTemp(cur.apparent_temperature)}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-top">${ICONS.drop}<div class="stat-label">Humidity</div></div>
        <div class="stat-value">${cur.relative_humidity_2m}%</div>
        <div class="stat-sub">Relative</div>
      </div>
      <div class="stat-card">
        <div class="stat-top">${ICONS.wind}<div class="stat-label">Wind</div></div>
        <div class="stat-value">${Math.round(cur.wind_speed_10m)}</div>
        <div class="stat-sub">km/h</div>
      </div>
      <div class="stat-card">
        <div class="stat-top">${ICONS.sunrise}<div class="stat-label">Sunset</div></div>
        <div class="stat-value">${new Date(data.daily.sunset[0]).toLocaleTimeString([], {hour:'numeric', minute:'2-digit'})}</div>
        <div class="stat-sub">Rise ${new Date(data.daily.sunrise[0]).toLocaleTimeString([], {hour:'numeric', minute:'2-digit'})}</div>
      </div>
      <div class="stat-card">
        <div class="stat-top">${ICONS.gauge}<div class="stat-label">Pressure</div></div>
        <div class="stat-value">${Math.round(cur.pressure_msl)}</div>
        <div class="stat-sub">hPa</div>
      </div>
      <div class="stat-card">
        <div class="stat-top">${ICONS.eye}<div class="stat-label">Visibility</div></div>
        <div class="stat-value">${(cur.visibility/1000).toFixed(1)}</div>
        <div class="stat-sub">km</div>
      </div>
      <div class="stat-card">
        <div class="stat-top">${ICONS.uv}<div class="stat-label">UV index</div></div>
        <div class="stat-value">${Math.round(data.daily.uv_index_max[0])}</div>
        <div class="stat-sub">${data.daily.uv_index_max[0] > 7 ? 'Very high' : data.daily.uv_index_max[0] > 5 ? 'High' : 'Moderate'}</div>
      </div>
    </div>

    ${outlookHTML}

    ${proSectionHTML}

    <div class="section-title" style="margin-top:24px;">${isPro ? '14-day forecast' : '7-day forecast'} ${totalDays > FREE_FORECAST_DAYS ? '<span class="pro-badge">'+(isPro?'Pro':'Pro')+'</span>' : ''}</div>
    ${isPro ? `<div class="forecast-scroll">${dailyHTML}</div>` : `
      <div class="forecast-scroll">${freeDailyHTML}</div>
      <div class="pro-wrap" style="margin-top:10px;">
        <div class="pro-locked"><div class="forecast-scroll">${dailyHTML.split('</div>').slice(0,0).join('')}${Array(4).fill('<div class=\"fday\"><div class=\"d\">Day</div><div class=\"ic\"></div><div class=\"hi\">--°</div><div class=\"lo\">--°</div></div>').join('')}</div></div>
        <div class="pro-overlay">
          <div class="pricing-card">
            <div class="lock-ic">${ICONS.lock}</div>
            <div class="pricing-title">7 more days with Pro</div>
            <div class="pricing-desc">See a full 14-day outlook instead of just this week.</div>
            <button class="pricing-cta" id="unlockProBtn2">Unlock Pro — $4.99/mo</button>
          </div>
        </div>
      </div>
    `}

    <div class="footer">
      <span>Built by</span>
      <a href="https://github.com/RajPolu" target="_blank" rel="noopener">${ICONS.github} RajPolu</a>
    </div>
  `;

  const canvas = document.getElementById('tempChart');
  if(canvas) drawTempChart(canvas, hourlySlice, chartTemps);
  const precipCanvas = document.getElementById('precipChart');
  if(precipCanvas) drawPrecipChart(precipCanvas, chartPrecip);

  document.getElementById('favToggle').addEventListener('click', () => {
    const idx = favorites.findIndex(f => f.name === name);
    if(idx >= 0){ favorites.splice(idx,1); }
    else {
      if(!isPro && favorites.length >= FREE_FAV_LIMIT){
        alert(`Free plan is limited to ${FREE_FAV_LIMIT} saved cities. Unlock Pro for unlimited favorites.`);
        return;
      }
      favorites.push({name, lat: data._lat, lon: data._lon});
    }
    localStorage.setItem('skyline_favs', JSON.stringify(favorites));
    renderFavs();
    render(data, name);
  });

  const unlockBtn = document.getElementById('unlockProBtn');
  const unlockBtn2 = document.getElementById('unlockProBtn2');
  [unlockBtn, unlockBtn2].forEach(b => {
    if(b){
      b.addEventListener('click', () => startProCheckout([unlockBtn, unlockBtn2]));
    }
  });

  checkAlerts(data, name);
}

renderFavs();
geocodeAndLoad('Tirupati');