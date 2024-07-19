// src/pages/products/[id].js
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { CartContext } from '../../context/CartContext'; // Make sure this path is correct

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const { cart } = useContext(CartContext); // Example usage, adjust according to your context
  const product = { id, name: `Product ${id}`, price: `${id * 10} USDT`, category: 'Electronics' };

  return (
    <div>
      <Navbar />
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
      <Footer />
    </div>
  );
};

export default ProductDetail;
