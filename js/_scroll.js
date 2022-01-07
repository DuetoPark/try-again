const productTabs = document.querySelectorAll('.product-tab-item');

function getHeight(target) {
  return document.querySelector(target).getBoundingClientRect().height;
}

productTabs.forEach((tab) => {
  const id = tab.getAttribute('aria-controls');
  const tabpanel = document.querySelector(`#${id}`);
  const button = tab.firstElementChild;

  button.addEventListener('click', () => {
    const globalHeaderHeight = getHeight('.global-header');
    const productTabHeight = getHeight('.product-tab');
    const tabpanelTop = tabpanel.getBoundingClientRect().top;
    const y = tabpanelTop - globalHeaderHeight - productTabHeight;

    window.scrollBy({ top: y, left: 0, behavior: 'smooth' });
  });
});
