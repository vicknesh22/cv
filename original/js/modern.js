// Modern CV Enhancements - Dark Mode, Animations, Interactions

// Dark Mode Toggle
class DarkModeManager {
    constructor() {
        this.darkMode = localStorage.getItem('darkMode') === 'true';
        this.init();
    }

    init() {
        this.createToggleButton();
        if (this.darkMode) {
            document.body.classList.add('dark-mode');
        }
    }

    createToggleButton() {
        const toggle = document.createElement('button');
        toggle.className = 'dark-mode-toggle';
        toggle.setAttribute('aria-label', 'Toggle dark mode');
        toggle.innerHTML = `
            <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        `;

        toggle.addEventListener('click', () => this.toggle());
        document.body.appendChild(toggle);
    }

    toggle() {
        this.darkMode = !this.darkMode;
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', this.darkMode);
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                }
            });
        }, this.observerOptions);

        // Observe all sections and cards
        document.querySelectorAll('.section, .achievement-card, .job, .project-card, .cert-card').forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }
}

// Skill Bars Animation
class SkillBars {
    init() {
        const skillsSection = document.querySelector('.section:has(.skills-category)');
        if (!skillsSection) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSkills();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(skillsSection);
    }

    animateSkills() {
        document.querySelectorAll('.skill-tag').forEach((tag, index) => {
            setTimeout(() => {
                tag.style.opacity = '0';
                tag.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    tag.style.transition = 'all 0.5s ease';
                    tag.style.opacity = '1';
                    tag.style.transform = 'translateY(0)';
                }, 50);
            }, index * 50);
        });
    }
}

// Smooth Scroll for Anchor Links
class SmoothScroll {
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Typing Effect for Tagline
class TypingEffect {
    constructor(element, text, speed = 100) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.charIndex = 0;
    }

    type() {
        if (this.charIndex < this.text.length) {
            this.element.textContent += this.text.charAt(this.charIndex);
            this.charIndex++;
            setTimeout(() => this.type(), this.speed);
        }
    }

    init() {
        this.element.textContent = '';
        this.type();
    }
}

// Parallax Effect for Header
class ParallaxHeader {
    init() {
        const header = document.querySelector('.header');
        if (!header) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            header.style.transform = `translateY(${parallax}px)`;
        });
    }
}

// Achievement Cards Counter Animation
class CounterAnimation {
    init() {
        const counters = document.querySelectorAll('.achievement-card h3');

        counters.forEach(counter => {
            const target = counter.textContent;

            // Check if the target contains a number
            const numberMatch = target.match(/\d+/);
            if (!numberMatch) return;

            const targetNumber = parseInt(numberMatch[0]);
            const suffix = target.replace(/\d+/, '');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateCounter(counter, 0, targetNumber, suffix, 2000);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(counter.closest('.achievement-card'));
        });
    }

    animateCounter(element, start, end, suffix, duration) {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                element.textContent = end + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 16);
    }
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DarkModeManager();
    new ScrollAnimations();
    new SkillBars().init();
    new SmoothScroll().init();
    new CounterAnimation().init();

    // Optional: Parallax (can be disabled if performance issues)
    // new ParallaxHeader().init();

    // Add loaded class for animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Cursor Trail Effect (Optional - can be disabled)
class CursorTrail {
    constructor() {
        this.trail = [];
        this.maxTrail = 20;
        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            this.createTrailDot(e.clientX, e.clientY);
        });
    }

    createTrailDot(x, y) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.left = x + 'px';
        dot.style.top = y + 'px';
        document.body.appendChild(dot);

        setTimeout(() => {
            dot.remove();
        }, 1000);
    }
}

// Uncomment to enable cursor trail
// new CursorTrail();
