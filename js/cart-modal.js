const cartButtonList = document.querySelectorAll('.cart-button')

const cartModal = document.querySelector('.cart-modal')
const cartModalCloseButton = cartModal.querySelector('.close-button')

const cartModalOverlay = document.querySelector('.overlay')

function openCartModal() {
  cartModal.classList.add('is-active')
  cartModalOverlay.classList.add('is-active')
}

function closeActivedAllModal() {
  const isActivedModalList = document.querySelectorAll(
    '.is-active[class*="modal"]'
  )

  isActivedModalList.forEach((modal) => {
    modal.classList.remove('is-active')
  })

  cartModalOverlay.classList.remove('is-active')
}

cartButtonList.forEach((button) =>
  button.addEventListener('click', openCartModal)
)
cartModalCloseButton.addEventListener('click', closeActivedAllModal)
