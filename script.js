document.addEventListener('DOMContentLoaded', () => {

    // Nav scroll
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Smooth scroll
    const navLinks = document.getElementById('navLinks');
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
                if (navLinks) navLinks.classList.remove('active');
            }
        });
    });

    // Mobile menu
    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Reveal on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Stagger grid children
    document.querySelectorAll('.pricing-grid, .additional-grid, .why-grid, .blog-grid').forEach(grid => {
        Array.from(grid.children).forEach((child, i) => {
            if (child.classList.contains('reveal')) {
                child.style.transitionDelay = `${i * 0.08}s`;
            }
        });
    });

});