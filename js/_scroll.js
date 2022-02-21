export default class Scroll {
  constructor(className) {
    this.header = document.querySelector('.global-header');
    this.headerRect = this.header.getBoundingClientRect();
    this.headerHeight = this.headerRect.height;

    this.tabList = document.querySelector(`.${className}`);
    this.tabItems = this.tabList.children;
    this.tabListRect = this.tabList.getBoundingClientRect();
    this.tabListHeight = this.tabListRect.height;
    this.tabList.addEventListener('click', this.onClick);
  }

  setClickListenr(callback) {
    this.callback = callback;
  }

  onClick = (event) => {
    const selectedTab = event.target.parentElement;
    const tabPannel = selectedTab.getAttribute('aria-controls');

    this.showTabPannel(tabPannel);
    this.callback && this.callback(selectedTab);
  };

  showTabPannel(name) {
    const target = document.querySelector(`.${name}#${name}`);
    const targetRect = target.getBoundingClientRect();
    const targetTop = targetRect.top;

    const y = targetTop - (this.headerHeight + this.tabListHeight);

    window.scrollBy({ top: y, left: 0, behavior: 'smooth' });
  }
}
