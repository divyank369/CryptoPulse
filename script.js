const searchInput = document.getElementById("searchInput");

async function fetchCoinData() {
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1";
  const container = document.getElementById('coinList');
  container.innerHTML = '';

  try {
    const res = await fetch(url);
    const data = await res.json();

    function renderCoins(filter = "") {
      container.innerHTML = '';
      data
        .filter(coin => coin.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(coin => {
          const card = document.createElement('div');
          card.className = 'coin-card';
          card.innerHTML = `
            <p class="coin-name">${coin.name} (${coin.symbol.toUpperCase()})</p>
            <p class="coin-price">$${coin.current_price.toLocaleString()}</p>
            <p class="coin-change ${coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}">
              ${coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          `;
          container.appendChild(card);
        });
    }

    renderCoins(); // Initial render

    searchInput.addEventListener("input", (e) => {
      renderCoins(e.target.value);
    });

  } catch (err) {
    console.error("API Error:", err);
    container.innerHTML = `<p>⚠ Failed to load data.</p>`;
  }
}

fetchCoinData();

// Load Chart for Bitcoin
async function loadBitcoinChart() {
  const chartRes = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7`);
  const chartData = await chartRes.json();
  const labels = chartData.prices.map(p => new Date(p[0]).toLocaleDateString());
  const prices = chartData.prices.map(p => p[1]);

  const ctx = document.getElementById('coinChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'BTC Price (USD)',
        data: prices,
        borderColor: '#00f0ff',
        tension: 0.3,
        fill: true,
        backgroundColor: 'rgba(0,240,255,0.1)'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: document.body.classList.contains("light") ? "#000" : "#fff"
          }
        }
      },
      scales: {
        x: { ticks: { color: document.body.classList.contains("light") ? "#000" : "#fff" } },
        y: { ticks: { color: document.body.classList.contains("light") ? "#000" : "#fff" } }
      }
    }
  });
}

loadBitcoinChart();