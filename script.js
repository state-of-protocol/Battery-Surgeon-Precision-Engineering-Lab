/**
 * Battery Surgeon - Core Interactive Logic & ROI Engine
 * Version: 2.0 (Premium Industrial Edition)
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi Sistem
    initNavigation();
    initScrollReveal();
    initROICalculator();
    initBatteryStressLogic();
    
    console.log("%c🔋 BATTERY SURGEON: Precision Engineering System Active.", "color: #D4AF37; font-weight: bold; font-size: 12px;");
});

/**
 * 1. Smooth Navigation & Header Effect
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
 * 2. Precision ROI Calculator
 * Mengira penjimatan kos pemulihan berbanding pembelian unit baru.
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
            // Formula: Kos pemulihan adalah ~30% daripada harga baru. 
            // Maka, penjimatan (ROI) adalah 70%.
            const totalSavings = (price * 0.70) * units;
            
            animateCurrency(resultDisplay, totalSavings);
        } else {
            resultDisplay.innerText = "RM 0.00";
        }
    }

    // Listener untuk input automatik
    newPriceInput.addEventListener('input', calculate);
    unitInput.addEventListener('input', calculate);
}

/**
 * 3. Currency Animation
 * Menghasilkan kesan nombor bergerak (counter) yang eksklusif.
 */
function animateCurrency(target, value) {
    let start = 0;
    const end = value;
    const duration = 1000; // 1 saat
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out function untuk pergerakan lebih smooth
        const currentVal = progress * end;
        
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
 * 4. Scroll Reveal Animation
 * Memberikan kesan elemen muncul secara elegan apabila skrol.
 */
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                revealObserver.unobserve(entry.target); // Hanya jalan sekali
            }
        });
    }, observerOptions);

    // Sasarkan elemen-elemen penting
    const targets = document.querySelectorAll('.step-card, .calc-card, .table-wrapper, .alert-box, h2');
    
    targets.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
        revealObserver.observe(el);
    });
}

/**
 * 5. Battery Stress Logic (Educational Tool)
 * Fungsi tambahan untuk mengira "State of Health" berdasarkan parameter input.
 */
function initBatteryStressLogic() {
    window.analyzeBatteryHealth = (soc, temperature, isFastCharge) => {
        let stressPoints = 0;

        // Logik State of Charge (SOC)
        if (soc > 85 || soc < 15) stressPoints += 40;
        else if (soc > 70 || soc < 30) stressPoints += 15;

        // Logik Suhu
        if (temperature > 40) stressPoints += 30;

        // Logik Charging
        if (isFastCharge) stressPoints += 30;

        const healthStatus = stressPoints > 60 ? "CRITICAL" : (stressPoints > 30 ? "MODERATE" : "OPTIMUM");
        
        console.log(`[Diagnostic Report] Stress Level: ${stressPoints}% | Status: ${healthStatus}`);
        return { stressPoints, healthStatus };
    };
}

/**
 * 6. Utility: Smooth Scroll untuk Anchor Links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Offset untuk navbar
                behavior: 'smooth'
            });
        }
    });
});
