let keys = '';

document.addEventListener('keypress', handleKeypress);

const adamImg = document.querySelector('.easter');
const offScreen = { bottom: -500 };
const moveTo = { bottom: -285, onComplete: () => {
  adamImg.style.animation = 'shake 0.5s';
  adamImg.style.animationIterationCount = 'infinite';
  setTimeout(() => {
    TweenLite.to(adamImg, 1, offScreen);
    adamImg.style.animation = 'unset';
  }, 5000);
}};

function handleKeypress (event) {
  keys += event.key;

  if (keys.includes('adamiswatching')) {
    keys = '';
    TweenLite.to(adamImg, 1, moveTo);
  }
}
