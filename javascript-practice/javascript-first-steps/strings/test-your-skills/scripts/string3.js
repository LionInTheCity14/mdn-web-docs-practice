const quote = 'I dO nOT lIke gREen eGgS anD HAM';

// Add your code here
let fixedQuote = `${quote[0].toUpperCase()}${quote.slice(1).toLowerCase()}`;
fixedQuote = fixedQuote.replace("green eggs and ham", "Capsicum and Ginger")
const finalQuote = `${fixedQuote}.`;
// Don't edit the code below here!

const section = document.querySelector('section');

const para1 = document.createElement('p');
para1.textContent = fixedQuote;
const para2 = document.createElement('p');
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);