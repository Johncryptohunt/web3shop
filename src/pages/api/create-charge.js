// src/pages/api/create-charge.js
import axios from 'axios';

const API_KEY = '94810add-9874-4f70-8ddb-02f6f3374ea4'; // Replace with your Coinbase Commerce API key

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount, currency, description } = req.body;

    try {
      const response = await axios.post(
        'https://api.commerce.coinbase.com/charges',
        {
          name: description,
          description: description,
          local_price: {
            amount: amount,
            currency: currency,
          },
          pricing_type: 'fixed_price',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-CC-Api-Key': API_KEY,
            'X-CC-Version': '2018-03-22',
          },
        }
      );

      res.status(200).json({
        chargeId: response.data.data.id,
        paymentLink: response.data.data.hosted_url,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
