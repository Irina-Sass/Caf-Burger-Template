export class Scroll {
  constructor(elements) {
    this.elements = elements;

    this._addEventListeners();
  }

  // метод возвращает элемент до которго нужно переместиться
  _getTarget(elem) {
    const id = elem.getAttribute('href');
    if (id && id.length > 1) {
      return document.querySelector(id);
    }
  }

  // метод плавно скролит до указанного элемента
  _moveSmoothly(target) {
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  _addEventListeners() {
    this.elements.forEach((elem) => {
      elem.addEventListener('click', (event) => {
        event.preventDefault();
        this._moveSmoothly(this._getTarget(elem));
      });
    });
  }
}
