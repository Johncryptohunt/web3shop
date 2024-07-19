// src/utils/coinbase.js
const axios = require('axios');

const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual API key

const createCharge = async (chargeData) => {
  try {
    const response = await axios.post('https://api.commerce.coinbase.com/charges', chargeData, {
      headers: {
        'Content-Type': 'application/json',
        'X-CC-Api-Key': API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating charge:', error);
    throw error;
  }
};

module.exports = { createCharge };
