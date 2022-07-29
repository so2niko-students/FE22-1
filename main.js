let PARAMS = {
    x : 0,
    y : 0,
    h : document.body.clientHeight,
    w : document.body.clientWidth,
    b : 0,
    display : document.querySelector('.color')
}

window.addEventListener('resize', () => {
    const { clientWidth, clientHeight } = document.body;
    PARAMS.h = clientHeight;
    PARAMS.w = clientWidth;
});

document.body.addEventListener('mousemove', ({ clientX, clientY }) => {
    PARAMS.x = clientX;
    PARAMS.y = clientY;

    changeColor();
});

function changeColor(){
    const { x, y, h, w } = PARAMS;
    const r = ~~(x / w * 256);
    const g = ~~(y / h * 256);
    const color = `rgb(${r},${g},${PARAMS.b})`;
    PARAMS.display.textContent = color;
    document.body.style.backgroundColor = color;
}

document.body.addEventListener('wheel', ({ deltaY }) => {
    PARAMS.b = Math.abs(PARAMS.b + (deltaY > 0 ? 5 : -5)) % 256;

    changeColor();
});