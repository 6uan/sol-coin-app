

const TOKEN_URL = 'https://api.dexscreener.com/latest/dex/tokens/CJYcKVEmQhohCpYSgJzYipitxTazkNvmThws7jPcfkwU';

fetch(TOKEN_URL)
    .then(response => response.json())
    .then(responseJson => {
        // Assuming you want to iterate over the "pairs" array in the response
        for (let pair of responseJson.pairs) {
            console.log(pair.baseToken.name);
            console.log(pair.baseToken.symbol);
            console.log(pair.fdv); // For example, logging the name of the base token
            // You can similarly access other properties of each pair object
            // e.g., pair.quoteToken.name, pair.priceUsd, etc.
        }
        // You can add more logic here to display or use the data as needed
    })
    .catch(error => {
        console.error('Error fetching data: ', error);
    });
