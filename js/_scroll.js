const tabList = document.querySelector('.product-tab-list');
const tabs = document.querySelectorAll('.product-tab-item');
const globalHeader = document.querySelector('.global-header');
let id = null;

function onScroll() {
  const toBeShown = document.querySelector(`.${id}#${id}`);
  const top = toBeShown.getBoundingClientRect().top;

  const headerRect = globalHeader.getBoundingClientRect();
  const headerHeight = headerRect.height;

  const tabRect = tabList.getBoundingClientRect();
  const tabHeight = tabRect.height;

  const y = top - (headerHeight + tabHeight);

  window.scrollBy({ top: y, left: 0, behavior: 'smooth' });
}

function activeTab(selectedTab) {
  tabs.forEach((tab) => tab.classList.remove('is-active'));
  selectedTab.classList.add('is-active');
}

tabList.addEventListener('click', (e) => {
  const tab = e.target.parentElement;
  id = tab.getAttribute('aria-controls');

  onScroll();
  activeTab(tab);
});
