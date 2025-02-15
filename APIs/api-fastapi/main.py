from fastapi import FastAPI, HTTPException
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from exchange_rates import exchange_rates

app = FastAPI(title="Currency Converter API", description="Convierte monedas fácilmente")

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/", response_class=HTMLResponse)
def read_root():
    with open("static/index.html") as f:
        return HTMLResponse(content=f.read(), status_code=200)

@app.get("/convert/")
def convert_currency(amount: float, from_currency: str, to_currency: str):
    from_currency = from_currency.upper()
    to_currency = to_currency.upper()

    if from_currency not in exchange_rates or to_currency not in exchange_rates[from_currency]:
        raise HTTPException(status_code=400, detail="Moneda no soportada")

    converted_amount = amount * exchange_rates[from_currency][to_currency]
    return {
        "amount": amount,
        "from_currency": from_currency,
        "to_currency": to_currency,
        "converted_amount": round(converted_amount, 2),
    }