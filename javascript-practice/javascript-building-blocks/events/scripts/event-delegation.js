const container = document.querySelector("#container");

function random(num){
  return Math.floor(Math.random() * (num + 1));
}

function bgChange(){
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return rndCol;
}

container.addEventListener("click", (evt) => {
  evt.target.style.backgroundColor = bgChange();
});