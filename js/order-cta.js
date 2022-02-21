const orderCta = document.querySelector('.order-cta')
const orderCtaOrderButton = orderCta.querySelector('.order-button')
const orderCtaClippingButton = orderCta.querySelector('.clipping-button')

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderModal() {
  orderModal.classList.add('is-active')
  orderModalOverlay.classList.add('is-active')
}

function closeOrderModal() {
  orderModal.classList.remove('is-active')
  orderModalOverlay.classList.remove('is-active')
}

orderCtaOrderButton.addEventListener('click', openOrderModal)
orderModalOverlay.addEventListener('click', closeOrderModal)
