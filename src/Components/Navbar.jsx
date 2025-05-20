// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">ResumePro</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/builder">Build Resume</Link></li>
        </ul>
        <div>
          <Link to="/builder" className="btn-secondary">Get Started</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
