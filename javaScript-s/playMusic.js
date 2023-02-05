import { audio } from './arrays.js';
import { button } from './constants.js';

export function playMusic() {
  if (audio.paused === true) {
    audio.play();
    button.classList.add('pause');
  } else {
    audio.pause();
    button.classList.remove('pause');
  }
}
button.addEventListener('click', playMusic);
