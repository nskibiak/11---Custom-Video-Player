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
}

function adjustSpeed() {
    video.playbackRate = speedControl.value;
}

function adjustSpeed() {
    video.playbackRate = speedControl.value;
}

function skipAround(e) {
    if (e.target.dataset.skip) {
        video.currentTime += parseInt(e.target.dataset.skip);
    }
}

const video = document.querySelector('video');
const playButton = document.querySelector('.player__button');
const progressBar = document.querySelector('.progress__filled');
const volumeControl = document.querySelector("div.player__controls input[name='volume']");
const speedControl = document.querySelector("div.player__controls input[name='playbackRate']");
const skipButtons = document.querySelectorAll('.player__button');

playButton.addEventListener('click', playVideo);
volumeControl.addEventListener('input', adjustVolume);
speedControl.addEventListener('input', adjustSpeed);
skipButtons.forEach(button => addEventListener('click', skipAround));
