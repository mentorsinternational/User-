const learnBtn = document.querySelector('.cta > button');

const x = document.createElement('audio');
x.setAttribute('src', '../../assets/sad-violin.mp3');

learnBtn.addEventListener('click', () => {
  if (x.currentTime > 0) {
    x.pause();
    x.currentTime = 0;
  } else {
    x.play();
  }
})
