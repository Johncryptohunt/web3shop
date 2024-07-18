// src/components/ProductCard.js
import React from 'react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <Link href={`/products/${product.id}`} legacyBehavior>
        <a>View Details</a>
      </Link>
    </div>
  );
};

export default ProductCard;
