// src/pages/products/[id].js
import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Example product detail
  const product = { id, name: `Product ${id}`, price: `${id * 10} USDT` };

  return (
    <div>
      <Navbar />
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <Footer />
    </div>
  );
};

export default ProductDetail;
