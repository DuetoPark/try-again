const ITEM_COUNT_LIMIT = 5;

const State = Object.freeze({
  close: 'close',
  open: 'open',
});

const ModalName = Object.freeze({
  cart: 'add-to-cart-modal',
  toast: 'toast',
  sidebar: 'sidebar',
  orderForm: 'order-form-modal',
  myMenu: 'my-menu',
  searchHistory: 'search-history',
});

import { Modal, openModal } from './_modals.js';
import Drawer from './_drawers.js';
import Scroll from './_scroll.js';
import History from './_search-history.js';

const overlay = document.querySelector('.overlay');
const modal = new Modal()
  .addTrigger('toast')
  .addTrigger('my-menu')
  .addTrigger('sidebar')
  .addTrigger('search-modal')
  .addTrigger('search-history')
  .addTrigger('order-form-modal')
  .addTrigger('add-to-cart-modal')
  .setClickEvent();

modal.setOpenListener((name) => {
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
modal.setBlurListener((name) => {
  const trigger = document.querySelector(`[data-modal=${name}]`);
  let modalState = null;

  if (name === ModalName.myMenu) {
    trigger.addEventListener('blur', modal.close);
  }

  if (name === ModalName.searchHistory) {
    const searchHistory = document.querySelector(`.${name}`);
    searchHistory.addEventListener('mouseover', () => {
      modalState = State.open;
    });

    searchHistory.addEventListener('mouseout', () => {
      modalState = State.close;
    });

    trigger.addEventListener('blur', () => {
      if (modalState === State.open) return;
      modal.close();
    });
  }
});

overlay.addEventListener('click', modal.close);

const sidebarMenu = new Drawer('sidebar-nav');
const productInquiry = new Drawer('product-inquiry');
const productShipment = new Drawer('product-shipment');

const pageNavigation = new Scroll('product-tab-list');
pageNavigation.setClickListenr((selectedTab) => {
  const tabItems = pageNavigation.tabItems;

  for (let item of tabItems) {
    item.classList.remove('is-active');
  }

  selectedTab.classList.add('is-active');
});

const gnbSearch = new History('gnb-search', ITEM_COUNT_LIMIT);
gnbSearch.count || gnbSearch.showPlaceHolder();

const searchModal = new History('search-modal', ITEM_COUNT_LIMIT);
searchModal.count || searchModal.showPlaceHolder();
