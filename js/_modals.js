const overlay = document.querySelector('.overlay');
let isOpened = new Set();
let triggers = [];
let closeTriggers = [];
const idArr = [
  'sidebar',
  'order-form-modal',
  'add-to-cart-modal',
  'search-modal',
  'search-history',
  'my-menu',
  'toast',
];

function triggerBtns(id) {
  return document.querySelectorAll(`button[data-id="${id}"]`);
}

function triggerInputs(id) {
  return document.querySelectorAll(`input[data-id="${id}"]`);
}

function onClose() {
  overlay.classList.remove('is-active');

  isOpened.forEach((modal) => modal.classList.remove('is-active'));
  isOpened.clear();
}

function onOpen(event, id) {
  const modal = document.querySelector(`.${id}[data-id="${id}"]`);
  modal.classList.add('is-active');
  isOpened.add(modal);

  if (event.type === 'click') {
    overlay.classList.add('is-active');
  }
}

window.addEventListener('load', () => {
  const closeBtns = document.querySelectorAll('button.close-button');

  idArr.forEach((id) => {
    triggers = [...triggers, ...triggerBtns(id), ...triggerInputs(id)];
  });

  triggers.forEach((trigger) => {
    const id = trigger.dataset.id;
    const except = trigger.classList.value.includes('close');
    if (except) return;

    if (id === 'search-history' || id === 'my-menu') {
      trigger.addEventListener('focus', (e) => onOpen(e, id));
      trigger.addEventListener('blur', onClose);
    } else {
      trigger.addEventListener('click', (e) => onOpen(e, id));
    }
  });

  closeTriggers = [...closeBtns, overlay];
  closeTriggers.forEach((btn) => btn.addEventListener('click', onClose));
});
