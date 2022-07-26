[...document.querySelectorAll('.box')].forEach(box => {
    let pos = 0;
    box.addEventListener('click', () => {
        pos++;
        box.style.left = `${pos * 15}px`;
        box.innerText = pos;
    })
});