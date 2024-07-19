// pages/checkout.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PaymentForm from '../components/PaymentForm';

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <h1>Checkout</h1>
      <PaymentForm 
        amount={50.00} // Example amount in USD or equivalent
        currency="USD" // Currency (can be changed based on your setup)
        productName="Example Product" // Replace with your product name
      />
      <Footer />
    </div>
  );
};

export default Checkout;
