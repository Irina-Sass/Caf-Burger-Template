export class Form {
  constructor(form, callback) {
    this.form = form;
    this.callback = callback;

    this._setEventListenersSubmit();
  }

  _setEventListenersSubmit() {
    this.form.addEventListener('submit', (event) => {
      if (this.form.checkValidity) {
        event.preventDefault();
        this.callback(this.form);
      }
    });
  }
}
