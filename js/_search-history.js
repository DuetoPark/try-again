export default class History {
  constructor(className, itemCountLimit) {
    this.section = document.querySelector(`.${className}`);
    this.form = this.section.querySelector('form');
    this.form.addEventListener('submit', this.onSubmit);

    this.input = this.form.querySelector('.form-input');
    this.list = this.section.querySelector('.search-history-list');
    this.list.addEventListener('click', this.onHistoryClick);

    this.clearBtn = this.section.querySelector('.clear-button');
    this.clearBtn.addEventListener('click', this.onClearBtnClick);

    this.itemCountLimit = itemCountLimit;
    this.count = 0;
  }

  setCallBack(callback) {
    this.callback = callback;
  }

  onClearBtnClick = () => {
    this.clear();
    this.showPlaceHolder();
    this.init();
    this.count = 0;
  };

  showPlaceHolder() {
    this.list.innerHTML = `<p class="placeholder">최근 검색한 내역이 없습니다.</p>`;
  }

  clear() {
    this.list.innerHTML = '';
  }

  onHistoryClick = (event) => {
    const id = event.target.dataset.id;
    if (!id) return;

    this.removeItem(id);
    --this.count || this.showPlaceHolder();

    this.init();
  };

  removeItem(id) {
    const item = this.list.querySelector(`li[data-id="${id}"]`);
    item.remove();
  }

  onSubmit = (event) => {
    event.preventDefault();

    const text = this.input.value;
    if (!text) return;

    this.count || this.clear();
    this.addItem(text);
    this.keep5Items(++this.count);
    this.init();
  };

  keep5Items(count) {
    if (count <= this.itemCountLimit) return;

    const lastChild = this.list.lastElementChild;
    lastChild.remove();

    this.count = this.itemCountLimit;
  }

  addItem(text) {
    const id = uuidv4();

    const li = document.createElement('li');
    li.setAttribute('class', 'search-history-item');
    li.setAttribute('data-id', id);
    li.innerHTML = `
      <button class="word-button" type="button">
        ${text}
      </button>
      <button
        class="delete-button"
        type="button"
        aria-label="검색어 삭제"
        data-id="${id}"
      >
        <i class="ic-close" aria-hidden="true"></i>
      </button>`;

    const firstItem = this.list.firstElementChild;
    this.list.insertBefore(li, firstItem);
  }

  init() {
    this.input.focus();
    this.input.value = '';
  }
}
