

const TOKEN_URL = 'https://api.dexscreener.com/latest/dex/tokens/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN';

const volume = document.getElementById("volumeContainer");
const holders = document.getElementById("holdersContainer");
const marketcap = document.getElementById("marketcapContainer");

async function getToken(){
    const response = await fetch(TOKEN_URL);
    const data = await response.json();
    console.log(data);
}

getToken();

const ctx = document.getElementById('tokenAllocationChart').getContext('2d');
const tokenAllocationChart = new Chart(ctx, {
    type: 'pie', // Defines chart type
    data: {
      labels: ['Presale', 'Public', 'Team'], // Replace with your actual data labels
      datasets: [{
        label: 'Token Allocation',
        data: [10, 20, 30], // Replace with your actual data values
        backgroundColor: [ // Add more colors for each segment
          'rgba(140, 114, 127, 0.2)',
          'rgba(89, 114, 127, 0.2)',
          'rgba(109, 103, 88, 0.2)',
        ],
        borderColor: [ // Border colors for each segment
          'rgba(140, 114, 127, 1)',
          'rgba(89, 114, 127, 1)',
          'rgba(109, 103, 88, 1)',
        ],
        borderWidth: 3
      }]
    },
    options: {
      responsive: true, // Ensures the chart is responsive
      plugins: {
        legend: {
          position: 'center', // Adjusts the legend position
        },
        title: {
          display: true,
          text: 'Token Allocation Breakdown' // Chart title
        }
      }
    }
  });

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