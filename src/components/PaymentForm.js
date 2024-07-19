import React, { useState } from 'react';

const PaymentForm = ({ onSubmit }) => {
  const [amount, setAmount] = useState('');
  const [paymentLink, setPaymentLink] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Replace with your actual API endpoint
    const response = await fetch('/api/create-charge', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount, currency: 'USD' }),
    });

    const data = await response.json();

    if (response.ok) {
      setPaymentLink(data.paymentLink);
    } else {
      console.error('Payment creation failed:', data.error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Amount (USD):</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Pay with Coinbase Commerce</button>
      </form>

      {paymentLink && (
        <div>
          <p>Complete your payment here:</p>
          <a href={paymentLink} target="_blank" rel="noopener noreferrer">Complete Payment</a>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
