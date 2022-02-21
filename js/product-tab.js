const productTabList = document.querySelector('.product-tab-list')

let currentActiveTab
let disableUpdating

const TOP_HEADER__MOBILE = 50 + 40 + 40
const TOP_HEADER__DESKTOP = 80 + 50 + 54
const BREAKPOINT__TABLET = 768
const BREAKPOINT__DESKTOP = 1200

const PADDING__MOBILE = 8
const PADDING__DESKTOP = 80

const tabPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
]

const tabPanelPosition = new Map()
const tabItemList = new Map()
tabPanelIdList.forEach((id) => {
  let tab = document.querySelector(`[aria-controls="${id}"]`)

  tabItemList.set(id, tab)
})

function toggleTabButton(event) {
  const tabButton = event.target
  const tabItem = tabButton.parentNode
  const isActive = tabItem.matches('.is-active')

  if (isActive) return

  disableUpdating = true

  currentActiveTab && currentActiveTab.classList.remove('is-active')
  tabItem.classList.add('is-active')

  currentActiveTab = tabItem

  setTimeout(() => {
    disableUpdating = false
  }, 1000)
}

function scrollToTabPanel(event) {
  const tabItem = event.target.parentNode
  const tabPanelId = tabItem.getAttribute('aria-controls')
  const tabPanel = document.querySelector(`#${tabPanelId}`)

  const tabpanelRect = tabPanel.getBoundingClientRect()
  const tabPanelTop =
    tabpanelRect.top -
    (window.innerWidth < BREAKPOINT__TABLET
      ? TOP_HEADER__MOBILE
      : TOP_HEADER__DESKTOP)

  window.scrollBy({
    top: tabPanelTop,
    behavior: 'smooth',
  })
}

function detectTabPanelPosition() {
  tabPanelIdList.forEach((id) => {
    const tabPanel = document.querySelector(`#${id}`)
    const position = Math.floor(
      window.scrollY + tabPanel.getBoundingClientRect().top
    )

    tabPanelPosition.set(id, position)
  })

  updateActiveTabOnScroll()
}

function updateActiveTabOnScroll() {
  if (disableUpdating) return

  const scrollAmount =
    window.scrollY +
    (window.innerWidth >= BREAKPOINT__TABLET
      ? TOP_HEADER__DESKTOP + PADDING__DESKTOP
      : TOP_HEADER__MOBILE + PADDING__MOBILE)

  if (scrollAmount < tabPanelPosition.get('product-spec')) return

  let activeTab

  if (scrollAmount >= tabPanelPosition.get('product-recommendation')) {
    activeTab = tabItemList.get('product-recommendation')
  } else if (scrollAmount >= tabPanelPosition.get('product-shipment')) {
    activeTab = tabItemList.get('product-shipment')
  } else if (scrollAmount >= tabPanelPosition.get('product-inquiry')) {
    activeTab = tabItemList.get('product-inquiry')
  } else if (scrollAmount >= tabPanelPosition.get('product-review')) {
    activeTab = tabItemList.get('product-review')
  } else if (scrollAmount >= tabPanelPosition.get('product-spec')) {
    activeTab = tabItemList.get('product-spec')
  }

  const bodyHeight = document.body.offsetHeight
  const scrollAmountToPageEnd = window.innerHeight + Math.ceil(window.scrollY)

  if (scrollAmountToPageEnd === bodyHeight) {
    activeTab = tabItemList.get('product-recommendation')
  }

  if (activeTab === currentActiveTab) return

  activeTab.classList.add('is-active')
  currentActiveTab && currentActiveTab.classList.remove('is-active')

  currentActiveTab = activeTab
}

productTabList.addEventListener('click', toggleTabButton)
productTabList.addEventListener('click', scrollToTabPanel)
window.addEventListener('load', detectTabPanelPosition)
window.addEventListener('resize', _.throttle(detectTabPanelPosition, 1000))
window.addEventListener('scroll', _.throttle(updateActiveTabOnScroll, 300))

const sectionShowButtonList = [
  document.querySelector('.product-spec .btn-primary'),
  document.querySelector('.product-section-header .icon-button.sm-only'),
  document.querySelector('.product-section-header.sm-only .icon-button'),
]

sectionShowButtonList.forEach((button) => {
  button.addEventListener('click', detectTabPanelPosition)
})
