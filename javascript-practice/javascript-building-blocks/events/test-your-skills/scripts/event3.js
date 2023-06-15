
const buttonBar = document.querySelector('.button-bar');

buttonBar.addEventListener("click", (evt) => {
  const dataColor = evt.target.textContent.toLowerCase();
  // console.log(dataColor);
  evt.currentTarget.style.backgroundColor = dataColor;
})
