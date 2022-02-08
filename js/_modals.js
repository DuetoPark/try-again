const ModalName = Object.freeze({
  cart: 'add-to-cart-modal',
  toast: 'toast',
  sidebar: 'sidebar',
  orderForm: 'order-form-modal',
  myMenu: 'my-menu',
  searchHistory: 'search-history',
});

let openModal = new Set();
let modalFlag = null;

const searchHistory = document.querySelector('.search-history');
searchHistory.addEventListener('mouseover', () => {
  modalFlag = false;
});
searchHistory.addEventListener('mouseout', () => {
  modalFlag = true;
});

export default class Modal {
  constructor() {
    this.trigger = document.querySelectorAll('[data-modal]');
    this.trigger.forEach((trigger) => {
      const modalName = trigger.dataset.modal;

      if (modalName === ModalName.myMenu) {
        trigger.addEventListener('blur', this.onClose);
      }

      if (modalName === ModalName.searchHistory) {
        trigger.addEventListener('blur', () => {
          if (!modalFlag) return;
          this.onClose();
        });
      }

      trigger.addEventListener('click', this.onOpen);
    });

    this.closeBtn = document.querySelectorAll('.close-button');
    this.closeBtn.forEach((button) => {
      button.addEventListener('click', this.onClose);
    });

    this.overlay = document.querySelector('.overlay');
    this.overlay.addEventListener('click', this.onClose);
  }

  open(modal) {
    modal.classList.add('is-active');
  }

  close(modal) {
    modal.classList.remove('is-active');
  }

  saveOpenModal(modal) {
    openModal.add(modal);
  }

  clearSetObject() {
    openModal.clear();
  }

  onOpen = (event) => {
    const target = event.currentTarget;
    const modalName = target.dataset.modal;

    const modal = document.querySelector(`.${modalName}`);

    this.open(modal);
    this.saveOpenModal(modal);

    if (
      modalName === ModalName.sidebar ||
      modalName === ModalName.orderForm ||
      modalName === ModalName.cart ||
      modalName === ModalName.toast
    ) {
      this.open(this.overlay);
      this.saveOpenModal(this.overlay);
    }
  };

  onClose = () => {
    openModal.forEach((modal) => this.close(modal));
    this.clearSetObject();
  };
}
