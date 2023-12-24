let rgball = document.querySelector("#ball");
let xvel, yvel = 1;
let x,y;
let width, height;

function resize() {
    let resize = window.addEventListener(resize);
    if (resize) {
        width = window.innerWidth;
        height = window.innerHeight
}}

function bouncing() {
    x += xvel; y += yvel;
    if (x <= 0 || x + rgball.width >= window.innerWidth) {xvel *= -1}
    if (y <= 0 || y + rgball.height >= window.innerHeight) {yvel *= -1;}
}

function main() {
    resize();
    bouncing();
    window.requestAnimationFrame();
}