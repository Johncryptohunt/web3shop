// src/components/ProductCard.js
import React from 'react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <Link href={`/products/${product.id}`}><a>View Details</a></Link>
    </div>
  );
};

export default ProductCard;
