// src/pages/products.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Products = () => {
  // Example product data with categories
  const initialProducts = [
    { id: 1, name: 'Product 1', price: '10 USDT', category: 'Electronics' },
    { id: 2, name: 'Product 2', price: '20 USDT', category: 'Clothing' },
    { id: 3, name: 'Product 3', price: '30 USDT', category: 'Electronics' },
    { id: 4, name: 'Product 4', price: '40 USDT', category: 'Clothing' },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredProducts = initialProducts.filter(product => {
    return (category === 'All' || product.category === category) && product.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <Navbar />
      <h1>Products</h1>
      <div>
        <input 
          type="text" 
          placeholder="Search products..." 
          value={search} 
          onChange={handleSearchChange} 
        />
        <select onChange={handleCategoryChange} value={category}>
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
        </select>
      </div>
      <div>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
