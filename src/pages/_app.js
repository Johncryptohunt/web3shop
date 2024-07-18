// src/pages/_app.js
import React from 'react';
import { CartProvider } from '../context/CartContext';
import { Web3Provider } from '../context/Web3Context';

function MyApp({ Component, pageProps }) {
  return (
    <Web3Provider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </Web3Provider>
  );
}

export default MyApp;
