let playing = false;

function playVideo() {
    if (playing) {
        video.pause();
        this.innerHTML = "►";
        clearInterval(progressing);
    } else {
        video.play();
        this.innerHTML = "&#9616;&#9616;";
        progressing = setInterval(updateProgressBar, 250);
    }
    playing =! playing;
}

function updateProgressBar() {
    let progress = ( video.currentTime / video.duration ) * 100;
    progressBar.style = `flex-basis: ${progress}%`;
}

function adjustVolume() {
    video.volume = volumeControl.value;
    console.log(video.volume);
}

const video = document.querySelector('video');
const playButton = document.querySelector('.player__button');
playButton.addEventListener('click', playVideo);
const progressBar = document.querySelector('.progress__filled');
const volumeControl = document.querySelector("div.player__controls input[name='volume']");
volumeControl.addEventListener('change', adjustVolume);