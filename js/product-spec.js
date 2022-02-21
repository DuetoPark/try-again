const productSpec = document.querySelector('.product-spec')
const productSpecButton = productSpec.querySelector(
  '.button-wrapper.sm-only button'
)

function showFullProductSpec() {
  productSpec.classList.add('is-open')
}

productSpecButton.addEventListener('click', showFullProductSpec)
