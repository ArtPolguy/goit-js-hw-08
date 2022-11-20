import Player from '@vimeo/player';

const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);

player.on('timeupdate', setCurrentTime);

function setCurrentTime(evt) {
  //   console.log(evt.seconds);
  localStorage.setItem('videoplayer-current-time', evt.seconds);
  //   console.log(localStorage);
}

const getCurrentTime = localStorage.getItem('videoplayer-current-time');
console.log(getCurrentTime);

player.setCurrentTime(getCurrentTime);

console.log(player.setCurrentTime);
