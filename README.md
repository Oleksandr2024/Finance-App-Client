# Finance-App-Client

The original Finance-App was divided into client and server part for convenience of deployment process. This is just a server part of the entire App. To visit the entire App live example please visit [Finance-App](https://finance-app-client-4d0z.onrender.com/)

During the development of the Client part of the App:
Introduced visual effects to highlight positive or negative changes in prices. When the current price differs from the previous one, positive changes are highlighted in green, while negative changes are highlighted in red. The same color visualization is applied to the price chart.

Implemented the option for users to switch on/off tickers. Initially, the app doesn't track ticker prices. However, users can enable ticker tracking by clicking the visually noticeable button labeled "Show tickers". Under the hood, each switch operation establishes or disconnects a new socket connection accordingly.

Provided the ability for users to add or remove tickers from their watching group. The app includes a simple "watching group" interface, allowing users to easily add preferred tickers or remove them. By default, all tickers are added to the watching group upon the initial app render. During interaction with the app, user's preferences are saved to the Local Storage, ensuring that the watchlist remains accessible even after socket connection is disconnected.

Added support for a light or dark mode UI interface, enabling users to switch between different visual themes based on their preferences and lighting conditions. Users can toggle between the two modes to customize their viewing experience and enhance usability.

Integrated multi-currency support, including the national currency of Ukraine "UAH" and the United States dollar "USD". Users can switch between these currencies to view stock prices, changes, and other financial data in their preferred currency. The app uses a specific API for up-to-date currency rates.

Implemented an app-specific historical price state to visualize a certain amount of price data in the chart.
