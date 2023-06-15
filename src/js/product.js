document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    window.addEventListener('scroll', () => {
        const windowCenter = (window.innerHeight / 2) + window.scrollY;
        products.forEach((el) => {
            const scrollOffset = el.offsetTop;
            if (windowCenter >= scrollOffset) {
                el.classList.add('product_animated');
            }
        });
    });
});
