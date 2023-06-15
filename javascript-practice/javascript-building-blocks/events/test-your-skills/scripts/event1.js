const btn = document.querySelector('.off');
const preview = document.querySelector(".preview");

btn.addEventListener("click", () => {
  const text = btn.textContent;
  if(text === "Machine is off")
    btn.textContent = "Machine is on";
  else
    btn.textContent = "Machine is off";
})