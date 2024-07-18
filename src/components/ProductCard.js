// src/components/ProductCard.js
import React, { useContext } from 'react';
import Link from 'next/link';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price} USDT</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <Link href={`/products/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
