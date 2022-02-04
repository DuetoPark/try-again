import { Modal, openModal } from './_modals.js';
import Drawer from './_drawers.js';
import Scroll from './_scroll.js';
import History from './_search-history.js';

const ModalName = Object.freeze({
  cart: 'add-to-cart-modal',
  toast: 'toast',
  sidebar: 'sidebar',
  orderForm: 'order-form-modal',
});

const overlay = document.querySelector('.overlay');
const modal = new Modal()
  .addTrigger('toast')
  .addTrigger('my-menu')
  .addTrigger('sidebar')
  .addTrigger('search-modal')
  .addTrigger('search-history')
  .addTrigger('order-form-modal')
  .addTrigger('add-to-cart-modal')
  .setClickListener();

modal.setCallBack((name) => {
  if (
    name === ModalName.sidebar ||
    name === ModalName.orderForm ||
    name === ModalName.cart ||
    name === ModalName.toast
  ) {
    overlay.classList.add('is-active');
    openModal.add(overlay);
  }
});

overlay.addEventListener('click', modal.close);

const drawer = new Drawer();

const pageNavigation = new Scroll('product-tab-list');
pageNavigation.setCallBack((tab) => {
  const tabItems = pageNavigation.tabItems;

  for (let item of tabItems) {
    item.classList.remove('is-active');
  }

  tab.classList.add('is-active');
});

const gnbSearh = new History('gnb-search');
const searchModal = new History('search-modal');
