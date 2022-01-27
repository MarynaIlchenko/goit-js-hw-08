import Vimeo from '@vimeo/player'
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {

}
player.on('timeupdate', onPlay);
localStorage.setItem('videoplayer-current-time', JSON.stringify({}));
const savedTime = localStorage.getItem('videoplayer-current-time');
const parsedTime = JSON.parse(savedTime);
console.log(parsedTime);