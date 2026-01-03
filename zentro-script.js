// Zentro-inspired Premium Script
document.addEventListener('DOMContentLoaded', function() {
    
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Time Display
    const updateTime = () => {
        const timeElement = document.getElementById('lux-time');
        if (!timeElement) return;
        
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            timeZone: 'Asia/Kolkata',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        timeElement.textContent = `INR ${timeString} GMT +5:30`;
    };
    
    updateTime();
    setInterval(updateTime, 1000);
    
    // Glass Card 3D Tilt Effects
    const initGlassCards = () => {
        const glassCards = document.querySelectorAll('.glass-card');
        
        glassCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                if (prefersReducedMotion) return;
                
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 15;
                const rotateY = (centerX - x) / 15;
                
                card.style.transform = `translateX(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateX(0px) rotateX(0deg) rotateY(0deg) scale(1)';
            });
        });
    };
    
    // Capability Cards Scroll Animation
    const initCapabilityCards = () => {
        const capabilityCards = document.querySelectorAll('.capability-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        capabilityCards.forEach(card => observer.observe(card));
    };
    
    // Button Interactions
    const initButtons = () => {
        const buttons = document.querySelectorAll('.btn-primary, .btn-ghost, .cta-button');
        
        buttons.forEach(button => {
            // Magnetic effect
            button.addEventListener('mousemove', (e) => {
                if (prefersReducedMotion) return;
                
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const deltaX = (x - centerX) / 8;
                const deltaY = (y - centerY) / 8;
                
                button.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0px, 0px)';
            });
            
            // Press effect
            button.addEventListener('mousedown', () => {
                button.style.transform = 'translate(0px, 2px) scale(0.98)';
            });
            
            button.addEventListener('mouseup', () => {
                button.style.transform = 'translate(0px, 0px) scale(1)';
            });
        });
    };
    
    // Micro Features Hover Effects
    const initMicroFeatures = () => {
        const microFeatures = document.querySelectorAll('.micro-feature');
        
        microFeatures.forEach(feature => {
            feature.addEventListener('mouseenter', () => {
                if (prefersReducedMotion) return;
                
                const icon = feature.querySelector('.micro-icon');
                const label = feature.querySelector('.micro-label');
                
                if (icon) icon.style.transform = 'scale(1.1)';
                if (label) label.style.transform = 'translateX(4px)';
            });
            
            feature.addEventListener('mouseleave', () => {
                const icon = feature.querySelector('.micro-icon');
                const label = feature.querySelector('.micro-label');
                
                if (icon) icon.style.transform = 'scale(1)';
                if (label) label.style.transform = 'translateX(0px)';
            });
        });
    };
    
    // Showcase Frame Parallax
    const initShowcase = () => {
        const showcaseFrame = document.querySelector('.showcase-frame');
        if (!showcaseFrame || prefersReducedMotion) return;
        
        showcaseFrame.addEventListener('mousemove', (e) => {
            const rect = showcaseFrame.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;
            
            showcaseFrame.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        showcaseFrame.addEventListener('mouseleave', () => {
            showcaseFrame.style.transform = 'translateY(0px) rotateX(0deg) rotateY(0deg)';
        });
    };
    
    // Smooth Scroll for Internal Links
    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };
    
    // Menu Toggle
    const initMenu = () => {
        const menuToggle = document.getElementById('menu-toggle');
        const menuOverlay = document.getElementById('menuOverlay');
        const menuClose = document.getElementById('menuClose');
        
        if (menuToggle && menuOverlay) {
            menuToggle.addEventListener('click', () => {
                menuOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Focus management
                const firstFocusable = menuOverlay.querySelector('a, button');
                if (firstFocusable) firstFocusable.focus();
            });
        }
        
        if (menuClose && menuOverlay) {
            const closeMenu = () => {
                menuOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
                menuToggle.focus();
            };
            
            menuClose.addEventListener('click', closeMenu);
            
            // ESC key to close
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
                    closeMenu();
                }
            });
            
            // Click outside to close
            menuOverlay.addEventListener('click', (e) => {
                if (e.target === menuOverlay) {
                    closeMenu();
                }
            });
        }
    };
    
    // Initialize all components
    const init = () => {
        initGlassCards();
        initCapabilityCards();
        initButtons();
        initMicroFeatures();
        initShowcase();
        initSmoothScroll();
        initMenu();
        
        // Performance monitoring
        if ('performance' in window) {
            window.addEventListener('load', () => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page loaded in', Math.round(perfData.loadEventEnd - perfData.loadEventStart), 'ms');
            });
        }
    };
    
    // Initialize after DOM is ready
    init();
    
    // Add focus management for accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
});