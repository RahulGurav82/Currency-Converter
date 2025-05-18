import { useEffect, useState } from 'react';
import { currencyConverter } from './api/postApi';


const currencies = ['USD', 'EUR', 'INR', 'GBP', 'JPY', 'CAD'];

export default function App() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const convert = async () => {
    setLoading(true);
    try {
      const { data } = await currencyConverter(fromCurrency, toCurrency, amount);
      setResult(data.conversion_result);
    } catch (error) {
      setResult(null);
      console.error('Conversion failed:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    convert();
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Currency Converter</h1>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block mb-1 font-medium">From</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl"
            >
              {currencies.map((cur) => (
                <option key={cur} value={cur}>{cur}</option>
              ))}
            </select>
          </div>

          <div className="w-1/2">
            <label className="block mb-1 font-medium">To</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl"
            >
              {currencies.map((cur) => (
                <option key={cur} value={cur}>{cur}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={convert}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
        >
          {loading ? 'Converting...' : 'Convert'}
        </button>

        {result !== null && (
          <div className="mt-4 text-center text-lg font-semibold">
            {amount} {fromCurrency} = {result} {toCurrency}
          </div>
        )}
      </div>
    </div>
  );
}
