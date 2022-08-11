const el = document.querySelector('.element');
const output = (txt) => {
    const output = document.querySelector('.output');
    output.innerText = txt;
    output.classList.toggle('output-new');

}
const BG_RED = 'redBG';
const CIRCLE = 'circle';

el.addEventListener('click', () => {
    const className = Math.random() > .5 ? BG_RED : CIRCLE;

    el.classList.toggle(className);
});

el.addEventListener('contextmenu', (ev) => {
    console.log(el.className);
    output(ev.pointerType);
    ev.preventDefault();
    
    el.classList.remove(BG_RED, CIRCLE);
});

el.classList.add('square');

el.addEventListener('mouseenter', () => {
    const tableLog = [
        {
            class : BG_RED, 
            contains : el.classList.contains(BG_RED)
        },
        {
            class : CIRCLE, 
            contains : el.classList.contains(CIRCLE)
        }
    ];
    console.clear();
    console.table(tableLog);
});

const elAttr = document.querySelector('.attr1');

elAttr.addEventListener('click', () => {
    let r = elAttr.getAttribute('radiusper');
    r++;
    elAttr.setAttribute('radiusper', r);
    elAttr.style.borderRadius = `${ r }%`;
    console.log(r);
});


elAttr.addEventListener('contextmenu', (ev) => {
    ev.preventDefault();
    let h = elAttr.dataset.superpupercolor;
    h++;
    elAttr.dataset.superpupercolor = h % 361;

    const color = `hsl(${ h }, 100%, 50%)`;
    elAttr.style.backgroundColor = color;
});

function info(ev){
    console.log(ev);
    output(`EVENT: ${ ev.type }`);
}

document.body.addEventListener('click', info);
document.body.addEventListener('contextmenu', info);