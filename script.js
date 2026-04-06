/**
 * Battery Surgeon - Core Engine V4.0
 * Luxury Engineering & Molecular Restoration Edition
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi Sistem Global
    initLuxuryPreloader();
    initCustomCursor();
    initNavigationRefinement();
    initScrollRevealStaggered();
    initPrecisionROICalculator();
    initMagneticPhysics();
    initParallaxBlueprint();
    initLabStatisticsCounter();
    
    // Log Sistem dengan Gaya Konsol Korporat
    console.log(
        "%c BATTERY SURGEON %c Precision Engineering Lab V4.0 Active ",
        "color: #000; background: #D4AF37; padding: 5px 10px; font-weight: bold; border-radius: 3px 0 0 3px;",
        "color: #D4AF37; background: #121212; padding: 5px 10px; font-weight: bold; border-radius: 0 3px 3px 0; border: 1px solid #D4AF37;"
    );
});

/**
 * 1. Luxury Preloader dengan Diagnostik Teks Dinamik
 */
function initLuxuryPreloader() {
    const preloader = document.getElementById('preloader');
    const loaderFill = document.getElementById('loaderFill');
    const statusText = document.querySelector('#preloader .text-\[10px\]');
    
    if (!preloader) return;

    const phrases = [
        "Analyzing Cell Integrity...",
        "Calibrating Molecular Desulfation...",
        "Synchronizing BMS Protocol...",
        "Finalizing Diagnostic Report..."
    ];

    let progress = 0;
    let phraseIndex = 0;

    const interval = setInterval(() => {
        // Progress tidak linear untuk simulasi 'loading' yang pintar
        progress += Math.random() * 12;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Exit Animation yang lancar
            setTimeout(() => {
                preloader.style.transition = "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)";
                preloader.style.opacity = '0';
                setTimeout(() => preloader.style.display = 'none', 1200);
            }, 600);
        }

        // Tukar teks berdasarkan progress
        if (progress > (phraseIndex + 1) * 25 && phraseIndex < phrases.length - 1) {
            phraseIndex++;
            if(statusText) statusText.innerText = phrases[phraseIndex];
        }

        loaderFill.style.width = `${progress}%`;
    }, 85);
}

/**
 * 2. High-Precision Custom Cursor dengan Inertia
 */
function initCustomCursor() {
    // Abaikan jika menggunakan peranti sentuh
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = document.querySelector('.custom-cursor');
    const cursorOutline = document.querySelector('.custom-cursor-outline');

    if (!cursor || !cursorOutline) return;

    let mouseX = 0, mouseY = 0; // Kedudukan Mouse
    let cursorX = 0, cursorY = 0; // Kedudukan Outline (Lagging)

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Dot mengikuti serta-merta
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    // Loop Animasi untuk Outline yang lebih halus (Custom Lerp)
    function animate() {
        const easing = 0.15;
        cursorX += (mouseX - cursorX - 20) * easing; 
        cursorY += (mouseY - cursorY - 20) * easing;

        cursorOutline.style.left = `${cursorX}px`;
        cursorOutline.style.top = `${cursorY}px`;

        requestAnimationFrame(animate);
    }
    animate();

    // Hover Interaction: Scaling
    const targets = document.querySelectorAll('a, button, input, .step-card, .case-card');
    targets.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.transform = 'scale(1.8)';
            cursorOutline.style.background = 'rgba(212, 175, 55, 0.05)';
            cursorOutline.style.borderColor = 'rgba(212, 175, 55, 0.8)';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = 'scale(1)';
            cursorOutline.style.background = 'transparent';
            cursorOutline.style.borderColor = '#D4AF37';
        });
    });
}

/**
 * 3. Navigation Refinement (Glass Scroll)
 */
function initNavigationRefinement() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.padding = "12px 8%";
            navbar.style.background = "rgba(5, 5, 5, 0.95)";
            navbar.style.borderBottom = "1px solid rgba(212, 175, 55, 0.2)";
        } else {
            navbar.style.padding = "20px 8%";
            navbar.style.background = "rgba(10, 10, 10, 0.8)";
            navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.05)";
        }
    });
}

/**
 * 4. Precision ROI Calculator dengan Easing Eksponensial
 */
function initPrecisionROICalculator() {
    const priceInput = document.getElementById('newBatteryPrice');
    const unitInput = document.getElementById('unitCount');
    const display = document.getElementById('savingsResult');

    if (!priceInput || !display) return;

    const updateCalc = () => {
        const price = parseFloat(priceInput.value) || 0;
        const units = parseInt(unitInput.value) || 1;
        
        // Strategi Penjimatan: 70% ROI
        const total = (price * 0.70) * units;
        
        animateValue(display, total);
    };

    priceInput.addEventListener('input', updateCalc);
    unitInput.addEventListener('input', updateCalc);
}

function animateValue(obj, endValue) {
    let startValue = 0;
    const duration = 2000;
    const startTime = performance.now();

    function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Quintic Ease Out untuk kesan 'luxury'
        const ease = 1 - Math.pow(1 - progress, 5);
        const current = ease * endValue;

        obj.innerText = new Intl.NumberFormat('ms-MY', {
            style: 'currency',
            currency: 'MYR'
        }).format(current);

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}

/**
 * 5. Magnetic Physics micro-interaction
 */
function initMagneticPhysics() {
    const magnets = document.querySelectorAll('.btn-gold, .logo');
    
    magnets.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const pos = el.getBoundingClientRect();
            const x = e.clientX - pos.left - pos.width / 2;
            const y = e.clientY - pos.top - pos.height / 2;

            el.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
            el.style.transition = 'transform 0.1s ease-out';
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0px, 0px)';
            el.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        });
    });
}

/**
 * 6. Parallax Blueprint & Text Outline Effect
 */
function initParallaxBlueprint() {
    const outlineText = document.querySelector('.text-outline');
    if (!outlineText) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        // Bergerak ke arah bertentangan untuk kesan kedalaman (depth)
        outlineText.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.15}px))`;
    });
}

/**
 * 7. Staggered Lab Statistics Counter
 */
function initLabStatisticsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endValue = parseFloat(target.innerText.replace(/[^0-9.]/g, ''));
                const suffix = target.innerText.replace(/[0-9.,]/g, '');
                
                animateCounter(target, endValue, suffix);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.8 });

    stats.forEach(s => observer.observe(s));
}

function animateCounter(el, end, suffix) {
    let start = 0;
    const duration = 2500;
    const startTime = performance.now();

    function update(time) {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        
        const current = (ease * end).toFixed(end % 1 === 0 ? 0 : 1);
        el.innerText = current + suffix;

        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

/**
 * 8. Staggered Scroll Reveal (Luxury Easing)
 */
function initScrollRevealStaggered() {
    const options = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Tambah sedikit delay bagi setiap elemen berturutan
                setTimeout(() => {
                    entry.target.classList.add('reveal-visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    const revealElements = document.querySelectorAll('.step-card, .case-card, .calc-card, .stat-item, #philosophy h2, .premium-divider');
    revealElements.forEach(el => observer.observe(el));
}

/**
 * 9. Smooth Scroll Enhancement
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
