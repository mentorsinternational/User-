class Tabs {
  constructor (element) {
    this.element = element;
    this.tabs = this.element.querySelector('.tabs').children;
    this.items = this.element.querySelector('.items').children;
    this.tabs[0].classList.add('selected');
    this.items[0].classList.add('selected');
    this.index = 0;
    this.init();
  }

  init () {
    this.tabs = [...this.tabs].map((tab, i) => new Tab(tab, i));
    this.items = [...this.items].map(item => new Item(item));
    this.tabs.forEach(tab => {
      tab.element.addEventListener('click', () => this.switch(tab));
    })
  }

  switch (tab) {
    const { index } = tab;

    [this.tabs, this.items].forEach(elem => {
      elem[this.index].deselect();
      elem[index].select();
    });

    this.index = index;
  }
}

class Tab {
  constructor (element, index) {
    this.element = element;
    this.index = index;
  }

  select () {
    this.element.classList.add('selected');
  }

  deselect () {
    this.element.classList.remove('selected');
  }
}

class Item {
  constructor (element) {
    this.element = element;
  }

  select () {
    TweenLite.to(this.element, 0.3, {delay: 0.3, opacity: 1, display: 'block'});
  }

  deselect () {
    TweenLite.to(this.element, 0.3, {opacity: 0, display: 'none'});
  }
}

new Tabs(document.querySelector('.testimonials'));
