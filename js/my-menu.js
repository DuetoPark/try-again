const myMenu = document.querySelector('.my-menu')
const myMenuButton = document.querySelector('.my-menu-button')

function toggleMyMenu() {
  const isActive = myMenu.matches('.is-active')

  if (isActive) {
    window.removeEventListener('click', closeMyMenu)
  } else {
    window.addEventListener('click', closeMyMenu)
  }

  myMenu.classList.toggle('is-active')
}

function closeMyMenu(event) {
  const target = event.target

  if (myMenu.contains(target)) return

  myMenu.classList.remove('is-active')
  window.removeEventListener('click', closeMyMenu)
}

myMenuButton.addEventListener('click', toggleMyMenu)
