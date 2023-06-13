const btn = document.querySelector("button");

function random(number){
    return Math.floor(Math.random() * number + 1);
}
function bgChange(e){
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    e.target.style.backgroundColor = rndCol;
    console.log(e);
}

btn.addEventListener("click", bgChange);
document.addEventListener("click", bgChange);

const textBox = document.querySelector("#textBox");
// const output = document.querySelector("#output");
const divEl = document.createElement("div");
// divEl.createAttribute("id", "output");
divEl.setAttribute("id", "output");
// const output = document.querySelector("#output");

textBox.addEventListener("keydown", (evt) => {
    divEl.textContent = `You pressed "${evt.key}".`;
    document.body.appendChild(divEl);
});