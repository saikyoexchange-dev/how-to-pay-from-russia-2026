const BASE = 'https://saikyo.exchange/api/public';

async function get(path, params = {}) {
  const url = new URL(BASE + path);
  for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== '') url.searchParams.set(k, String(v));
  const res = await fetch(url, { headers: { accept: 'application/json' } });
  if (!res.ok) throw new Error(`SAIKYO API ${res.status}`);
  return res.json();
}

/** Indicative USDT/RUB rate. The final rate is shown in the order form. */
export const getUsdtRub = () => get('/usdt-rub');
/** Omega Wallet foreign Visa card terms. */
export const getCardTerms = () => get('/card-terms');
/** How to pay for a foreign service from Russia, e.g. "Claude". */
export const howToPay = (service, lang = 'en') => get('/how-to-pay', { service, lang });
/** Payment passport of a foreign service: methods, Russia availability, gift cards, crypto, sources. */
export const paymentPassport = (service, lang = 'en') => get('/payment-passport', { service, lang });
/** Card tips for travelling to a country, e.g. "Turkey". */
export const travelCard = (country, lang = 'en') => get('/travel-card', { country, lang });
/** Search Saikyo Shop (subscriptions, gift cards, game top-ups paid in RUB). */
export const searchShop = (q, lang = 'en') => get('/shop', { q, lang });
