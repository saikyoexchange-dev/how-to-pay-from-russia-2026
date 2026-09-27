# saikyo-rates

Tiny client for the public SAIKYO API: indicative USDT/RUB rate, foreign Visa card terms, how to pay for foreign
services from Russia, travel card tips by country and Saikyo Shop search. No API key, read-only, JSON.

```python
import saikyo_rates
print(saikyo_rates.get_usdt_rub())
print(saikyo_rates.how_to_pay("Claude"))
```

Rates are indicative; the final rate and amount are shown in the order form before payment.
Docs: https://saikyo.exchange/en/mcp-server - OpenAPI: https://saikyo.exchange/openapi.json - Data license: CC BY 4.0.
