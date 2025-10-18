import React from 'react';
import AnimatedMenuItem from './AnimatedMenuItem';

const MenuOverlay = ({ isOpen, onClose }) => {
  const menuItems = [
    { text: 'HOME', href: 'index.html' },
    { text: 'SERVICES', href: 'services.html' },
    { text: 'TEAM', href: 'our-team.html' },
    { text: 'WORK', href: 'work.html' },
    { text: 'CONTACT', href: 'contact.html' }
  ];

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#000000',
      zIndex: 1000,
      fontFamily: 'Roboto Flex, sans-serif'
    }}>
      {/* Close Button */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 32px',
        justifyContent: 'flex-end'
      }}>
        <span
          onClick={onClose}
          style={{
            textTransform: 'uppercase',
            color: 'white',
            fontSize: '14px',
            letterSpacing: '0.1em',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          CLOSE
        </span>
      </div>

      {/* Menu Items */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '100vh',
        padding: '0 80px'
      }}>
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'right'
        }}>
          {menuItems.map((item, index) => (
            <AnimatedMenuItem
              key={item.text}
              text={item.text}
              href={item.href}
              delay={index * 0.1}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MenuOverlay;