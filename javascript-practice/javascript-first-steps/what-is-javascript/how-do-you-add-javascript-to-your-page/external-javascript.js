document.addEventListener("DOMContentLoaded", () =>{
  function createParagraph(){
    const paraEl = document.createElement("p");
    paraEl.textContent = "You clicked the button!";
    document.body.appendChild(paraEl);
  }
  const buttons = document.querySelectorAll("button");
  for(const button of buttons){
    button.addEventListener("click", createParagraph);
  }
});