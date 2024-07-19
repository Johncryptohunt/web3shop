// src/pages/checkout.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Checkout = () => {
  const [paymentLink, setPaymentLink] = useState('');

  const handlePayment = async () => {
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

    const data = await response.json();
    if (response.ok) {
      setPaymentLink(data.paymentLink);
      console.log('Payment created, redirecting to:', data.paymentLink);
      // Optionally, handle the payment redirection
    } else {
      console.error('Error creating payment:', data.error);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Checkout</h1>
      <p>Proceed with your crypto payment here.</p>
      <button onClick={handlePayment}>Pay Now</button>
      {paymentLink && <a href={paymentLink} target="_blank" rel="noopener noreferrer">Complete Payment</a>}
      <Footer />
    </div>
  );
};

export default Checkout;
