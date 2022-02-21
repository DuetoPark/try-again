const sidebar = document.querySelector('.sidebar')
const sidebarButton = document.querySelector('.gnb-icon-button.is-menu')
const sidebarOverlay = document.querySelector('.overlay')

function openSidebar() {
  sidebar.classList.add('is-active')
  sidebarOverlay.classList.add('is-active')
}

function closeSidebar() {
  sidebar.classList.remove('is-active')
  sidebarOverlay.classList.remove('is-active')
}

sidebarButton.addEventListener('click', openSidebar)
sidebarOverlay.addEventListener('click', closeSidebar)
