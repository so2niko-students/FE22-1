const canvas1 = document.querySelector('#canvas1');


const drawFlag = (element, text = '', textType = 'fill', font = '14px Arial') => {
    const ctx = element.getContext('2d');

    const grad = ctx.createLinearGradient(100, 0, 100, 100);
    grad.addColorStop(0, 'blue');
    grad.addColorStop(1, 'yellow');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 200, 100);

    ctx.moveTo(0, 0);
    ctx.lineTo(100, 50);
    ctx.lineTo(0, 100);
    
    ctx.moveTo(125, 50);
    ctx.arc(100, 50, 25, 0, 2 * Math.PI);

    ctx.font = font;
    if(textType == 'fill'){
        ctx.fillText(text, 75, 95);
    }else{
        ctx.strokeText(text, 75, 95);
    }
    
    ctx.stroke();
}

const drawRadGradient = (element, x0, y0, r0, x1, y1, r1) => {
    const ctx = element.getContext('2d');

    const grd = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "black");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 200, 100);
}

drawRadGradient(canvas1, 100, 50, 0.1, 110, 60, 40);
// drawFlag(canvas1, 'pum-pum', 'stroke', '26px Sans-Serif');
