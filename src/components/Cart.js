// src/components/Cart.js
import React from 'react';

const Cart = () => {
  // Example cart data
  const cartItems = [
    { id: 1, name: 'Product 1', quantity: 1, price: '10 USDT' },
    { id: 2, name: 'Product 2', quantity: 2, price: '20 USDT' },
  ];

  return (
    <div>
      {cartItems.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
