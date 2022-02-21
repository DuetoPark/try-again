const reviewList = document.querySelector('.review-list')

const HELPFUL = '도움됨'
const NOT_HELPFUL = '도움이 돼요'
const checkIcon = '<i class="ic-check" aria-hidden="true"></i>'

function toggleReviewLikeButton(event) {
  const target = event.target
  if (target.tagName !== 'BUTTON') return

  const isLiked = target.matches('.btn-primary')
  const textElement = target.nextElementSibling
  const reviewCardFooter = target.parentNode

  if (isLiked) {
    target.setAttribute('class', 'btn-32 btn-outlined')
    target.innerHTML = NOT_HELPFUL

    const countElement = textElement.querySelector('.count')
    const count = Number(countElement.textContent.replaceAll(',', ''))

    if (count === 1) {
      reviewCardFooter.removeChild(textElement)
    } else {
      countElement.textContent = (count - 1).toLocaleString()
    }
  }

  if (!isLiked) {
    target.setAttribute('class', 'btn-32 btn-primary')
    target.innerHTML = checkIcon + HELPFUL

    if (textElement) {
      const countElement = textElement.querySelector('.count')
      const count = Number(countElement.textContent.replaceAll(',', ''))
      countElement.textContent = (count + 1).toLocaleString()
    } else {
      const newTextElement = document.createElement('p')
      newTextElement.setAttribute('class', 'helped')
      newTextElement.innerHTML = `<strong><span class="count">1</span>명</strong>에게 도움이 되었습니다.`

      reviewCardFooter.appendChild(newTextElement)
    }
  }
}

reviewList.addEventListener('click', toggleReviewLikeButton)
