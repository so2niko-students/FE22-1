const DOM = {
    inp : document.querySelector('.input-scroll-y'),
    btn : document.querySelector('.btn-scroll')
};

DOM.btn.addEventListener('click', () => {
    const y = +DOM.inp.value;
    scroll({
        left : 0,
        top : y,
        behavior : 'smooth'
    });
});