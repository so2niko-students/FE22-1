//РАЗМЕРЫ ЭКРАНА
export const SIZES = {};

resizeListener();

function resizeListener(){
    SIZES.width = window.innerWidth;
    SIZES.height = window.innerHeight;
    console.log(SIZES);
}

window.addEventListener("resize", resizeListener);

