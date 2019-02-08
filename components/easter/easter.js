class Keylogger {
  constructor () {
    this.keys = '';
    this.img = document.querySelector('.easter');
    this.onScreen = { bottom: -285, onComplete: () => this.fadeInComplete() };
    this.offScreen = { bottom: -500 };
    document.addEventListener('keypress', (e) => this.keypress(e));
  }

  keypress (event) {
    this.keys += event.key;

    if (this.keys.includes('peepingadam')) {
      this.keys = ''; TweenLite.to(this.img, 1, this.onScreen);
    }
  }

  fadeInComplete () {
    this.img.classList.add('shake');
    setTimeout(() => this.fadeOut(), 5000);
  }

  fadeOut () {
    TweenLite.to(this.img, 1, this.offScreen);
    this.img.classList.remove('shake');
  }
}

new Keylogger();
