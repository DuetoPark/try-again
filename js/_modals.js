// NOTE: Modal
class Modal {
  constructor(target, trigger, closeButton) {
    this.modal = document.querySelector(target);
    this.overlay = document.querySelector('.overlay');
    this.trigger = document.querySelector(trigger) || null;
    this.triggers = document.querySelectorAll(trigger) || null;
    this.closeButton = this.modal.querySelector(closeButton) || null;
    this.closeButtons = this.modal.querySelectorAll(closeButton) || null;
  }

  active() {
    this.modal.classList.add('is-active');
    this.overlay.classList.add('is-active');
  }

  inactive() {
    this.modal.classList.remove('is-active');
    this.overlay.classList.remove('is-active');
  }

  addEvent() {
    this.trigger?.addEventListener('click', this.active.bind(this));
    this.triggers?.forEach((trigger) => {
      trigger.addEventListener('click', this.active.bind(this));
    });

    this.overlay.addEventListener('click', this.inactive.bind(this));
    this.closeButton?.addEventListener('click', this.inactive.bind(this));
    this.closeButtons?.forEach((button) =>
      button.addEventListener('click', this.inactive.bind(this))
    );
  }
}

const sidebar = new Modal('.sidebar', '.gnb-icon-button.is-menu');
sidebar.addEvent();

const orderFormModal = new Modal('.order-form-modal', '.order-button');
orderFormModal.addEvent();

const addToCartModal = new Modal(
  '.add-to-cart-modal',
  '.cart-button',
  '.delete-button'
);
addToCartModal.addEvent();

const searchModal = new Modal(
  '.search-modal',
  '.gnb-icon-button.is-search',
  '.close-button'
);
searchModal.addEvent();

// NOTE: Toast
class Toast extends Modal {
  active() {
    this.modal.classList.add('is-active');
  }

  inactive() {
    this.modal.classList.remove('is-active');
  }

  addEvent() {
    this.trigger?.addEventListener('click', this.active.bind(this));
    this.triggers?.forEach((trigger) => {
      trigger.addEventListener('click', this.active.bind(this));
    });

    this.closeButton?.addEventListener('click', this.inactive.bind(this));
    this.closeButtons?.forEach((button) =>
      button.addEventListener('click', this.inactive.bind(this))
    );
  }
}

const toast = new Toast('.toast', '.bookmark-button', '.delete-button');
toast.addEvent();

// NOTE: NoOverlayModal
class NoOverlayModal extends Modal {
  active() {
    this.modal.classList.add('is-active');
  }

  inactive() {
    this.modal.classList.remove('is-active');
  }

  addEvent() {
    this.trigger.addEventListener('focus', this.active.bind(this));
    this.trigger.addEventListener('blur', this.inactive.bind(this));
  }
}

const gnbSearchHistory = new NoOverlayModal(
  '.gnb-search .search-history',
  '.gnb-search .form-input'
);
gnbSearchHistory.addEvent();

const gnbMyMenu = new NoOverlayModal('.my-menu', '.my-menu-button');
gnbMyMenu.addEvent();
