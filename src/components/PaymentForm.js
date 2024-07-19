// components/PaymentForm.js
import React from 'react';
import axios from 'axios';

const PaymentForm = ({ amount, currency, productName }) => {

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        'https://api.commerce.coinbase.com/checkouts',
        {
          name: productName,
          description: `Payment for ${productName}`,
          local_price: {
            amount: amount,
            currency: currency
          },
          pricing_type: 'fixed_price'
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-CC-Api-Key': 'organizations/7c85859b-4568-4b8c-af93-7bb7bbce94d1/apiKeys/4df74552-3f4d-4a1f-a75c-247fcf390eab', // Replace with your actual API key
            'X-CC-Version': '2018-03-22'
          }
        }
      );
      
      // Redirect to payment page
      window.location.href = response.data.data.hosted_url;

    } catch (error) {
      console.error('Error creating Coinbase Commerce checkout:', error);
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay with Crypto</button>
    </div>
  );
};

export default PaymentForm;
