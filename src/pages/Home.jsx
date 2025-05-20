// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './Home.css'; 

function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          {/* Left: Text Content */}
          <div className="hero-text">
            <h1>Create Your Resume Effortlessly</h1>
            <p>Professional templates, easy customization, and instant download.</p>
            <Link to="/builder"><button className="btn-primary">Get Started</button></Link>
          </div>

          {/* Right: Image */}
          <div className="hero-image">
            <img src="/Hero.jpg" alt="Resume Builder" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🎯 Easy to Use</h3>
            <p>Simple steps to create your professional resume quickly.</p>
          </div>
          <div className="feature-card">
            <h3>🖌️ Multiple Templates</h3>
            <p>Choose from a variety of modern and clean templates.</p>
          </div>
          <div className="feature-card">
            <h3>📄 Download as PDF</h3>
            <p>Instantly download your resume in PDF format for free.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
