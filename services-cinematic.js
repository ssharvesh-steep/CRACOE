document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Time Update Logic
    function updateTime() {
        const timeElement = document.getElementById('lux-time');
        if (timeElement) {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            timeElement.textContent = `INR ${hours}:${minutes}:${seconds} GMT +5:30`;
        }
    }
    setInterval(updateTime, 1000);
    updateTime();

    // 2. Menu Logic
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menuClose');
    const menuCloseMobile = document.querySelector('.menu-close-mobile');
    const menuOverlay = document.getElementById('menu-overlay');
    const desktopMenu = document.querySelector('.desktop-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    function showMenu() {
        menuOverlay.style.display = 'block';
        menuOverlay.classList.add('entering');
        menuOverlay.classList.remove('exiting');

        if (window.innerWidth > 768) {
            desktopMenu.style.display = 'block';
            mobileMenu.style.display = 'none';
        } else {
            desktopMenu.style.display = 'none';
            mobileMenu.style.display = 'block';
        }
        document.body.style.overflow = 'hidden';
    }

    function hideMenu() {
        menuOverlay.classList.add('exiting');
        menuOverlay.classList.remove('entering');
        setTimeout(() => {
            menuOverlay.style.display = 'none';
            document.body.style.overflow = '';
        }, 600);
    }

    if (menuToggle) menuToggle.addEventListener('click', showMenu);
    if (menuClose) menuClose.addEventListener('click', hideMenu);
    if (menuCloseMobile) menuCloseMobile.addEventListener('click', hideMenu);


    // 3. Text Decode Animation
    const decodeText = (element) => {
        const text = element.innerText;
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let iteration = 0;
        const originalText = text; // Store original

        let interval = setInterval(() => {
            element.innerText = originalText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) return originalText[index];
                    return chars[Math.floor(Math.random() * 36)];
                })
                .join("");

            if (iteration >= originalText.length) {
                clearInterval(interval);
                element.innerText = originalText; // Ensure clean finish
            }

            iteration += 2; // Increased Speed as requested
        }, 30);
    };

    // Apply decode to specific elements on load
    document.querySelectorAll('.decode-text').forEach(el => decodeText(el));

    // Apply decode to titles on Scroll
    document.querySelectorAll('.decode-title').forEach(title => {
        ScrollTrigger.create({
            trigger: title,
            start: "top 80%",
            onEnter: () => decodeText(title)
        });
    });


    // 4. Hero Animations
    const heroTl = gsap.timeline();
    heroTl.from('.reveal-text', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out'
    })
        .from('.reveal-opacity', {
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        }, "-=0.5");


    // 5. Service Section Reveal
    gsap.utils.toArray('.service-block').forEach(section => {
        gsap.from(section.querySelector('h2'), {
            scrollTrigger: {
                trigger: section,
                start: "top 75%"
            },
            y: 30,
            opacity: 0,
            duration: 0.8
        });

        gsap.from(section.querySelector('p'), {
            scrollTrigger: {
                trigger: section,
                start: "top 75%"
            },
            y: 20,
            opacity: 0,
            duration: 0.8,
            delay: 0.1
        });

        gsap.from(section.querySelector('.relative'), { // Image container
            scrollTrigger: {
                trigger: section,
                start: "top 70%"
            },
            scale: 0.95,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        });
    });

});
