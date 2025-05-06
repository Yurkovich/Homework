// Мобильное меню
const burgerIcon = document.querySelector('.burger-icon');
const nav = document.querySelector('.nav');
const dropdowns = document.querySelectorAll('.has-dropdown');

burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Закрытие меню при клике вне его
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burgerIcon.contains(e.target)) {
        burgerIcon.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Управление выпадающими меню на мобильных устройствах
dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav__link');
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});

// Анимация появления элементов при скролле
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.welcome__slide, .latest__card, .selled__card, .best__card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Инициализация анимаций
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.welcome__slide, .latest__card, .selled__card, .best__card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
    });
    
    animateOnScroll();
});

// Слушатель скролла для анимаций
window.addEventListener('scroll', animateOnScroll);

// Плавный скролл для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 