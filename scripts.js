let playing = false;

function playVideo() {
    if (playing) {
        video.pause();
        this.innerHTML = "►";
        clearInterval(progress);
    } else {
        video.play();
        this.innerHTML = "&#9616;&#9616;";
        progress = setInterval(updateProgress, 250);
    }
    playing =! playing;
}

function updateProgress() {
    let progress = ( video.currentTime / video.duration ) * 100;
    progressBar.style = `flex-basis: ${progress}%`;
    console.log(`${progress}%`);
}

const video = document.querySelector('video');
const playButton = document.querySelector('.player__button');
playButton.addEventListener('click', playVideo);
const progressBar = document.querySelector('.progress__filled');