const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchDeleteAllButton = gnbSearch.querySelector('.clear-button')

const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')
const gnbSearchHistoryContent = gnbSearchHistory.querySelector(
  '.search-history-content'
)

function openGnbSearchHistory() {
  gnbSearchHistory.classList.add('is-active')
  window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside)
}

function closeGnbSearchHistory() {
  gnbSearchHistory.classList.remove('is-active')
  window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside)
}

function closeGnbSearchHistoryOnClickingOutside(event) {
  if (gnbSearch.contains(event.target)) return

  closeGnbSearchHistory()
}

function addPlaceHolderWhenHistoryListIsEmpty() {
  if (gnbSearchHistoryList.children.length) return

  const p = document.createElement('p')
  p.setAttribute('class', 'placeholder')
  p.innerText = '최근 검색한 내역이 없습니다.'
  gnbSearchHistoryContent.appendChild(p)
}

function deleteAllSearchHistory() {
  gnbSearchHistoryList.innerHTML = ''

  closeGnbSearchHistory()
  addPlaceHolderWhenHistoryListIsEmpty()

  gnbSearchInput.focus()
}

function deleteHistoryItem(event) {
  event.stopPropagation()
  const target = event.target

  if (!target.matches('.delete-button')) return

  const historyListItem = target.parentNode
  gnbSearchHistoryList.removeChild(historyListItem)

  if (gnbSearchHistoryList.children.length) return

  closeGnbSearchHistory()
  addPlaceHolderWhenHistoryListIsEmpty()
}

gnbSearchInput.addEventListener('click', openGnbSearchHistory)
gnbSearchDeleteAllButton.addEventListener('click', deleteAllSearchHistory)
gnbSearchHistoryList.addEventListener('click', deleteHistoryItem)
window.addEventListener('load', addPlaceHolderWhenHistoryListIsEmpty)
