const audioCtx = new AudioContext();
// ...
const audioElement = document.querySelector("audio");
// ...
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.