document.addEventListener('DOMContentLoaded', () => {
    const phoneBtn = document.querySelectorAll('.phone__btn');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal__close');
    const modalWindow = document.querySelector('.modal__window');
    const modalForm = document.querySelector('.modal__form');
    phoneBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            modal.classList.remove('hidden');
        });
    });
    modalClose.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
    modal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
    modalWindow.addEventListener('click', (event) => {
        event.stopPropagation();
    });
    modalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        event.target.reset();
    });
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const windowHeight = document.documentElement.clientHeight;
        const shift = scrollTop;
        if (scrollTop >= (windowHeight / 3)) {
            modal.style.transform = `translateY(${shift}px)`;
        } else { modal.style.transform = 'translateY(0)'; }
    });
});
