// src/pages/api/create-payment-session.js
import { createCharge } from '../../utils/coinbase';

export default async function handler(req, res) {
  const { name, price, currency } = req.body; // Extract product details from request body

  const chargeData = {
    name,
    description: 'Payment for product',
    local_price: {
      amount: price,
      currency,
    },
    pricing_type: 'fixed_price',
  };

  try {
    const charge = await createCharge(chargeData);
    res.status(200).json({ charge });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create charge' });
  }
}
