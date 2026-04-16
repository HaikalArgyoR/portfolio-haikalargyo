// Swiper Initialization - Certificate Section
const certificateSwiper = new Swiper('#certificateSwiper', {
    loop: true,
    grabCursor: true,
    preventClicks: false,
    preventClicksPropagation: false,
    slideToClickedSlide: false,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        waitForTransition: true,
    },
    navigation: {
        nextEl: '#certNextBtn',
        prevEl: '#certPrevBtn',
    },
    pagination: {
        el: '#certPagination',
        clickable: true,
        dynamicBullets: true,
    },
    keyboard: true,
    speed: 800,
    spaceBetween: 0,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
    },
});

// Swiper Initialization - Gallery Section
const gallerySwiper = new Swiper('#gallerySwiper', {
    loop: true,
    grabCursor: true,
    preventClicks: false,
    preventClicksPropagation: false,
    slideToClickedSlide: false,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        waitForTransition: true,
    },
    navigation: {
        nextEl: '#gallNextBtn',
        prevEl: '#gallPrevBtn',
    },
    pagination: {
        el: '#gallPagination',
        clickable: true,
        dynamicBullets: true,
    },
    keyboard: true,
    speed: 800,
    spaceBetween: 0,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
    },
});

// Quantum Particles - Reduced from 50 to 15 for better performance
const quantumBg = document.getElementById('quantumBg');
for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.classList.add('quantum-particle');
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 15}s`;
    quantumBg.appendChild(particle);
}

// Custom Cursor - Optimized with RequestAnimationFrame
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');
let cursorX = 0, cursorY = 0;
let followerX = 0, followerY = 0;
let lightningCount = 0;

document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    
    // Reduced lightning creation (only 2% chance instead of 5%)
    if (Math.random() > 0.98 && lightningCount < 3) {
        createLightning(cursorX, cursorY);
    }
});

// Smooth cursor follower with RequestAnimationFrame
function animateCursorFollower() {
    const dx = cursorX - followerX;
    const dy = cursorY - followerY;
    
    followerX += dx * 0.15;
    followerY += dy * 0.15;
    
    cursorFollower.style.left = `${followerX}px`;
    cursorFollower.style.top = `${followerY}px`;
    
    requestAnimationFrame(animateCursorFollower);
}

animateCursorFollower();

function createLightning(x, y) {
    if (lightningCount >= 3) return; // Limit concurrent lightning effects
    
    lightningCount++;
    const lightning = document.createElement('div');
    lightning.classList.add('lightning');
    lightning.style.left = `${x}px`;
    lightning.style.top = `${y}px`;
    lightning.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    document.body.appendChild(lightning);

    requestAnimationFrame(() => {
        lightning.style.height = `${Math.random() * 50 + 20}px`;
        lightning.style.opacity = '0.8';
    });
    
    setTimeout(() => {
        lightning.style.opacity = '0';
        setTimeout(() => {
            lightning.remove();
            lightningCount--;
        }, 300);
    }, 100);
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

// Mobile Collapse Toggle for Slide Descriptions
document.querySelectorAll('.slide-toggle').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        const description = this.closest('.slide-footer').querySelector('.slide-description');
        
        if (description) {
            this.classList.toggle('expanded');
            description.classList.toggle('expanded');
        }
    });
});

// Toggle Projects - Show More/Collapse
const toggleProjectsBtn = document.getElementById('toggleProjectsBtn');
const hiddenProjects = document.getElementById('hiddenProjects');
let isProjectsExpanded = false;

if (toggleProjectsBtn && hiddenProjects) {
    toggleProjectsBtn.addEventListener('click', function() {
        isProjectsExpanded = !isProjectsExpanded;
        hiddenProjects.classList.toggle('show', isProjectsExpanded);
        toggleProjectsBtn.classList.toggle('expanded', isProjectsExpanded);
        
        const buttonText = toggleProjectsBtn.querySelector('.button-text');
        buttonText.textContent = isProjectsExpanded ? 'Show Less' : 'Show More';
    });
}

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
    link.href = 'pdf/CV_Haikal_Argyo_Ramdhan_Internship.pdf';
    link.download = 'CV_HaikalArgyoRamdhan.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('Ketik "OK" untuk mendapatkan CV.');
}
