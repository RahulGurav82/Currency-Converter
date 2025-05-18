# Currency Converter

A simple and elegant React application that allows users to convert between different currencies using real-time exchange rates.

![Currency Converter Screenshot](https://github.com/user-attachments/assets/ff63f259-19ee-418b-81f3-a2f124f43813)

## Live Demo

[Currency Converter App](https://currency-converter-indol-iota.vercel.app/)

## Features

- Convert between 6 major currencies (USD, EUR, INR, GBP, JPY, CAD)
- Real-time conversion rates from Exchange Rate API
- Responsive design that works on desktop and mobile devices
- Clean and intuitive user interface

## Technologies Used

- React.js
- Axios for API requests
- Tailwind CSS for styling
- Exchange Rate API for currency conversion data

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/currency-converter.git
   cd currency-converter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Exchange Rate API key:
   ```
   VITE_APP_EXCHANGE_RATE_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## API Configuration

This project uses the [Exchange Rate API](https://www.exchangerate-api.com/) to fetch real-time currency conversion rates. 

To use your own API key:
1. Register for a free account at [exchangerate-api.com](https://www.exchangerate-api.com/)
2. Replace the API key in the `api/postApi.js` file or use the environment variable as shown in the installation instructions

## Project Structure

```
currency-converter/
├── public/
├── src/
│   ├── api/
│   │   └── postApi.js       # API configuration and request functions
│   ├── App.js               # Main application component
│   ├── index.js
│   └── ...
├── .env                     # Environment variables (git-ignored)
├── package.json
└── README.md
```

## Usage

1. Enter the amount you want to convert in the "Amount" field
2. Select the currency you want to convert from in the "From" dropdown
3. Select the currency you want to convert to in the "To" dropdown
4. The conversion result will be displayed automatically

## Available Currency Options

- USD (United States Dollar)
- EUR (Euro)
- INR (Indian Rupee)
- GBP (British Pound)
- JPY (Japanese Yen)
- CAD (Canadian Dollar)

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [Exchange Rate API](https://www.exchangerate-api.com/)
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
