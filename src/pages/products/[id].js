// src/pages/products/[id].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      // Simulate fetching product data from an API
      const fetchedProduct = { id, name: `Product ${id}`, price: `${id * 10} USDT`, category: 'Electronics' };
      setProduct(fetchedProduct);
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

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
