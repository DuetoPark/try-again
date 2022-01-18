const productTab = document.querySelector('.product-tab-list');
const globalHeader = document.querySelector('.global-header');
let id = null;

function onScroll() {
  const toBeShown = document.querySelector(`.${id}#${id}`);
  const top = toBeShown.getBoundingClientRect().top;

  const headerRect = globalHeader.getBoundingClientRect();
  const headerHeight = headerRect.height;

  const tabRect = productTab.getBoundingClientRect();
  const tabHeight = tabRect.height;

  const y = top - (headerHeight + tabHeight);

  window.scrollBy({ top: y, left: 0, behavior: 'smooth' });
}

productTab.addEventListener('click', (e) => {
  const tab = e.target.parentElement;
  id = tab.getAttribute('aria-controls');

  id && onScroll();
});
