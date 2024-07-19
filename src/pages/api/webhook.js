// src/pages/api/webhook.js
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle the webhook event
    // You can verify the event and process the payment confirmation

    res.status(200).end('Webhook received');
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
