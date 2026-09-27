# saikyo-rates

Tiny client for the public SAIKYO API: indicative USDT/RUB rate, foreign Visa card terms, how to pay for foreign
services from Russia, travel card tips by country and Saikyo Shop search. No API key, read-only, JSON.

```js
import { getUsdtRub, howToPay } from 'saikyo-rates';
console.log(await getUsdtRub());
console.log(await howToPay('Claude'));
```

Rates are indicative; the final rate and amount are shown in the order form before payment.
Docs: https://saikyo.exchange/en/mcp-server - OpenAPI: https://saikyo.exchange/openapi.json - Data license: CC BY 4.0.
