// src/pages/products.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Products = () => {
  // Example product data
  const products = [
    { id: 1, name: 'Product 1', price: '10 USDT' },
    { id: 2, name: 'Product 2', price: '20 USDT' },
  ];

  return (
    <div>
      <Navbar />
      <h1>Products</h1>
      <div>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
