
const openButton = document.querySelector('.open-button')
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.modal__close-button')
const modalOverlay = document.querySelector('.modal__overlay')


openButton.addEventListener('click', () => {
    modal.classList.add('modal--open')
    modalOverlay.classList.add('modal__overlay--open')
    
})

closeButton.addEventListener('click', () => {
    modal.classList.remove('modal--open')
    modalOverlay.classList.remove('modal__overlay--open')
})

modalOverlay.addEventListener('click', function() {
    modal.classList.remove('modal--open');
    modalOverlay.classList.remove('modal__overlay--open');
});
