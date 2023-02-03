let currencyElement = document.querySelector(".jsCurrency");
let amountElement = document.querySelector(".jsAmount");
let button = document.querySelector(".jsButton");
let resultElement = document.querySelector(".jsResult");
let formElement = document.querySelector(".jsForm");

let currencyUSD = 4.3252;
let currencyCHF = 4.6981;
let currencyGBP = 5.3505;
let currencyMXN = 0.2304;

formElement.addEventListener("input", () => {

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result = resultElement.value;

    switch (currency) {
        case "USD":
            result = amount / currencyUSD;
            break;
        case "CHF":
            result = amount / currencyCHF;
            break;
        case "GBP":
            result = amount / currencyCHF;
            break;
        case  "MXN":
            result = amount / currencyMXN;
            break;
    }

    resultElement.innerText = result.toFixed(2);

});