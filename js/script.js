

{
    const calculateResult = () => {

        const formElement = document.querySelector(".jsForm");
        const currencyElement = document.querySelector(".jsCurrency");
        const amountElement = document.querySelector(".jsAmount");
        const resultElement = document.querySelector(".jsResult");

        formElement.addEventListener("input", () => {

           
            const currencyUSD = 4.3252;
            const currencyCHF = 4.6981;
            const currencyGBP = 5.3505;
            const currencyMXN = 0.2304;
            const amount = amountElement.value;
            const currency = currencyElement.value;
        
            switch (currency) {
                case "USD":
                   result = amount / currencyUSD;
                   break;

                case "CHF":
                    result = amount / currencyCHF;
                    break;

                case "GBP":
                    result = amount / currencyGBP;
                    break;
                case "MXN":
                    result = amount / currencyMXN;
                    break;
            };
        
            resultElement.innerText = result.toFixed(2);
        
        });
    };

    calculateResult();
}