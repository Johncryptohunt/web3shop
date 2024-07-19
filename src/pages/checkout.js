// src/pages/checkout.js
import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PaymentForm from '../components/PaymentForm';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { handlePayment } = useContext(CartContext);

  return (
    <div>
      <Navbar />
      <h1>Checkout</h1>
      <p>Proceed with your crypto payment here.</p>
      <PaymentForm onSubmit={handlePayment} />
      <Footer />
    </div>
  );
};

export default Checkout;
