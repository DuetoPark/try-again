const DrawerType = Object.freeze({
  sidebarNav: 'sidebar-nav',
});

export default class Drawer {
  constructor(className) {
    this.type = className;
    this.drawerButtonList = document.querySelectorAll(
      `.${className} button[data-drawer]`
    );

    this.drawerButtonList.forEach((drawerButton) => {
      drawerButton.addEventListener('click', this.onClick);
    });
  }

  open(menu) {
    menu.classList.add('is-open');
  }

  close(menu) {
    menu.classList.remove('is-open');
  }

  onClick = (event) => {
    this.target = event.currentTarget;

    if (this.type === DrawerType.sidebarNav) {
      this.toggleDrawerMenu();
    } else {
      this.showFullSection();
    }
  };

  showFullSection() {
    const section = this.target.parentNode.parentNode;
    this.open(section);
  }

  toggleDrawerMenu() {
    const drawerMenu = this.target.parentNode;

    if (drawerMenu.matches('.is-open')) {
      this.close(drawerMenu);
    } else {
      this.closeAllDrawerMenus();
      this.open(drawerMenu);
    }
  }

  closeAllDrawerMenus() {
    const drawerMenuList = document.querySelectorAll(
      `.${this.type} .drawer-menu`
    );

    drawerMenuList.forEach((menu) => this.close(menu));
  }
}
