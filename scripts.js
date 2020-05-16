
let playing = false;
console.log(playing);

function playVideo() {
    if (playing) {
        video.pause();
    } else {
        video.play();
    }
    playing =! playing;
    console.log(playing);
}

const video = document.querySelector('video');
const playButton = document.querySelector('.player__button');
playButton.addEventListener('click', playVideo);