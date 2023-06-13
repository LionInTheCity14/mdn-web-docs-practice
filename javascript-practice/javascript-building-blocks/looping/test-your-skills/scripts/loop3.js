let i = 500;
const para = document.createElement('p');

function isPrime(num) {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }

  return true;
}

for(let j = 2; j <= i; j++){
  if(j < i && isPrime(j))
  para.textContent += `${j}, `
  else if((j === i || j === i - 1) && isPrime(j))
  para.textContent += `and ${j}.`;
  else
  continue;
}

const section = document.querySelector('section');
section.appendChild(para);