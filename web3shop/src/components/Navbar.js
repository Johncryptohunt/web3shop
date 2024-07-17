// src/components/Navbar.js
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/products"><a>Products</a></Link></li>
        <li><Link href="/cart"><a>Cart</a></Link></li>
        <li><Link href="/checkout"><a>Checkout</a></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
