// src/Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {Object.entries(cartItems).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {Object.entries(cartItems).map(([productName, count]) => (
            <li key={productName}>
              <span>{productName}</span> - Quantity: {count}
              <button onClick={() => onRemoveFromCart(productName)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
