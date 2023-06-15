const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function drawCircle(x, y, size) {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

document.addEventListener("keydown", (evt) => {
  console.log(evt.key);
  const key = evt.key;
  switch(key){
    case "w":
      y -= 5;
      drawCircle(x,y, size);
    break;
    case "s":
      y += 5;
      drawCircle(x,y, size);
    break;
    case "a":
      x -= 5;
      drawCircle(x,y, size);
    break;
    case "d":
      x += 5;
      drawCircle(x,y, size);
    break;
  }
})