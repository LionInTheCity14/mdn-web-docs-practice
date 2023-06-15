const btn = document.querySelector("#display-button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", (evt) => box.classList.remove("hidden"));
video.addEventListener("click", (evt) => {
  evt.stopPropagation();
  video.play();
});
box.addEventListener("click", (evt) => box.classList.add("hidden"));