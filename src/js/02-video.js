import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);

player.on('timeupdate', throttle(setCurrentTime, 1000));

function setCurrentTime(evt) {
  localStorage.setItem('videoplayer-current-time', evt.seconds);
  // console.log(localStorage);
}

const getCurrentTime = localStorage.getItem('videoplayer-current-time');
// console.log(getCurrentTime);

player.setCurrentTime(getCurrentTime);
