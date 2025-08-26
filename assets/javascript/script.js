// Chặn F12, Ctrl+Shift+I/J/C, Ctrl+U
document.addEventListener('keydown', function (e) {
    // F12
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }
    // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) {
        e.preventDefault();
        return false;
    }
    // Ctrl+U
    if (e.ctrlKey && e.key.toUpperCase() === 'U') {
        e.preventDefault();
        return false;
    }
});

// Chặn chuột phải
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
});

// Phát hiện mở DevTools qua kích thước cửa sổ (thủ thuật nâng cao)
(function () {
    const threshold = 160; // chiều rộng/chiều cao tối thiểu của devtools
    setInterval(function () {
        if (window.outerWidth - window.innerWidth > threshold ||
            window.outerHeight - window.innerHeight > threshold) {
            document.body.innerHTML = "<h2 style='text-align:center;margin-top:20%;'>DevTools bị khóa 🚫</h2>";
        }
    }, 500);
})();

// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', function () {
    const html = document.documentElement;
    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
    } else {
        html.setAttribute('data-theme', 'dark');
    }
});

// Hamburger menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
});

// Active nav link on click and scroll
const navLinkEls = document.querySelectorAll('.nav-links a');
const sections = Array.from(navLinkEls).map(link => document.querySelector(link.getAttribute('href')));

function setActiveNav() {
    let index = sections.length - 1;
    for (let i = 0; i < sections.length; i++) {
        if (window.scrollY + 80 < sections[i].offsetTop) break;
        index = i;
    }
    navLinkEls.forEach((link, i) => {
        link.classList.toggle('active', i === index);
    });
}

navLinkEls.forEach(link => {
    link.addEventListener('click', function () {
        navLinkEls.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

window.addEventListener('scroll', setActiveNav);
window.addEventListener('load', setActiveNav);

// Scroll progress bar
const scrollProgress = document.querySelector('.scroll-progress');
window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// Smooth scroll to section
navLinkEls.forEach(link => {
    link.addEventListener('click', (e) => {
        const target = e.currentTarget.getAttribute('href');
        const element = document.querySelector(target);
        if (element) {
            e.preventDefault();
            navLinks.classList.remove('open');
            window.scrollTo({
                top: element.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Loading screen simulation
window.addEventListener('load', function () {
    const loadingScreen = document.querySelector('.loading-screen');
    loadingScreen.style.display = 'none';
});

// Form submission (mock)
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    console.log('Form submitted:', data);
    alert('Cảm ơn bạn đã liên hệ! Mình sẽ phản hồi sớm nhất có thể.');
    contactForm.reset();
});

// Tự động chuyển dark/light mode theo giờ thiết bị
(function autoThemeByTime() {
    const hour = new Date().getHours();
    const html = document.documentElement;
    // Ban đêm: dark mode (từ 18h đến 6h)
    if (hour >= 18 || hour < 6) {
        html.setAttribute('data-theme', 'dark');
    } else {
        html.removeAttribute('data-theme');
    }
})();

// Chặn F12 và Ctrl+Shift+I/ Ctrl+U xem source code
document.addEventListener('keydown', function (e) {
    // F12
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }
    // Ctrl+Shift+I hoặc Ctrl+Shift+J hoặc Ctrl+U
    if ((e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
        return false;
    }
});

// Chặn chuột phải
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});