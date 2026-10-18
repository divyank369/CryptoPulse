# CryptoPulse

CryptoPulse is a static, multi-page cryptocurrency dashboard concept. It combines a market overview, coin details, educational pages, and account-themed screens with a dark interface.

**Live demo:** [crptopulse348.netlify.app](https://crptopulse348.netlify.app/)

## Features

- Cryptocurrency market cards populated from the CoinGecko API
- Search the loaded market list by coin name
- Bitcoin seven-day price chart using Chart.js
- Separate market, portfolio, learning, sign-in, and account creation pages
- Theme toggle and browser-local UI state

## Built With

- HTML, CSS, and vanilla JavaScript
- [CoinGecko API](https://www.coingecko.com/en/api)
- [Chart.js](https://www.chartjs.org/)
- Font Awesome and Google Fonts

## Run Locally

No package installation or build step is required. Clone the repository and open `index.html` in a browser, or serve the folder with a local static web server.

## Project Files

The page layouts are in the root HTML files. Shared styling and behavior live in `style.css`, `portfolio.css`, `auth.css`, `script.js`, `auth.js`, and `themeToggle.js`.

## Data and Scope

Market information comes from CoinGecko at runtime, so network access and the provider's availability or rate limits affect the dashboard. This repository is a frontend demo; its account-style screens do not represent a production authentication or investment service.
