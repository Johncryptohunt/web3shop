// src/context/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState(null);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const handlePayment = (walletAddress) => {
    setPaymentInfo({ walletAddress });
    console.log('Payment received from wallet:', walletAddress);
    // Here you would handle the payment processing logic
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, paymentInfo, handlePayment }}>
      {children}
    </CartContext.Provider>
  );
};
