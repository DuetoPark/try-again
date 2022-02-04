export default class Drawer {
  constructor() {
    this.opener = document.querySelectorAll(`button[data-drawer]`);

    this.opener.forEach((button) => {
      button.addEventListener('click', this.onClick);
    });
  }

  setCallBack(callback) {
    this.callback = callback;
  }

  onClick = (event) => {
    const target = event.currentTarget;
    const name = target.dataset.drawer;
    const menu = document.querySelector(`.${name}`);
    const drawerMenu = menu.matches('.drawer-menu');

    if (!drawerMenu) {
      this.open(menu);
    } else {
      const isOpened = menu.matches('.is-open');

      if (isOpened) {
        this.close(menu);
      } else {
        closeAllMenus();
        this.open(menu);
      }
    }
  };

  open(menu) {
    menu.classList.add('is-open');
  }

  close(menu) {
    menu.classList.remove('is-open');
  }

  closeAllMenus() {
    const allMenus = document.querySelectorAll(`.drawer-menu`);

    allMenus.forEach((menu) => this.close(menu));
  }
}
