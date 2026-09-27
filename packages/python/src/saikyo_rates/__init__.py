"""Client for the public SAIKYO API (https://saikyo.exchange/en/mcp-server)."""
import json
import urllib.parse
import urllib.request

__version__ = "1.0.0"
BASE = "https://saikyo.exchange/api/public"


def _get(path, **params):
    q = urllib.parse.urlencode({k: v for k, v in params.items() if v not in (None, "")})
    req = urllib.request.Request(BASE + path + ("?" + q if q else ""), headers={"Accept": "application/json", "User-Agent": "saikyo-rates-py/" + __version__})
    with urllib.request.urlopen(req, timeout=20) as r:
        return json.load(r)


def get_usdt_rub():
    """Indicative USDT/RUB rate. The final rate is shown in the order form."""
    return _get("/usdt-rub")


def get_card_terms():
    """Omega Wallet foreign Visa card terms."""
    return _get("/card-terms")


def how_to_pay(service, lang="en"):
    """How to pay for a foreign service from Russia, e.g. "Claude"."""
    return _get("/how-to-pay", service=service, lang=lang)


def travel_card(country, lang="en"):
    """Card tips for travelling to a country, e.g. "Turkey"."""
    return _get("/travel-card", country=country, lang=lang)


def search_shop(q, lang="en"):
    """Search Saikyo Shop (subscriptions, gift cards, game top-ups paid in RUB)."""
    return _get("/shop", q=q, lang=lang)
