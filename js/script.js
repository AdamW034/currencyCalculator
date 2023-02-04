

{
    const calculateResult = () => {
        const currencyElement = document.querySelector(".jsCurrency");
        const amountElement = document.querySelector(".jsAmount");
        const resultElement = document.querySelector(".jsResult");
        const formElement = document.querySelector(".jsForm");

        formElement.addEventListener("input", () => {

            const currencyUSD = 4.3252;
            const currencyCHF = 4.6981;
            const currencyGBP = 5.3505;
            const currencyMXN = 0.2304;
            const amount = amountElement.value;
            const currency = currencyElement.value;
            const result = resultElement.value;
        
            switch (currency) {
                case "USD":
                   return result = amount / currencyUSD;

                case "CHF":
                   return result = amount / currencyCHF;

                case "GBP":
                   return result = amount / currencyGBP;
                    
                case "MXN":
                   return result = amount / currencyMXN;
            };
        
            resultElement.innerText = result.toFixed(2);
        
        });
    };

    calculateResult();
}