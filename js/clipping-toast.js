const clippingButtonList = document.querySelectorAll('.clipping-button')
const toastCloseButtonList = document.querySelectorAll(
  '.clipping-toast .close-button'
)
const [FinishToast, cancelToast] = document.querySelectorAll('.clipping-toast')

function closeToast() {
  const toast = this.parentNode
  toast.classList.remove('is-active')
}

function toggleToast() {
  const isActive = this.matches('.is-active')
  const toast = isActive ? cancelToast : FinishToast

  toast.classList.add('is-active')

  setTimeout(() => {
    toast.classList.remove('is-active')
    toast.classList.add('is-hide')

    toast.addEventListener('animationend', deleteExitingAnimation)
  }, 2000)

  updateAllClippingButton(isActive)
}

function updateAllClippingButton(isActive) {
  clippingButtonList.forEach((button) => {
    const icon = isActive ? 'bookmark' : 'bookmarkFilled'

    const iconTag = button.querySelector('i')
    iconTag.setAttribute('class', `ic-${icon}`)

    button.classList.toggle('is-active')

    if (button.parentNode.matches('.order-cta')) {
      const countStrong = button.querySelector('.count')
      const count = Number(countStrong.textContent.replace(',', ''))
      const newCount = isActive ? count - 1 : count + 1

      countStrong.textContent = newCount.toLocaleString()
      button.setAttribute('aria-label', `스크랩 ${newCount}건`)
    } else {
      const ariaLabel = isActive ? '북마크에 추가' : '북마크에서 제외'
      button.setAttribute('aria-label', ariaLabel)
    }
  })
}

function deleteExitingAnimation() {
  this.classList.remove('is-hide')
  this.removeEventListener('animationend', deleteExitingAnimation)
}

clippingButtonList.forEach((button) => {
  button.addEventListener('click', toggleToast)
})

toastCloseButtonList.forEach((button) =>
  button.addEventListener('click', closeToast)
)
