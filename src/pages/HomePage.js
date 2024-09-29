// src/pages/HomePage.js
import React from 'react';
import './HomePage.css'; // Import the CSS for styling

const HomePage = () => {
  return (
    <div className="container"> {/* Apply container class */}
      <header className="hero">
        <h1>Welcome to Our E-Commerce Site</h1>
        <p>Your one-stop shop for the best BTS products!</p>
      </header>
      <section className="intro">
        <h2>Why Choose Us?</h2>
        <p>
          We are dedicated to providing the highest quality BTS merchandise at competitive prices. 
          Our products include exclusive items that every ARMY fan will love. From stylish apparel 
          to unique collectibles, we have something for everyone!
        </p>
      </section>
      {/* Add cards for product categories or special offers */}
      <div className="card-container">
        <div className="card">
          <h2>Exclusive BTS Merchandise</h2>
          <p>Explore our latest collection of BTS-inspired merchandise. Show your love for the band!</p>
        </div>
        <div className="card">
          <h2>Special Discounts</h2>
          <p>Don’t miss out on our limited-time offers! Shop now and enjoy exclusive discounts.</p>
        </div>
        <div className="card">
          <h2>Join the ARMY Community</h2>
          <p>Become a part of the global ARMY fanbase. Share your passion and connect with other fans!</p>
        </div>
      </div>
      <footer className="footer">
        <p>© 2024 Our E-Commerce Site. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
