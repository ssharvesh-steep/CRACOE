import React, { useState } from 'react';

const AnimatedMenuItem = ({ text, href, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const letters = text.split('');

  return (
    <a
      href={href}
      className="menu-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        color: 'white',
        textDecoration: 'none',
        fontSize: '72px',
        fontWeight: 300,
        textTransform: 'uppercase',
        padding: '20px 0',
        borderBottom: '1px solid #333',
        display: 'block',
        overflow: 'hidden'
      }}
    >
      {letters.map((letter, index) => (
        <span
          key={index}
          style={{
            display: 'inline-block',
            transform: isHovered ? `translateY(-10px) rotate(${Math.sin(index * 0.5) * 5}deg)` : 'translateY(0) rotate(0deg)',
            transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1 + delay}s`,
            opacity: isHovered ? 1 : 0.8,
            textShadow: isHovered ? '0 0 10px rgba(255, 255, 255, 0.5)' : 'none'
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </a>
  );
};

export default AnimatedMenuItem;