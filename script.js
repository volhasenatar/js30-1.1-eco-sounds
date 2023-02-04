const button = document.querySelector('button');
const main = document.querySelector('.main');
const active = document.querySelectorAll('li');

const imageArray = [
  'url(img/forest.jpg)',
  'url(img/solovey.jpg)',
  'url(img/zarynka.jpg)',
  'url(img/javoronok.jpg)',
  'url(img/slavka.jpg)',
  'url(img/drozd.jpg)',
];

const audio = new Audio();
const playlist = new Array(
  'audio/forest.mp3',
  'audio/solovey.mp3',
  'audio/zarynka.mp3',
  'audio/javoronok.mp3',
  'audio/slavka.mp3',
  'audio/drozd.mp3'
);

function playMusic() {
  if (audio.paused === true) {
    audio.play();
    button.classList.add('pause');
  } else {
    audio.pause();
    button.classList.remove('pause');
  }
}

function changeIndex(index) {
  main.style.backgroundImage = imageArray[index];
  audio.src = playlist[index];
  playMusic();
}

function changeActiveLinks(element) {
  active.forEach((element) => {
    element.classList.remove('active');
  });
  element.classList.add('active');
}
button.addEventListener('click', playMusic);

active.forEach(function (element, index) {
  element.onclick = () => {
    changeIndex(index);
    changeActiveLinks(element);
  };
});
