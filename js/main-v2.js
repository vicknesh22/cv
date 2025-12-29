/**
 * Modern CV Website - V2
 * Interactive JavaScript Components
 */

// ============================================
// UTILITY FUNCTIONS
// ============================================

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Debounce function for performance
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

class NavbarController {
    constructor() {
        this.navbar = $('.navbar');
        this.lastScrollTop = 0;
        this.scrollThreshold = 100;

        this.init();
    }

    init() {
        window.addEventListener('scroll', debounce(() => {
            this.handleScroll();
        }, 10));
    }

    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add/remove scrolled class
        if (scrollTop > this.scrollThreshold) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }

        this.lastScrollTop = scrollTop;
    }
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

class ScrollReveal {
    constructor() {
        this.sections = $$('.section');
        this.observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };

        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, this.observerOptions);

        this.sections.forEach(section => {
            observer.observe(section);
        });
    }
}

// ============================================
// EXPERIENCE TABS
// ============================================

class ExperienceTabs {
    constructor() {
        this.tabButtons = $$('.tab-button');
        this.panels = $$('.experience-panel');

        this.init();
    }

    init() {
        this.tabButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                this.switchTab(index);
            });
        });
    }

    switchTab(index) {
        // Remove active class from all tabs and panels
        this.tabButtons.forEach(btn => btn.classList.remove('active'));
        this.panels.forEach(panel => panel.classList.remove('active'));

        // Add active class to selected tab and panel
        this.tabButtons[index].classList.add('active');
        this.panels[index].classList.add('active');
    }
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

class SmoothScroll {
    constructor() {
        this.anchorLinks = $$('a[href^="#"]');
        this.init();
    }

    init() {
        this.anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');

                // Skip if href is just "#"
                if (href === '#') return;

                e.preventDefault();
                const target = $(href);

                if (target) {
                    const navHeight = $('.navbar').offsetHeight;
                    const targetPosition = target.offsetTop - navHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// ============================================
// MOBILE MENU
// ============================================

class MobileMenu {
    constructor() {
        this.menuToggle = $('.mobile-menu-toggle');
        this.navMenu = $('.nav-menu');
        this.isOpen = false;

        if (this.menuToggle) {
            this.init();
        }
    }

    init() {
        this.menuToggle.addEventListener('click', () => {
            this.toggle();
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isOpen &&
                !this.menuToggle.contains(e.target) &&
                !this.navMenu.contains(e.target)) {
                this.close();
            }
        });

        // Close menu when clicking on a link
        const menuLinks = this.navMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.close();
            });
        });
    }

    toggle() {
        this.isOpen = !this.isOpen;
        this.menuToggle.classList.toggle('active');
        this.navMenu.classList.toggle('active');
        document.body.style.overflow = this.isOpen ? 'hidden' : '';
    }

    close() {
        this.isOpen = false;
        this.menuToggle.classList.remove('active');
        this.navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ============================================
// DYNAMIC STATS COUNTER
// ============================================

class StatsCounter {
    constructor() {
        this.stats = $$('.stat-number');
        this.hasAnimated = false;
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasAnimated) {
                    this.hasAnimated = true;
                    this.animateStats();
                }
            });
        }, { threshold: 0.5 });

        if ($('.hero-stats')) {
            observer.observe($('.hero-stats'));
        }
    }

    animateStats() {
        this.stats.forEach(stat => {
            const target = stat.textContent;
            const isPercentage = target.includes('%');
            const isCurrency = target.includes('₹');
            const isPlus = target.includes('+');

            // Extract number
            let targetNumber = parseInt(target.replace(/[^\d]/g, ''));

            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepDuration = duration / steps;
            const increment = targetNumber / steps;

            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= targetNumber) {
                    current = targetNumber;
                    clearInterval(timer);
                }

                let display = Math.floor(current);
                if (isCurrency) display = '₹' + display + 'L';
                if (isPlus) display += '+';
                if (isPercentage) display += '%';

                stat.textContent = display;
            }, stepDuration);
        });
    }
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================

class KeyboardNavigation {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => {
            // Focus outline for keyboard navigation
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-nav');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-nav');
        });
    }
}

// ============================================
// PROJECT CARDS TILT EFFECT
// ============================================

class ProjectCardTilt {
    constructor() {
        this.cards = $$('.project-card');
        this.init();
    }

    init() {
        // Only enable on desktop
        if (window.innerWidth > 768) {
            this.cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    this.handleTilt(e, card);
                });

                card.addEventListener('mouseleave', () => {
                    this.resetTilt(card);
                });
            });
        }
    }

    handleTilt(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 30;
        const rotateY = (centerX - x) / 30;

        const projectImage = card.querySelector('.project-image');
        if (projectImage) {
            projectImage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        }
    }

    resetTilt(card) {
        const projectImage = card.querySelector('.project-image');
        if (projectImage) {
            projectImage.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        }
    }
}

// ============================================
// CURSOR SPOTLIGHT EFFECT (Desktop Only)
// ============================================

class CursorSpotlight {
    constructor() {
        this.isDesktop = window.innerWidth > 1024;
        if (this.isDesktop) {
            this.init();
        }
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            const spotlight = document.createElement('div');
            spotlight.style.cssText = `
                position: fixed;
                top: ${e.clientY}px;
                left: ${e.clientX}px;
                width: 400px;
                height: 400px;
                background: radial-gradient(circle, rgba(100, 255, 218, 0.03) 0%, transparent 70%);
                pointer-events: none;
                transform: translate(-50%, -50%);
                transition: opacity 0.3s;
                z-index: 9999;
            `;
            spotlight.id = 'cursor-spotlight';

            const existing = $('#cursor-spotlight');
            if (existing) {
                existing.remove();
            }

            document.body.appendChild(spotlight);
        });
    }
}

// ============================================
// PRELOADER
// ============================================

class Preloader {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');

            // Small delay to show initial animations
            setTimeout(() => {
                this.reveal();
            }, 100);
        });
    }

    reveal() {
        // Trigger initial fade-in animations
        const heroElements = $$('.hero [class*="hero-"]');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
}

// ============================================
// ACTIVE SECTION HIGHLIGHTER
// ============================================

class ActiveSectionHighlighter {
    constructor() {
        this.sections = $$('section[id]');
        this.navLinks = $$('.nav-menu a[href^="#"]');
        this.init();
    }

    init() {
        window.addEventListener('scroll', debounce(() => {
            this.highlightActiveSection();
        }, 100));
    }

    highlightActiveSection() {
        const scrollPosition = window.scrollY + 200;

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// ============================================
// INITIALIZE ALL COMPONENTS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new NavbarController();
    new ScrollReveal();
    new ExperienceTabs();
    new SmoothScroll();
    new MobileMenu();
    new StatsCounter();
    new KeyboardNavigation();
    new ProjectCardTilt();
    new CursorSpotlight();
    new Preloader();
    new ActiveSectionHighlighter();

    console.log('%c🚀 Portfolio Loaded Successfully!', 'color: #64ffda; font-size: 16px; font-weight: bold;');
    console.log('%cBuilt with ❤️ by Vicknesh Rethinavelu', 'color: #8892b0; font-size: 12px;');
});

// ============================================
// EASTER EGG
// ============================================

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            console.log('%c🎮 Konami Code Activated!', 'color: #64ffda; font-size: 20px; font-weight: bold;');
            console.log('%cYou found the easter egg! 🥚', 'color: #64ffda; font-size: 16px;');
            document.body.style.animation = 'rainbow 2s linear infinite';
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});
