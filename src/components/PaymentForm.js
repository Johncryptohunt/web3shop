// src/components/PaymentForm.js
import React, { useState } from 'react';

const PaymentForm = ({ onSubmit }) => {
  const [walletAddress, setWalletAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(walletAddress);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="walletAddress">Wallet Address:</label>
        <input
          type="text"
          id="walletAddress"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          required
        />
      </div>
      <button type="submit">Pay</button>
    </form>
  );
};

export default PaymentForm;
