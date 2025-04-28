// Swiper Initialization
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Quantum Particles
const quantumBg = document.getElementById('quantumBg');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('quantum-particle');
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 15}s`;
    quantumBg.appendChild(particle);
}

// Custom Cursor
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    
    setTimeout(() => {
        cursorFollower.style.left = `${e.clientX}px`;
        cursorFollower.style.top = `${e.clientY}px`;
    }, 100);

    if (Math.random() > 0.95) {
        createLightning(e.clientX, e.clientY);
    }
});

function createLightning(x, y) {
    const lightning = document.createElement('div');
    lightning.classList.add('lightning');
    lightning.style.left = `${x}px`;
    lightning.style.top = `${y}px`;
    lightning.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    document.body.appendChild(lightning);

    setTimeout(() => {
        lightning.style.height = `${Math.random() * 50 + 20}px`;
        lightning.style.opacity = '0.8';
        
        setTimeout(() => {
            lightning.style.opacity = '0';
            setTimeout(() => {
                lightning.remove();
            }, 300);
        }, 50);
    }, 10);
}

// Mobile Menu
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('open');
});

closeMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            mobileMenu.classList.remove('open');
        }
    });
});

// Section Reveal Animation
const sections = document.querySelectorAll('.section');

function checkScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);
checkScroll();

// CV Download Function
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'pdf/cv_haikal.pdf';
    link.download = 'CV_HaikalArgyoRamdhan.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('Ketik "OK" untuk mendapatkan CV.');
}