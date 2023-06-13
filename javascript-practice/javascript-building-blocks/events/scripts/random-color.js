const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground(){
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

// On Click

btn.addEventListener('click', changeBackground);

// On Double Click

// btn.addEventListener('dblclick', changeBackground);

// On Focus and Blur (opposite of each other) , focus event is fired when element is in focus
// But, blur event is fired when element is unfocused

// When Focused

btn.addEventListener('focus', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

// When unFocused

btn.addEventListener('blur', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

// On mouseover and mouseout (opposite of each other)

// When mouseover

btn.addEventListener("mouseover", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

// When mouseout

// btn.addEventListener("mouseout", () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });

// Removing Event Listener using removeEventListener

btn.removeEventListener("click", changeBackground);

// Removing Event Listener using AbortSignal

const controller = new AbortController();

btn.addEventListener("mouseout",changeBackground,{
  signal: controller.signal
});

controller.abort();