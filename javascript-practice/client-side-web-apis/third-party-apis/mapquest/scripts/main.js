const audioCtx = new AudioContext();
// ...
const audioElement = document.querySelector("audio");
// ...
const audioSource = audioCtx.createMediaElementSource(audioElement);
// etc.

const map = L.mapquest.map("map", {
    center: [53.480759, -2.242631],
    layers: L.mapquest.tileLayer("map"),
    zoom: 12,
});