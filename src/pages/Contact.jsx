// src/pages/Contact.jsx
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! If you have any questions, suggestions, or feedback, feel free to reach out.</p>

        <div className="contact-details">
          <p>📧 Email: <a href="mailto:ishitanath2001@gmail.com">ishitanath2001@gmail.com</a></p>
          <p>📍 Address: North 24 Pargana, West Bengal , India </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
