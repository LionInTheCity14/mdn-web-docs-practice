// const output = document.querySelector("#output");

// function handleClick(evt){
//     output.textContent += `You clicked on a ${evt.currentTarget.tagName} element\n`;
//     console.log(evt.currentTarget);
// }

// const container = document.querySelector("#container");
// const btn = document.querySelector("button");

// // document.body.addEventListener("click", handleClick);
// container.addEventListener("click", handleClick);
// // btn.addEventListener("click", handleClick);

const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));

video.addEventListener("click", () => video.play());

box.addEventListener("click", () => box.classList.add("hidden"));
