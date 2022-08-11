import { SIZES } from './sizes.js';
import { audioCreateOn } from './audio.js';

//create DICH
function getDich(x = 0, y = 0){
    const d = document.createElement('div');
    d.classList.add('dich');
    d.style.top = `${ y }px`;
    d.style.left = `${ x }px`;
    d.style.backgroundColor = getRandomColor();
    return d;
}

//random
function random(from = 0, to = 1000){
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function getRandomColor(){
    return `hsl(${ random(0, 360) }, 100%, 50%)`;
}

//setDichToField
export function setDichToField(){
    const { width, height } = SIZES;
    const x = random(0, width);
    const y = random(0, height);

    const dich = getDich(x, y);
    dich.addEventListener('click', handleClickToDich);
    document.body.appendChild(dich);
}

function handleClickToDich(ev){
    ev.target.remove();
    audioCreateOn();
}
