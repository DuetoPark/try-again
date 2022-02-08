export function inactiveAll(tabItems) {
  for (let item of tabItems) {
    item.classList.remove('is-active');
  }
}

export function highlight(selectedTab) {
  selectedTab.classList.add('is-active');
}
