// let playing = false;

function playVideo() {
  if (video.paused) {
    video.play();
    this.innerHTML = '&#9616;&#9616;';
    progressing = setInterval(updateProgressDisplay, 250);
} else {
    video.pause();
    this.innerHTML = '►';
    clearInterval(progressing);
  }
  // playing = !playing;
}

// function playVideo() {
//   if (playing) {
//     video.pause();
//     this.innerHTML = '►';
//     clearInterval(progressing);
//   } else {
//     video.play();
//     this.innerHTML = '&#9616;&#9616;';
//     progressing = setInterval(updateProgressDisplay, 250);
//   }
//   playing = !playing;
// }

function updateProgressDisplay() {
  let progress = (video.currentTime / video.duration) * 100;
  progressDisplay.style = `flex-basis: ${progress}%`;
}

function slideControls(e) {
  video[e.target.name] = e.target.value;
  console.log(video[e.target.name]);
}

function skipBackOrForth(e) {
  if (e.target.dataset.skip) {
    video.currentTime += parseInt(e.target.dataset.skip);
  }
}

let isJumping = false;

function startJumpingToPoint(e) {
  isJumping = true;
  jumpingToPoint(e);
}

function jumpingToPoint(e) {
  if (isJumping) {
    lengthOfMovie = progressBar.getBoundingClientRect().width;
    startOfMovie = progressBar.getBoundingClientRect().x;
    jumpPoint = e.screenX;
    percentOfMovie = (jumpPoint - startOfMovie) / lengthOfMovie;
    video.currentTime = video.duration * percentOfMovie;
  }
  updateProgressDisplay();
}

function finishJumpingToPoint(e) {
  isJumping = false;
  console.log(isJumping);
}

const video = document.querySelector('video');
const playButton = document.querySelector('.player__button');
const progressBar = document.querySelector('.progress');
const progressDisplay = document.querySelector('.progress__filled');
const skipButtons = document.querySelectorAll('.player__button');
const sliders = document.querySelectorAll('.player__slider');

progressBar.addEventListener('mousedown', startJumpingToPoint);
progressBar.addEventListener('mousemove', jumpingToPoint);
progressBar.addEventListener('mouseup', finishJumpingToPoint);

playButton.addEventListener('click', playVideo);
skipButtons.forEach((button) => addEventListener('click', skipBackOrForth));
sliders.forEach((slider) => addEventListener('input', slideControls));

// const volumeControl = document.querySelector("div.player__controls input[name='volume']");
// const speedControl = document.querySelector("div.player__controls input[name='playbackRate']");

// volumeControl.addEventListener('input', adjustVolume);
// speedControl.addEventListener('input', adjustSpeed);

// function adjustVolume() {
//     video.volume = volumeControl.value;
// }

// function adjustSpeed() {
//     video.playbackRate = speedControl.value;
// }
