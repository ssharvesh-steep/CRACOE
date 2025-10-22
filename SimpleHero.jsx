import React from 'react';
import './SimpleHero.css';

const SimpleHero = () => {
  return (
    <header className="hero-container">
      <div className="hero-content">
        <div className="text-section">
          <h1 className="main-title">
            AI-Powered<br />
            Robotics in<br />
            Field Service
          </h1>
          <p className="subtitle">
            HOW AUTOMATION IS<br />
            RESHAPING ON-SITE OPERATIONS?
          </p>
        </div>
        
        <div className="ai-section">
          <img src="ai.svg" alt="AI" className="ai-image" />
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span className="scroll-arrow">↓</span>
        <span className="scroll-text">SCROLL</span>
      </div>
    </header>
  );
};

export default SimpleHero;