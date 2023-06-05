let randomNumber = Math.floor(Math.random() * 100) + 1;

// form fields

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

// result paragraphs

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

let guessCount = 1;
let resetButton;

const checkGuess = () => {
const userGuess = Number(guessField.value);
if(guessCount === 1){
    guesses.textContent = "Previous guesses: ";
}
guesses.textContent += `${userGuess} `;

if(userGuess === randomNumber){
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    setGameOver();
}else if(guessCount === 10){
    lastResult.textContent = "!!!GAME OVER!!!";
    lastResult.style.backgroundColor = "red";
    lowOrHi.textContent = "";
    setGameOver();
}else{
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if(userGuess < randomNumber){
        lowOrHi.textContent = "Last guess was too low!";
    }else{
        lowOrHi.textContent = "Last guess was too high!"
    }
}

guessCount += 1;
guessField.value = "";
guessField.focus();

}

const setGameOver = () =>{
    guessField.disabled = true;
    guessSubmit.disables = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new Game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

const resetGame = ()=> {
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");

    for(const resetPara of resetParas){
        resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "rgb(0 0 0)";

    randomNumber = Math.floor(Math.random * 100) + 1;
}

guessSubmit.addEventListener("click", checkGuess);
