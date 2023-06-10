let season = 'winter';
let response;

if(season === "summer"){
  response = "Turn on the AC";
}else if(season === "winter"){
  response = "Take a tea break";
}
else{
  response = "We don't know what season it is."
}

const section = document.querySelector('section');

let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);