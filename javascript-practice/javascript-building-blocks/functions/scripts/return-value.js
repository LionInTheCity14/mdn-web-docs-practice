const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

function squared(num){
  return num**2;
}

function cubed(num){
  return num**3;
}

function factorial(num){
  if(num < 0) return undefined;
  if(num === 0) return 1;
  let x = num - 1;
  while(x > 1){
    num *= x;
    x--;
  }
  return num;
}

function squareRoot(num){
  return num ** (1/2);
}

function cubeRoot(num){
  return num ** (1/3);
}

function circumferenceOfCircle(radius){
  return 2 * Math.PI * radius;
}

input.addEventListener("change", ()=>{
  const num = parseFloat(input.value);
  // const num = parseInt(input.value);
  // const num = input.value;
  console.log(num);
  if(isNaN(num)){
    // console.log(isNaN(num));
    para.textContent = "You need to enter a number!";
  }else
    para.textContent = `${num} squared is ${squared(num)} \n`;
    para.textContent += `${num} cubed is ${cubed(num)} \n`;
    para.textContent += `${num} factorial is ${factorial(num)}.`;
  }
);