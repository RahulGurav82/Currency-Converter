import axios from 'axios'

const api =  axios.create({
    baseURL: "https://v6.exchangerate-api.com/v6/2c5c9e9685fd4575edfd2745"
    // https://v6.exchangerate-api.com/v6/2c5c9e9685fd4575edfd2745/pair/EUR/GBP/1
});

export const currencyConverter = (fromCurrency, toCurrency, amount) => {
    return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`)
}