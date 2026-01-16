import React, { useEffect, useRef } from 'react';
import './AnimatedAI.css';

const AnimatedAI = () => {
  const aiRef = useRef(null);

  useEffect(() => {
    const ai = aiRef.current;
    if (ai) {
      const handleMouseMove = (e) => {
        const rect = ai.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        
        ai.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 5}deg) scale(1.05)`;
      };

      const handleMouseLeave = () => {
        ai.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
      };

      ai.addEventListener('mousemove', handleMouseMove);
      ai.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        ai.removeEventListener('mousemove', handleMouseMove);
        ai.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

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
          <img 
            ref={aiRef}
            src="ai.png" 
            alt="AI" 
            className="ai-image animated" 
          />
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span className="scroll-arrow">↓</span>
        <span className="scroll-text">SCROLL</span>
      </div>
    </header>
  );
};

export default AnimatedAI;