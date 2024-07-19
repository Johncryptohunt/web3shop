// src/pages/_app.js
import React from 'react';
import { CartProvider } from '../context/CartContext'; // Make sure this path is correct

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
