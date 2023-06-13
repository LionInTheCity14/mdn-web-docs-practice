const x = 1;

function a() {
  const y = 2;
  output(y);
}

function b() {
  const z = 3;
  output(z);
}

function output(value) {
  const para = document.createElement('p'); 
  para.textContent = `Value: ${value}`;
  document.body.appendChild(para);
}

// function d(){
//   const y = 2;
//   output(y);
// }

// function e(){
//   const z = 3;
//   output(z);
// }