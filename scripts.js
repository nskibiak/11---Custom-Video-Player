
let playing = false;
console.log(playing);

function playVideo() {
    console.log(this);
    if (playing) {
        video.pause();
        this.innerHTML = "►";
    } else {
        video.play();
        this.innerHTML = "&#9616;&#9616;";
    }
    playing =! playing;
    console.log(playing);
}

const video = document.querySelector('video');
const playButton = document.querySelector('.player__button');
playButton.addEventListener('click', playVideo);