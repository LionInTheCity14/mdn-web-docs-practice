let finalResult;

let evenOddResult;

// Add your code here
let val1 = 10;
let val2 = 20;
let val3 = 30;
let val4 = 40;

let sum = val1 + val2;
let sub = val3 - val4;

finalResult = sum * sub;

evenOddResult = finalResult % 2;

// Don't edit the code below here!

const section = document.querySelector('section');

const para1 = document.createElement('p');
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
const para2 = document.createElement('p');
const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);