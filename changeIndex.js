import { main } from './constants.js';
import { imageArray, playlist, audio } from './arrays.js';
import { playMusic } from './playMusic.js';

export function changeIndex(index) {
  main.style.backgroundImage = imageArray[index];
  audio.src = playlist[index];
  playMusic();
}
