import {
  PRICE_PRODUCT,
  PRICE_EXTRA,
  currentOption,
  generatedItem,
  userSelect,
  updateTotalAmount,
  formCheckoutList,
} from './form.js'

function deleteCheckoutItem(event) {
  const target = event.target

  if (!target.matches('.delete-button')) return

  const key = event.target.dataset.key
  generatedItem[key].forEach((item) => {
    const parent = item.parentNode
    parent.removeChild(item)
  })

  generatedItem[key] = []

  currentOption.delete(key)
  userSelect.set(key, 0)

  updateTotalAmount()
}

function updateCheckoutCard(event) {
  const target = event.target
  const [key, num] = target.value.split('-')

  userSelect.set(key, Number(num))

  updateCardSelect(target)
  updateCardAmount(target)
  updateTotalAmount()
}

function updateCardSelect(target) {
  const [key, num] = target.value.split('-')

  generatedItem[key].forEach((item) => {
    const select = item.querySelector('select')
    select.options[num - 1].selected = true
  })
}

function updateCardAmount(target) {
  const [key, num] = target.value.split('-')

  generatedItem[key].forEach((item) => {
    const amount = item.querySelector('.amount')
    const cardPrice = (key === 'mandarin' ? PRICE_EXTRA : PRICE_PRODUCT) * num
    amount.textContent = cardPrice.toLocaleString()
  })
}

formCheckoutList.forEach((checkout) => {
  checkout.addEventListener('click', deleteCheckoutItem)
  checkout.addEventListener('change', updateCheckoutCard)
})
