const inpDate = document.querySelector('.inp-date');
const containerKeys = document.querySelector('.keys');

inpDate.addEventListener('input', () => {
    console.log(inpDate.value);
});

document.body.addEventListener('keypress', ev => {
    console.log(ev);
    const html = getHTMLElement(ev.keyCode, ev.key);
    containerKeys.insertAdjacentHTML('beforeend', html);

})

function getHTMLElement(size, text){
    return `<div style="width: ${size}px; height: ${ size }px">${ text }</div>`;
}