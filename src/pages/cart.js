// src/pages/cart.js
import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <Navbar />
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Cart />
      )}
      <Footer />
    </div>
  );
};

export default CartPage;
