class Drawer {
  constructor(className) {
    this.drawerItems = document.querySelectorAll(className);
  }

  closeAllDrawers() {
    this.drawerItems.forEach((item) => item.classList.remove('is-open'));
  }

  openDrawer(item) {
    item.classList.add('is-open');
  }

  closeDrawer(item) {
    item.classList.remove('is-open');
  }

  handleDrawer(item) {
    const itemIsOpen = item.classList.value.includes('open');

    if (itemIsOpen) {
      this.closeDrawer(item);
    } else {
      this.closeAllDrawers();
      this.openDrawer(item);
    }
  }

  addEvent(target) {
    for (let item of this.drawerItems) {
      const trigger = item.querySelector(target);
      trigger.addEventListener('click', this.handleDrawer.bind(this, item));
    }
  }
}

const sidebarDrawer = new Drawer('.sidebar .drawer-menu');
sidebarDrawer.addEvent('.drawer-menu-button');

class productDrawer extends Drawer {
  handleDrawer(item) {
    this.openDrawer(item);
  }
}

const inquiryDrawer = new productDrawer('.product-inquiry');
inquiryDrawer.addEvent('.icon-button');

const shipmentDrawer = new productDrawer('.product-shipment');
shipmentDrawer.addEvent('.icon-button');
