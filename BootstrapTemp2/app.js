var video = document.querySelector('.video');
var btn = document.querySelector('.play')

function myFunction() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}