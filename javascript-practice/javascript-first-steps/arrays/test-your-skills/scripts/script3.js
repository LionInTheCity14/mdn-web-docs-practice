let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

// Add your code here
myArray.pop();
myArray.push("varun", "sahil");
for(let i = 0; i < myArray.length; i++){
  myArray[i] = `${myArray[i]}(${i})`;
}
const myString = myArray.join("-");

// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);