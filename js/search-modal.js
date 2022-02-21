const searchModal = document.querySelector('.search-modal')
const searchModalButton = document.querySelector('.gnb-icon-button.is-search')
const searchModalCloseButton = searchModal.querySelector('.close-button')
const searchModalDeleteAllButton = searchModal.querySelector('.clear-button')
const searchModalInput = searchModal.querySelector('input')

const searchModalHistoryList = searchModal.querySelector('.search-history-list')
const searchModalHistoryContent = searchModal.querySelector(
  '.search-history-content'
)

const searchModalOverlay = document.querySelector('.overlay')

function openSearchModal() {
  searchModal.classList.add('is-active')
  searchModalOverlay.classList.add('is-active')
}

function closeSearchModal() {
  searchModal.classList.remove('is-active')
  searchModalOverlay.classList.remove('is-active')
}

function deleteAllHistoryItem() {
  searchModalHistoryList.innerHTML = ''

  addPlaceHolderWhenHistoryListIsEmpty()

  searchModalInput.focus()
}

function deleteHistoryItem(event) {
  const target = event.target

  if (!target.matches('.delete-button')) return

  const historyListItem = target.parentNode
  searchModalHistoryList.removeChild(historyListItem)

  addPlaceHolderWhenHistoryListIsEmpty()
}

function addPlaceHolderWhenHistoryListIsEmpty() {
  if (searchModalHistoryList.children.length) return

  const p = document.createElement('p')
  p.setAttribute('class', 'placeholder')
  p.innerText = '최근 검색한 내역이 없습니다.'
  searchModalHistoryContent.appendChild(p)
}

searchModalButton.addEventListener('click', openSearchModal)
searchModalCloseButton.addEventListener('click', closeSearchModal)
searchModalDeleteAllButton.addEventListener('click', deleteAllHistoryItem)
searchModalHistoryList.addEventListener('click', deleteHistoryItem)
window.addEventListener('load', addPlaceHolderWhenHistoryListIsEmpty)
