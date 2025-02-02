
        // Бургер

document.addEventListener('click', burgerInit);
document.addEventListener('keydown', handleKeydown);

function burgerInit(e) {
    const burgerIcon = e.target.closest('.burger-icon');
    const burgerNavLink = e.target.closest('.nav__link');

    if (!burgerIcon && !burgerNavLink) return;
    if (document.documentElement.clientWidth > 900) return;

    document.body.classList.toggle('body--opened-menu');
}

function handleKeydown(e) {
    if (e.key === 'Escape' && document.body.classList.contains('body--opened-menu')) {
        document.body.classList.remove('body--opened-menu');
    }
}

        // Слайдер

new Swiper('.welcome__slider', {

    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
    rewind: true,

    navigation: {
        nextEl: '.welcome__next',
        prevEl: '.welcome__prev',
    },
});

        // Поиск в looking

const input = document.querySelector('.looking__input');
const lookingButtons = document.querySelectorAll('.looking__button');

lookingButtons.forEach(button => {
    button.addEventListener('click', () => {
        input.value = button.textContent;
    });
});