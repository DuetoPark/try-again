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
    const newTrigger = document.querySelectorAll(
      `:not(.close-button)[data-modal=${name}]`
    );

    this.trigger = [...this.trigger, ...newTrigger];

    return this;
  }

  setClickListener = () => {
    this.trigger.forEach((trigger) => {
      trigger.addEventListener('click', this.open);
    });

    return this;
  };

  setCallBack(callback) {
    this.callback = callback;
  }

  open = (event) => {
    const target = event.currentTarget;
    const name = target.dataset.modal;
    const modal = document.querySelector(`.${name}`);

    modal.classList.add('is-active');

    this.saveOpenModal(modal);
    this.callback && this.callback(name);
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
