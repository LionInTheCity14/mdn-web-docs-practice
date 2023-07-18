const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext;

const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);

// play/pause audio
playBtn.addEventListener("click", () => {
    // check if context is in suspended state (autopaly policy)
    if(audioCtx.state === "suspened")
        audioCtx.resume();

    // if track is stopped, play it
    if(playBtn.getAttribute("class") === "paused"){
        audioElement.play();
        playBtn.setAttribute("class","playing");
        playBtn.textContent = "pause";

    }else if(playBtn.getAttribute("class") === "playing") {
    // if track is playing, stop it
        audioElement.pause();
        playBtn.setAttribute("class", "paused");
        playBtn.textContent = "Play";
    }
});

// if track ends
audioElement.addEventListener("ended", () => {
    playBtn.setAttribute("class", "paused");
    playBtn.textContent = "Play";
});

// volume
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
    gainNode.gain.value = volumeSlider.value;
});

audioSource.connect(gainNode).connect(audioCtx.destination);
