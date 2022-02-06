export let openModal = new Set();

export class Modal {
  constructor() {
    this.trigger = [];
    this.closeBtn = document.querySelectorAll('.close-button');
    this.closeBtn.forEach((button) => {
      button.addEventListener('click', this.close);
    });
  }

  addTrigger(name) {
    const newTrigger = document.querySelectorAll(`[data-modal=${name}]`);

    this.trigger = [...this.trigger, ...newTrigger];

    return this;
  }

  setClickEvent = () => {
    this.trigger.forEach((trigger) => {
      trigger.addEventListener('click', this.open);
    });
    return this;
  };

  setBlurListener(blurListener) {
    this.blurListener = blurListener;
  }

  setOpenListener(openListener) {
    this.openListener = openListener;
  }

  open = (event) => {
    const target = event.currentTarget;
    const name = target.dataset.modal;
    const modal = document.querySelector(`.${name}`);

    modal.classList.add('is-active');

    this.saveOpenModal(modal);
    this.openListener && this.openListener(name);

    if (name === 'my-menu') {
      this.blurListener && this.blurListener('my-menu');
    }

    if (name === 'search-history') {
      this.blurListener && this.blurListener('search-history');
    }
  };

  saveOpenModal(modal) {
    openModal.add(modal);
  }

  close = () => {
    openModal.forEach((modal) => {
      modal.classList.remove('is-active');
    });

    this.clearSetObject();
  };

  clearSetObject() {
    openModal.clear();
  }
}
