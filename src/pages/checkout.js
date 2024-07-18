// src/pages/checkout.js
import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const handleCheckout = () => {
    // Implement your checkout logic here (e.g., payment processing)
    alert('Checkout successful!');
  };

  return (
    <div>
      <Navbar />
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add items to the cart before checking out.</p>
      ) : (
        <>
          <h2>Your Cart</h2>
          <ul>
            {cart.map(item => (
              <li key={item.id}>{item.name} - {item.price}</li>
            ))}
          </ul>
          <button onClick={handleCheckout}>Proceed to Payment</button>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Checkout;
