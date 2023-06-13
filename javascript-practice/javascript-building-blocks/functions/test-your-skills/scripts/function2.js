const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = 'blue';

function draw(){
    ctx.clearRect(0, 0, 0, 0);
    ctx.width = width;
    ctx.height = height;
    ctx.x = x;
    ctx.y = y;
}
draw();

const section = document.querySelector('section');
canvas.appendChild(ctx);