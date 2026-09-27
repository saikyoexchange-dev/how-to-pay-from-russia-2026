export function getUsdtRub(): Promise<Record<string, unknown>>;
export function getCardTerms(): Promise<Record<string, unknown>>;
export function howToPay(service: string, lang?: 'en' | 'ru'): Promise<Record<string, unknown>>;
export function paymentPassport(service?: string, lang?: 'en' | 'ru'): Promise<Record<string, unknown>>;
export function travelCard(country: string, lang?: 'en' | 'ru'): Promise<Record<string, unknown>>;
export function searchShop(q: string, lang?: 'en' | 'ru'): Promise<Record<string, unknown>>;
