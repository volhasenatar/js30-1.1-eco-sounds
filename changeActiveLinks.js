import { active } from './constants.js';

export function changeActiveLinks(element) {
  active.forEach((element) => {
    element.classList.remove('active');
  });
  element.classList.add('active');
}
