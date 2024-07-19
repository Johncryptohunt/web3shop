// src/pages/checkout.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Checkout = () => {
  const [paymentLink, setPaymentLink] = useState('');
  const [error, setError] = useState('');

  const handlePayment = async () => {
    try {
      const response = await fetch('/api/create-charge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: '10', // Replace with dynamic amount
          currency: 'USD',
          description: 'Your product description',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment');
      }

      const data = await response.json();
      setPaymentLink(data.paymentLink);
      console.log('Payment created, redirecting to:', data.paymentLink);
    } catch (error) {
      console.error('Error creating payment:', error);
      setError('An error occurred while creating the payment. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Checkout</h1>
      <p>Proceed with your crypto payment here.</p>
      <button onClick={handlePayment}>Pay Now</button>
      {paymentLink && (
        <div>
          <p>Complete your payment here:</p>
          <a href={paymentLink} target="_blank" rel="noopener noreferrer">Complete Payment</a>
        </div>
      )}
      {error && <p>{error}</p>}
      <Footer />
    </div>
  );
};

export default Checkout;
