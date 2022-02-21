const sidebarNav = document.querySelector('.sidebar-nav')

let isOpenedDrawerMenuButton = document.querySelector(
  '.sidebar .drawer-menu.is-open .drawer-menu-button'
)

function toggleDrawerMenu(event) {
  const target = event.target

  if (!target.matches('.drawer-menu-button')) return

  if (target !== isOpenedDrawerMenuButton) {
    isOpenedDrawerMenuButton.parentNode.classList.remove('is-open')
  }

  const drawerMenu = target.parentNode
  drawerMenu.classList.toggle('is-open')

  isOpenedDrawerMenuButton = target
}

sidebarNav.addEventListener('click', toggleDrawerMenu)
