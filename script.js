/**
 * Battery Surgeon - Core Engine V3.0
 * Premium Industrial & Molecular Restoration Edition
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi Sistem
    initPreloader();
    initCustomCursor();
    initNavigation();
    initScrollReveal();
    initROICalculator();
    initMagneticButtons();
    initParallaxHero();
    
    console.log("%c🔋 DIAGNOSTIC SYSTEM: Molecular Restoration Ready.", "color: #D4AF37; font-weight: bold; font-size: 14px;");
});

/**
 * 1. Premium Preloader Logic
 */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const loaderFill = document.getElementById('loaderFill');
    
    if (!preloader) return;

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15; // Random increment for "diagnostic" feel
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => preloader.style.display = 'none', 800);
            }, 500);
        }
        loaderFill.style.width = `${progress}%`;
    }, 100);
}

/**
 * 2. Luxury Custom Cursor
 */
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorOutline = document.querySelector('.custom-cursor-outline');

    if (!cursor || !cursorOutline) return;

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows mouse immediately
        cursor.style.transform = `translate(${posX}px, ${posY}px)`;

        // Outline follows with lag for premium feel
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover effect for links & buttons
    const interactiveElements = document.querySelectorAll('a, button, input, .step-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.transform = 'scale(1.5)';
            cursorOutline.style.borderColor = 'rgba(212, 175, 55, 0.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = 'scale(1)';
            cursorOutline.style.borderColor = '#D4AF37';
        });
    });
}

/**
 * 3. Navigation Glassmorphism Effect
 */
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "15px 8%";
            navbar.style.background = "rgba(10, 10, 10, 0.95)";
        } else {
            navbar.style.padding = "25px 8%";
            navbar.style.background = "rgba(10, 10, 10, 0.8)";
        }
    });
}

/**
 * 4. Precision ROI Calculator (Molecular Restoration)
 */
function initROICalculator() {
    const newPriceInput = document.getElementById('newBatteryPrice');
    const unitInput = document.getElementById('unitCount');
    const resultDisplay = document.getElementById('savingsResult');

    if (!newPriceInput || !resultDisplay) return;

    function calculate() {
        const price = parseFloat(newPriceInput.value) || 0;
        const units = parseInt(unitInput.value) || 1;
        
        if (price > 0) {
            // Penjimatan 70% (Premium Restoration Strategy)
            const totalSavings = (price * 0.70) * units;
            animateCurrency(resultDisplay, totalSavings);
        } else {
            resultDisplay.innerText = "RM 0.00";
        }
    }

    newPriceInput.addEventListener('input', calculate);
    unitInput.addEventListener('input', calculate);
}

function animateCurrency(target, value) {
    let start = 0;
    const end = value;
    const duration = 1500; // Longer duration for luxury feel
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Bezier Ease-Out for smoother finish
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = easeOut * end;
        
        target.innerText = new Intl.NumberFormat('ms-MY', {
            style: 'currency',
            currency: 'MYR',
            minimumFractionDigits: 2
        }).format(currentVal);

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    requestAnimationFrame(update);
}

/**
 * 5. Magnetic Button Micro-interaction
 */
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-gold');
    
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const position = btn.getBoundingClientRect();
            const x = e.pageX - position.left - position.width / 2;
            const y = e.pageY - position.top - position.height / 2;

            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;
        });

        btn.addEventListener('mouseout', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });
}

/**
 * 6. Scroll Parallax for Hero Section
 */
function initParallaxHero() {
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;
        // Move background slower than scroll
        hero.style.backgroundPositionY = `${scrollValue * 0.5}px`;
    });
}

/**
 * 7. Advanced Scroll Reveal Animation
 */
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                
                // If it's a Case Card, add a small delay for staggered effect
                if (entry.target.classList.contains('case-card')) {
                    entry.target.style.transitionDelay = "0.2s";
                }
            }
        });
    }, observerOptions);

    const targets = document.querySelectorAll('.step-card, .calc-card, .case-card, .trust-bar, .premium-divider, h2');
    
    targets.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all 1s cubic-bezier(0.16, 1, 0.3, 1)";
        revealObserver.observe(el);
    });
}

/**
 * 8. Smooth Scroll for Anchor Links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
