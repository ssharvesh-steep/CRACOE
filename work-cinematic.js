// ===================================
// CRACOE WORK PAGE - ADVANCED INTERACTIONS
// ===================================

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ===================================
// CUSTOM CURSOR
// ===================================
class CustomCursor {
    constructor() {
        this.cursor = {
            dot: document.querySelector('.cursor-dot'),
            outline: document.querySelector('.cursor-outline')
        };

        this.position = { x: 0, y: 0 };
        this.mouse = { x: 0, y: 0 };

        this.init();
    }

    init() {
        // Track mouse position
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        // Animate cursor
        this.animate();

        // Add hover effects
        this.addHoverEffects();
    }

    animate() {
        // Smooth follow
        this.position.x += (this.mouse.x - this.position.x) * 0.15;
        this.position.y += (this.mouse.y - this.position.y) * 0.15;

        if (this.cursor.dot && this.cursor.outline) {
            this.cursor.dot.style.left = `${this.position.x}px`;
            this.cursor.dot.style.top = `${this.position.y}px`;

            // Outline follows slower
            const outlineX = this.position.x + (this.mouse.x - this.position.x) * 0.1;
            const outlineY = this.position.y + (this.mouse.y - this.position.y) * 0.1;

            this.cursor.outline.style.left = `${outlineX}px`;
            this.cursor.outline.style.top = `${outlineY}px`;
        }

        requestAnimationFrame(() => this.animate());
    }

    addHoverEffects() {
        const hoverElements = document.querySelectorAll('a, button, .project-card');

        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to([this.cursor.dot, this.cursor.outline], {
                    scale: 1.5,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            el.addEventListener('mouseleave', () => {
                gsap.to([this.cursor.dot, this.cursor.outline], {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }
}

// ===================================
// PARTICLE SYSTEM
// ===================================
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particle-canvas');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 50;
        this.mouse = { x: null, y: null, radius: 150 };

        this.init();
    }

    init() {
        this.resize();
        this.createParticles();
        this.animate();

        window.addEventListener('resize', () => this.resize());

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach((particle, i) => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

            // Mouse interaction
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = this.mouse.x - particle.x;
                const dy = this.mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.mouse.radius) {
                    const force = (this.mouse.radius - distance) / this.mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    particle.vx -= Math.cos(angle) * force * 0.2;
                    particle.vy -= Math.sin(angle) * force * 0.2;
                }
            }

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`;
            this.ctx.fill();

            // Draw connections
            this.particles.slice(i + 1).forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(otherParticle.x, otherParticle.y);
                    this.ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - distance / 100)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            });
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ===================================
// SCROLL PROGRESS
// ===================================
class ScrollProgress {
    constructor() {
        this.progressBar = document.querySelector('.scroll-progress');
        if (!this.progressBar) return;

        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrollTop / scrollHeight) * 100;

            this.progressBar.style.width = `${progress}%`;
        });
    }
}

// ===================================
// FILTER SYSTEM
// ===================================
class FilterSystem {
    constructor() {
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.projectCards = document.querySelectorAll('.project-card');

        this.init();
    }

    init() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => this.filter(btn));
        });
    }

    filter(activeBtn) {
        const filterValue = activeBtn.getAttribute('data-filter');

        // Update active state
        this.filterBtns.forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');

        // Filter cards
        this.projectCards.forEach((card, index) => {
            const category = card.getAttribute('data-category');

            if (filterValue === 'all' || category === filterValue) {
                gsap.to(card, {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: 'power3.out',
                    onStart: () => {
                        card.style.display = 'flex';
                    }
                });
            } else {
                gsap.to(card, {
                    opacity: 0,
                    scale: 0.8,
                    y: 20,
                    duration: 0.3,
                    ease: 'power2.in',
                    onComplete: () => {
                        card.style.display = 'none';
                    }
                });
            }
        });
    }
}

// ===================================
// MAGNETIC CARDS
// ===================================
class MagneticCards {
    constructor() {
        this.cards = document.querySelectorAll('.project-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => this.handleMouseMove(e, card));
            card.addEventListener('mouseleave', () => this.handleMouseLeave(card));
        });
    }

    handleMouseMove(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            duration: 0.5,
            ease: 'power2.out'
        });

        // Move glow to mouse position
        const glow = card.querySelector('.card-glow');
        if (glow) {
            gsap.to(glow, {
                x: x - rect.width,
                y: y - rect.height,
                duration: 0.3
            });
        }
    }

    handleMouseLeave(card) {
        gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
    }
}

// ===================================
// SCROLL ANIMATIONS
// ===================================
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Animate cards on scroll
        const cards = document.querySelectorAll('.project-card');

        cards.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 100,
                scale: 0.9,
                duration: 0.8,
                delay: index * 0.1,
                ease: 'power3.out'
            });
        });

        // Parallax hero background
        gsap.to('.hero-bg-gradient', {
            scrollTrigger: {
                trigger: '.hero-work',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            },
            y: 200,
            opacity: 0
        });

        // Hide nav on scroll down, show on scroll up
        let lastScroll = 0;
        const nav = document.querySelector('.top-nav');

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > lastScroll && currentScroll > 100) {
                gsap.to(nav, { y: -100, duration: 0.3 });
            } else {
                gsap.to(nav, { y: 0, duration: 0.3 });
            }

            lastScroll = currentScroll;
        });
    }
}

// ===================================
// INITIALIZE
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Check if on mobile
    const isMobile = window.innerWidth <= 768;

    // Custom cursor disabled for all devices
    // if (!isMobile) {
    //   new CustomCursor();
    // }

    // Initialize particle system
    new ParticleSystem();

    // Initialize scroll progress
    new ScrollProgress();

    // Initialize filter system
    new FilterSystem();

    // Magnetic cards disabled (requires custom cursor)
    // if (!isMobile) {
    //   new MagneticCards();
    // }

    // Initialize scroll animations
    new ScrollAnimations();
});

export { };
