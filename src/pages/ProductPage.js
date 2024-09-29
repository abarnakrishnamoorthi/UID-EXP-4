// src/pages/ProductPage.js
import React, { useState } from 'react';
import './ProductPage.css';

const ProductPage = ({ addToCart, cartCounts }) => {
  // State for selected shirt size
  const [shirtSize, setShirtSize] = useState('M'); // Default size is Medium

  return (
    <div className="container">
      <div className="card">
        <h1>BTS Product Collection</h1>
        <p>Explore our range of BTS-themed products in a stunning purple ocean theme:</p>
        <ul>
          <li>

            <i className="fas fa-gem" aria-hidden="true"></i> BTS Light Stick - $35.00
            <button onClick={() => addToCart('lightStick')} className="add-to-cart-btn">Add to Cart</button>
            <p>Items in Cart: {cartCounts.lightStick}</p>
          </li>
          <li>
           
            <i className="fas fa-tshirt" aria-hidden="true"></i> BTS Merchandise - $25.00
            <select value={shirtSize} onChange={(e) => setShirtSize(e.target.value)} className="size-select">
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
            </select>
            <button onClick={() => addToCart(`merchandise-${shirtSize}`)} className="add-to-cart-btn">Add to Cart</button>
            <p>Items in Cart: {cartCounts[`merchandise-${shirtSize}`]}</p>
          </li>
          <li>
            
            <i className="fas fa-music" aria-hidden="true"></i> BTS Albums - $20.00
            <button onClick={() => addToCart('albums')} className="add-to-cart-btn">Add to Cart</button>
            <p>Items in Cart: {cartCounts.albums}</p>
          </li>
          <li>
           
            <i className="fas fa-poster" aria-hidden="true"></i> BTS Posters - $15.00
            <button onClick={() => addToCart('posters')} className="add-to-cart-btn">Add to Cart</button>
            <p>Items in Cart: {cartCounts.posters}</p>
          </li>
        </ul>
        <p>Shop now and show your ARMY spirit!</p>
      </div>
    </div>
  );
};

export default ProductPage;
