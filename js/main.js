import { Modal, openModal } from './_modals.js';
import Drawer from './_drawers.js';
import Scroll from './_scroll.js';
import History from './_search-history.js';

const ITEM_COUNT_LIMIT = 5;

let gnbHistoryState = null;

const State = Object.freeze({
  close: 'close',
  open: 'open',
});

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
overlay.addEventListener('click', modal.close);

const drawer = new Drawer();

const pageNavigation = new Scroll('product-tab-list');
pageNavigation.setClickListenr((selectedTab) => {
  const tabItems = pageNavigation.tabItems;

  for (let item of tabItems) {
    item.classList.remove('is-active');
  }

  selectedTab.classList.add('is-active');
});

const gnbSearch = new History('gnb-search', ITEM_COUNT_LIMIT);
gnbSearch.section.addEventListener('mouseover', () => {
  gnbHistoryState = State.open;
});
gnbSearch.section.addEventListener('mouseout', () => {
  gnbHistoryState = State.close;
});
gnbSearch.input.addEventListener('blur', () => {
  if (gnbHistoryState === State.open) return;
  modal.close();
});
gnbSearch.count || gnbSearch.showPlaceHolder();

const searchModal = new History('search-modal', ITEM_COUNT_LIMIT);
searchModal.count || searchModal.showPlaceHolder();
