

const TOKEN_URL = 'https://api.dexscreener.com/latest/dex/tokens/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN';
const tokenomicsContainter = document.getElementById("tokenomicsContainer");
const dataContainer = document.getElementById("dataContainer")

async function getToken(){
    const response = await fetch(TOKEN_URL);
    const data = await response.json();
    console.log(data);
}

getToken();

/*
fetch(TOKEN_URL)
    .then(response => response.json())
    .then(responseJson => {
        // Assuming you want to iterate over the "pairs" array in the response

        let div = document.createElement('div');
        let liData = document.createElement('div'); 

        for (let pair of responseJson.pairs) {


            liData.innerHTML = `
            <li> 24h Volume: ${pair.volume.h4.toLocaleString('en-US')}</li>
            <li class="font-metropolis text-white text-4xl border-2 w-80">Holders: PLACEHOLDER</li> 
            <li class="font-metropolis text-white text-4xl border-2 w-80">Marketcap: ${pair.fdv.toLocaleString('en-US')}</li> 
            `

            

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
        dataContainer.append(liData);
        // You can add more logic here to display or use the data as needed
    })
    .catch(error => {
        console.error('Error fetching data: ', error);
    });
*/