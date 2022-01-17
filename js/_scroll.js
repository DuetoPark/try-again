const productTab = document.querySelector('.product-tab-list');
const globalHeader = document.querySelector('.global-header');

function onScroll(id) {
  const toBeShown = document.querySelector(`.${id}#${id}`);
  const top = toBeShown.getBoundingClientRect().top;

  const globalHeaderRect = globalHeader.getBoundingClientRect();
  const globalHeaderHeight = globalHeaderRect.height;

  const productTabRect = productTab.getBoundingClientRect();
  const productTabHeight = productTabRect.height;

  const y = top - (globalHeaderHeight + productTabHeight);

  window.scrollBy({ top: y, left: 0, behavior: 'smooth' });
}

productTab.addEventListener('click', (e) => {
  const tab = e.target.parentElement;
  const id = tab.getAttribute('aria-controls');

  if (!id) return;

  onScroll(id);
});
