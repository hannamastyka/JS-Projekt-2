document.getElementById("convert").addEventListener("click", function () {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${fromCurrency}/?format=json`)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[0].mid;
            const result = amount * exchangeRate;

            document.getElementById("result").innerHTML = `${amount} ${fromCurrency} to ${toCurrency}: ${result.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => {
            console.error(error);
            document.getElementById("result").innerHTML = "Wystąpił błąd podczas pobierania danych z API.";
        });
});