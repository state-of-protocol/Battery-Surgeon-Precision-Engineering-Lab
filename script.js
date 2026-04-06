/**
 * EV Battery Longevity - The Surgeon's Guide
 * Core Interactive Logic & Analytics
 */

document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initBatteryCalculator();
    initDarkMode();
    console.log("🔋 Surgeon's System: Online & Monitoring Battery Health.");
});

/**
 * 1. Animation: Reveal elements on scroll
 * Menjadikan paparan lebih "smooth" dan profesional.
 */
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Sasarkan kad dan seksyen untuk animasi
    const elements = document.querySelectorAll('.card, section, table');
    elements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });
}

/**
 * 2. Calculator: Estimasikan "Stress Score" Bateri
 * Logik mudah untuk mendidik user tentang tabiat pengecasan.
 */
function initBatteryCalculator() {
    // Fungsi ini boleh dipanggil jika ada UI input di HTML
    window.calculateBatteryStress = (chargeLevel, isFastCharge) => {
        let stressScore = 0;

        // Faktor Voltan
        if (chargeLevel > 80 || chargeLevel < 20) {
            stressScore += 50; // High stress zone
        } else {
            stressScore += 10; // Sweet spot
        }

        // Faktor Haba (DC vs AC)
        if (isFastCharge) {
            stressScore += 40;
        }

        displayHealthAlert(stressScore);
        return stressScore;
    };
}

/**
 * 3. Health UI Alert
 * Memberi feedback visual berdasarkan skor stress.
 */
function displayHealthAlert(score) {
    let message = "";
    if (score >= 80) message = "⚠️ Amaran: Sel bateri dalam keadaan stress tinggi!";
    else if (score >= 40) message = "🟡 Sederhana: Optimumkan rutin pengecasan anda.";
    else message = "✅ Cemerlang: Anda menjaga jangka hayat bateri dengan baik.";
    
    console.log(`[Battery Monitor] Score: ${score}% - ${message}`);
}

/**
 * 4. Dark Mode Toggle
 * Menguruskan estetika visual mengikut keselesaan mata (Penting untuk pemandu waktu malam).
 */
function initDarkMode() {
    const darkModeBtn = document.querySelector('#dark-mode-toggle');
    if (!darkModeBtn) return;

    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('ev-theme', isDark ? 'dark' : 'light');
    });

    // Check saved preference
    if (localStorage.getItem('ev-theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

/**
 * 5. Data Logger (Simulasi)
 * Untuk tujuan pendidikan: Log aktiviti pengecasan terakhir.
 */
const batteryLog = {
    logCharge(type, start, end) {
        const timestamp = new Date().toLocaleString();
        const efficiency = end - start;
        console.table({
            Event: "Charging Session",
            Type: type, // AC or DC
            Duration: `${efficiency}% added`,
            Time: timestamp
        });
    }
};

// Export untuk kegunaan modul jika perlu
if (typeof module !== 'undefined') {
    module.exports = { batteryLog };
}
