const wrapperClassName = ['sidebar-nav', 'product-inquiry', 'product-shipment'];

function onOpen(event) {
  const id = event.target.dataset.id;
  if (!id) return;

  const drawer = document.querySelector(`#${id}`);

  sidebarNav(drawer);

  drawer.classList.add('is-open');
}

function sidebarNav(drawer) {
  const sidebarMenus = document.querySelectorAll('.drawer-menu');
  sidebarMenus.forEach((menu) => menu.classList.remove('is-open'));
}

window.addEventListener('load', () => {
  wrapperClassName.forEach((className) => {
    const wrapper = document.querySelector(`.${className}`);
    wrapper.addEventListener('click', (e) => onOpen(e));
  });
});
