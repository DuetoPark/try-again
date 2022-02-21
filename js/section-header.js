const sectionHeaderIconButtonList = [
  ...document.querySelectorAll('.product-section-header .icon-button.sm-only'),
  document.querySelector('.product-section-header.sm-only .icon-button'),
]

function showFullSection() {
  const section = this.parentNode.parentNode
  section.classList.add('is-open')
}

sectionHeaderIconButtonList.forEach((button) => {
  button.addEventListener('click', showFullSection)
})
