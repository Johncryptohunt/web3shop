// src/pages/checkout.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Checkout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment successful!');
  };

  return (
    <div>
      <Navbar />
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div>
          <label htmlFor="crypto">Payment (USDT):</label>
          <input type="text" id="crypto" name="crypto" required />
        </div>
        <button type="submit">Pay with USDT</button>
      </form>
      <Footer />
    </div>
  );
};

export default Checkout;
