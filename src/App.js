// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage'; 
import Cart from './Cart'; 
import './App.css';

function App() {
  // State to track cart count for each product
  const [cartCounts, setCartCounts] = useState({
    lightStick: 0,
    merchandise: 0,
    albums: 0,
    posters: 0,
  });

  // Function to handle adding items to the cart
  const addToCart = (productName) => {
    setCartCounts((prevCartCounts) => ({
      ...prevCartCounts,
      [productName]: prevCartCounts[productName] + 1,
    }));
  };

  // Function to handle removing items from the cart
  const removeFromCart = (productName) => {
    setCartCounts((prevCartCounts) => ({
      ...prevCartCounts,
      [productName]: Math.max(prevCartCounts[productName] - 1, 0),
    }));
  };

  return (
    <Router>
      <div className="App">
        <header className="header">
          <nav className="navbar">
            <div className="logo">BTS Products</div>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/contact">Contact</Link></li>
             
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage addToCart={addToCart} cartCounts={cartCounts} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<Cart cartItems={cartCounts} onRemoveFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
