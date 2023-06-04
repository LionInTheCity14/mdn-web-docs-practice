const paraEl = document.querySelector("p");

paraEl.addEventListener("click", () => {
  const name = prompt("Enter a new name");
  paraEl.textContent = `Player 1: ${name}`;
})