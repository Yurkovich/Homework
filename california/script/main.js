
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