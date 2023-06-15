document.addEventListener('DOMContentLoaded', () => {
    const connectBox = document.querySelectorAll('.connect__box');
    window.addEventListener('scroll', () => {
        const windowCenter = (window.innerHeight / 2) + window.scrollY;
        connectBox.forEach((el) => {
            const scrollOffset = el.offsetTop - (el.offsetHeight / 2);
            if (windowCenter >= scrollOffset) {
                el.classList.add('connect__box_animated');
            }
        });
    });
});
