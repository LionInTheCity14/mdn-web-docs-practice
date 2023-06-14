const btn = document.querySelector("button");
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output")

function random(num){
    return Math.floor(Math.random() * (num + 1));
}

function bgChange(evt){
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    evt.target.style.backgroundColor = rndCol;
    console.log(evt);
}

btn.addEventListener("click", bgChange);

textBox.addEventListener("keydown", (evt) => {
    output.textContent = `You pressed "${evt.key}"`;
    console.log(evt);
})