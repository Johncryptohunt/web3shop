// src/pages/cart.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

const CartPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Shopping Cart</h1>
      <Cart />
      <Footer />
    </div>
  );
};

export default CartPage;
