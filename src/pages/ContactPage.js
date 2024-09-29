// src/pages/ContactPage.js
import React from 'react';
import './ContactPage.css'; // Optional: Create a CSS file for styling

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us!</p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" required />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea id="address" required></textarea>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
