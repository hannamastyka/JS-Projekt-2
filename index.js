document
  .getElementById("conventer")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    fetch(
      `https://api.nbp.pl/api/exchangerates/rates/a/${fromCurrency}/?format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data?.rates?.length > 0) {
          const exchangeRate = data.rates[0].mid;
          const result = amount * exchangeRate;

          document.getElementById("result").textContent = `${amount.toFixed(
            2
          )} ${fromCurrency} to ${toCurrency}: ${result.toFixed(
            2
          )} ${toCurrency}`;
        }
      })
      .catch(() => {
        document.getElementById("result").textContent =
          "Wystąpił błąd podczas pobierania danych z API.";
      });
  });
