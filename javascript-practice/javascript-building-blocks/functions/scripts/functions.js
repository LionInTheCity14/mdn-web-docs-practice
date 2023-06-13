let num = (Math.random() * 10);
console.log(num);
num = Math.round(num);
console.log(num);

// function declaration and optional parameter example
// they are hoisted, means that they can be called (or initalized) before function is actually declared.
hello("Ankush");
hello();

function hello(value = "Varun"){
  console.log(`Hello ${value}`);
}

// Anonymous function 
// they are not hoisted, means that they can't be called (or initalized) before function is actually declared.
// Usually these are used as function parameter of another function.

// document.addEventListener("keydown", function(eve){
//   console.log(`You pressed "${eve.key}".`)
// });

// Arrow functions and they are also not hoisted

const btn = document.querySelector("button");
// const para = document.createElement("p");
btn.addEventListener("click", () => {
const value = prompt("What's your name");
alert(`Hello ${value}`);
});

// Omiting the braces
const original = [1, 2, 3, 4];
const doubled = original.map(item => 2*item);
console.log(doubled);

btn.addEventListener("mouseover", eve => console.log(`${eve} You hover the mouse`));

// Arrow function live example
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", eve => output.textContent = `You pressed "${eve.key}"`);