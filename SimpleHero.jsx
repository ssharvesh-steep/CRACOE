import React from 'react';
import './SimpleHero.css';

const SimpleHero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-headline">
          <span className="line">CRACOE</span>
          <span className="line">Elite IT Solutions</span>
          <span className="line">& AI Development</span>
        </h1>
        <p className="hero-subheadline">
          We build cutting-edge, reliable, and scalable software solutions.
        </p>
        <div className="hero-buttons">
          <a href="#services" className="cta-button primary">Our Services</a>
          <a href="/contact" className="cta-button secondary">Contact Us</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="cube-container">
          <div className="cube">
            <div className="face front">AI Solutions</div>
            <div className="face back">Data Analytics</div>
            <div className="face right">Web Development</div>
            <div className="face left">Cloud Services</div>
            <div className="face top">DevOps</div>
            <div className="face bottom">UI/UX Design</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleHero;