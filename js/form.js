const formList = document.querySelectorAll('.order-form')
const formAmountList = document.querySelectorAll('.order-summary .amount')
export const formCheckoutList = document.querySelectorAll('.order-checkouts')

export const PRICE_PRODUCT = 36900
export const PRICE_EXTRA = 40000

export let currentOption = new Set()
export let generatedItem = {
  green: [],
  white: [],
  mandarin: [],
}
export let userSelect = new Map([
  ['green', 0],
  ['white', 0],
  ['mandarin', 0],
])
let count = 0

function addCheckoutItem(event) {
  const select = event.target
  const value = select.value

  const innerCheckoutList = this.querySelector('.order-checkouts')
  if (innerCheckoutList.contains(event.target)) return

  if (currentOption.has(value)) {
    alert('이미 선택한 옵션입니다.')
    select.options[0].selected = true
    return
  }

  currentOption.add(value)
  userSelect.set(value, userSelect.get(value) + 1)

  const optionText = select.options[select.selectedIndex].text
  const [title, ,] = optionText.split(' (') || optionText
  const cardPrice = value === 'mandarin' ? PRICE_EXTRA : PRICE_PRODUCT

  count += 1

  formCheckoutList.forEach((checkout) => {
    const checkoutList = checkout.querySelector('.checkout-list')

    const li = document.createElement('li')
    li.classList.add('checkout-item')
    li.innerHTML = `
      <div class='checkout-card'>
        <header class="checkout-header">
          <h3 class="title">${title}</h3>
  
          <button
            class="delete-button"
            type="button"
            aria-label="해당 상품 삭제하기"
            data-key="${value}"
          >
            <i class="ic-close" aria-hidden="true"></i>
          </button>
        </header>
  
        <footer class="checkout-footer">
          <div class="checkout-select">
            <select id='order-form-checkout-${count}'>
              <option value="${value}-1">1</option>
              <option value="${value}-2">2</option>
              <option value="${value}-3">3</option>
            </select>
            <i class="ic-caret"></i>
          </div>
  
          <output
            class="checkout-output"
            for='order-form-checkout-${count}'
          >
            <div class="price-16">
              <strong class="amount">${cardPrice.toLocaleString()}</strong>
              <span class="currency">원</span>
            </div>
          </output>
        </footer>
      </div>
    `

    checkoutList.appendChild(li)
    generatedItem[value].push(li)
  })

  select.options[0].selected = true
  updateTotalAmount()
}

export function updateTotalAmount() {
  let total = 0

  userSelect.forEach((value, key) => {
    const price = (key === 'mandarin' ? PRICE_EXTRA : PRICE_PRODUCT) * value

    total = total + price
  })

  formAmountList.forEach((amount) => {
    amount.textContent = total.toLocaleString()
  })
}

formList.forEach((form) => {
  form.addEventListener('change', addCheckoutItem)
})
