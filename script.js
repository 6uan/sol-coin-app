

const TOKEN_URL = 'https://api.dexscreener.com/latest/dex/tokens/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN';
const tokenomicsContainter = document.getElementById("tokenomicsContainer");


fetch(TOKEN_URL)
    .then(response => response.json())
    .then(responseJson => {
        // Assuming you want to iterate over the "pairs" array in the response

        let div = document.createElement('div');

        for (let pair of responseJson.pairs) {

            div.innerHTML = ` this is a test token name is ${pair.baseToken.symbol} <br>
            and the market cap is ${pair.fdv.toLocaleString('en-US')}`

            console.log(pair.baseToken.name);
            console.log(pair.baseToken.symbol);
            console.log(pair.fdv); 
            
            // For example, logging the name of the base token
            // You can similarly access other properties of each pair object
            // e.g., pair.quoteToken.name, pair.priceUsd, etc.
        }

        tokenomicsContainter.append(div);

        // You can add more logic here to display or use the data as needed
    })
    .catch(error => {
        console.error('Error fetching data: ', error);
    });
