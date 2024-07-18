// src/pages/products/[id].js
import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Payment from '../../components/Payment';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Example product detail
  const product = { id, name: `Product ${id}`, price: `${id * 10}`, category: 'Electronics' };

  return (
    <div>
      <Navbar />
      <h1>{product.name}</h1>
      <p>Price: {product.price} USDT</p>
      <p>Category: {product.category}</p>
      <Payment amount={product.price} />
      <Footer />
    </div>
  );
};

export default ProductDetail;
