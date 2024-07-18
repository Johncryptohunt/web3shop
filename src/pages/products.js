// src/pages/products.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const initialProducts = [
    { id: 1, name: 'Product 1', price: '10 USDT', category: 'Electronics' },
    { id: 2, name: 'Product 2', price: '20 USDT', category: 'Clothing' },
    { id: 3, name: 'Product 3', price: '30 USDT', category: 'Electronics' },
    { id: 4, name: 'Product 4', price: '40 USDT', category: 'Clothing' },
    { id: 5, name: 'Product 5', price: '50 USDT', category: 'Clothing' },
    { id: 6, name: 'Product 6', price: '60 USDT', category: 'Electronics' },
    { id: 7, name: 'Product 7', price: '70 USDT', category: 'Electronics' },
    { id: 8, name: 'Product 8', price: '80 USDT', category: 'Clothing' },
    { id: 9, name: 'Product 9', price: '90 USDT', category: 'Electronics' },
    { id: 10, name: 'Product 10', price: '100 USDT', category: 'Clothing' },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('none');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const sortedProducts = () => {
    let sorted = [...products];
    if (sort === 'price-asc') {
      sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sort === 'price-desc') {
      sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (sort === 'name-asc') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'name-desc') {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    }
    return sorted;
  };

  const filteredProducts = sortedProducts().filter(product => {
    return (category === 'All' || product.category === category) && product.name.toLowerCase().includes(search.toLowerCase());
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        <select onChange={handleSortChange} value={sort}>
          <option value="none">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A-Z</option>
          <option value="name-desc">Name: Z-A</option>
        </select>
      </div>
      <div>
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div>
        {[...Array(Math.ceil(filteredProducts.length / productsPerPage)).keys()].map(number => (
          <button key={number} onClick={() => paginate(number + 1)}>
            {number + 1}
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
