const button = document.querySelector('button');
const playForest = document.querySelector('.play');
const main = document.querySelector('.main');
const active = document.querySelectorAll('li');

const imageArray = [
  'url(img/solovey.jpg)',
  'url(img/zarynka.jpg)',
  'url(img/javoronok.jpg)',
  'url(img/slavka.jpg)',
  'url(img/drozd.jpg)',
];

document.querySelector('.logo').addEventListener('click', () => {
  window.location.reload();
});

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
    audio.src = playlist[0];
    audio.play();
    audio.currentTime = 0;
  } else {
    audio.pause();
  }
}
function toggleBtn() {
  button.classList.toggle('pause');
}

playForest.addEventListener('click', playMusic);
button.addEventListener('click', toggleBtn);

//solovey
active[0].addEventListener('click', () => {
  main.style.backgroundImage = imageArray[0];
});
//zarynka
active[1].addEventListener('click', () => {
  main.style.backgroundImage = imageArray[1];
});

//javoronok
active[2].addEventListener('click', () => {
  main.style.backgroundImage = imageArray[2];
});

//slavka
active[3].addEventListener('click', () => {
  main.style.backgroundImage = imageArray[3];
});

//drozd
active[4].addEventListener('click', () => {
  main.style.backgroundImage = imageArray[4];
});

active.forEach((element) => {
  element.onclick = () => {
    active.forEach((element) => {
      element.classList.remove('active');
    });
    element.classList.add('active');
  };
});
