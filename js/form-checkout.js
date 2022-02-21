import {
  PRICE_PRODUCT,
  PRICE_EXTRA,
  selectedOption,
  generatedItem,
  userSelect,
  updateTotalAmount,
} from './form.js'

const orderFormCheckoutList = document.querySelectorAll('.order-checkouts')

function deleteCheckoutListItem(event) {
  const target = event.target

  if (!target.matches('.delete-button')) return

  const key = event.target.dataset.key
  generatedItem[key].forEach((item) => item.remove())
  generatedItem[key] = []

  selectedOption.delete(key)
  userSelect.set(key, 0)

  updateTotalAmount()
}

function updateCheckoutAmount(event) {
  const target = event.target
  const id = target.id
  const [key, num] = target.value.split('-')

  userSelect.set(key, Number(num))

  const cardOutputList = document.querySelectorAll(
    `output[for="${id}"] .amount`
  )
  cardOutputList.forEach((output) => {
    const cardPrice = (key === 'mandarin' ? PRICE_EXTRA : PRICE_PRODUCT) * num
    output.textContent = cardPrice.toLocaleString()
  })

  const cardSelectList = document.querySelectorAll(`select[id="${id}"]`)
  cardSelectList.forEach((select) => {
    select.options[num - 1].selected = true
  })

  updateTotalAmount()
}

orderFormCheckoutList.forEach((checkout) => {
  checkout.addEventListener('click', deleteCheckoutListItem)
  checkout.addEventListener('change', updateCheckoutAmount)
})
