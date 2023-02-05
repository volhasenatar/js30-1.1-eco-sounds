import { active } from './javaScript-s/constants.js';
import { changeActiveLinks } from './javaScript-s/changeActiveLinks.js';
import { changeIndex } from './javaScript-s/changeIndex.js';
import { audio, playlist } from './javaScript-s/arrays.js';

active.forEach(function (element, index) {
  if (element.classList.contains('active')) {
    audio.src = playlist[0];
    audio.play();
  }
  element.onclick = () => {
    changeIndex(index);
    changeActiveLinks(element);
  };
});
