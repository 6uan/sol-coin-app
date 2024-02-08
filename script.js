

const TOKEN_URL = 'https://api.dexscreener.com/latest/dex/tokens/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN';

const volumeElement = document.getElementById("volume");
const marketElement = document.getElementById("market");
const priceElement = document.getElementById("price");

async function getToken(){
    try {
        const response = await fetch(TOKEN_URL);
        const data = await response.json();

        // Assuming data structure has these paths - adjust according to actual response
        const marketCap = data.pairs[0].fdv; // Example path
        const volume24h = data.pairs[0].volume.h24; // Example path
        const price = data.pairs[0].priceChange.h24; // Example path

        // Update HTML content
        marketElement.textContent = `$ ${marketCap.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        volumeElement.textContent = `$ ${volume24h.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        priceElement.textContent = `$ ${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } catch (error) {
        console.error("Failed to fetch token data:", error);
    }
}

// Call the function to update the data on page load
getToken();

const ctx = document.getElementById('tokenAllocationChart').getContext('2d');
const tokenAllocationChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Ecosystem', 'Presale', 'Team', 'Treasury'],
      datasets: [{
        label: 'Token Allocation',
        data: [80, 10, 5, 5],
        backgroundColor: [
          '#8c727f', // Adjust colors to match your site
          '#59727f',
          '#6d6758',
          '#817126',
        ],
        borderColor: [
          '#8c727f',
          '#59727f',
          '#6d6758',
          '#817126',
        ],
        borderWidth: 1 // Adjusted for subtler borders
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false, // This can help with controlling the chart size
      plugins: {
        legend: {
          position: 'top', // Adjusted for better visibility
          labels: {
            color: '#4b3d30', // Example: '#333333', adjust to match your site's font color
            padding: 5, // Adjust padding
            font: {
                size: 15, // Example size
                family: "Faustina", // Ensure the font family matches exactly
                weight: "bolder",
            },
          },
        },
        title: {
          display: true,
          text: 'Token Allocation Breakdown',
          color: '#4b3d30', // Example: '#333333', adjust to match your site's title color
          font: {
            size: 35, // Example size
            family: "Faustina", // Ensure the font family matches exactly
            weight: "bolder",
          },
        }
      }
    }
  });

