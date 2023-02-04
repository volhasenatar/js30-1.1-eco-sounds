import { active } from './constants.js';
import { changeActiveLinks } from './changeActiveLinks.js';
import { changeIndex } from './changeIndex.js';

active.forEach(function (element, index) {
  element.onclick = () => {
    changeIndex(index);
    changeActiveLinks(element);
  };
});
