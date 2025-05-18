import axios from 'axios'

const api =  axios.create({
    baseURL: `https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_APP_EXCHANGE_RATE_API_KEY}`
});

export const currencyConverter = (fromCurrency, toCurrency, amount) => {
    return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`)
}