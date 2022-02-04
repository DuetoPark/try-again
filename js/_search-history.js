export default class History {
  constructor(className) {
    this.section = document.querySelector(`.${className}`);
    this.form = this.section.querySelector('form');
    this.form.addEventListener('submit', this.onSubmit);

    this.input = this.form.querySelector('.form-input');
    this.history = this.section.querySelector('.search-history-list');
    this.history.addEventListener('click', this.onHistoryClick);

    this.clearBtn = this.section.querySelector('.clear-button');
    this.clearBtn.addEventListener('click', this.onClearBtnClick);
  }

  setCallBack(callback) {
    this.callback = callback;
  }

  getTemplate(id) {
    const text = this.input.value;

    let template = `
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
          </button>
        `;

    return template;
  }

  onClearBtnClick = () => {
    this.clear();
    this.init();
  };

  clear() {
    this.history.innerHTML = '';
  }

  onHistoryClick = (event) => {
    const id = event.target.dataset.id;
    if (!id) return;

    this.removeItem(id);
  };

  removeItem(id) {
    const item = this.history.querySelector(`li[data-id="${id}"]`);
    item.remove();
  }

  onSubmit = (event) => {
    event.preventDefault();

    const text = this.input.value;
    if (!text) return;

    const li = this.createItem();
    this.addItem(li);
    this.init();
  };

  addItem(elem) {
    const first = this.history.firstElementChild;
    this.history.insertBefore(elem, first);
  }

  createItem() {
    const id = uuidv4();

    const li = document.createElement('li');
    li.setAttribute('class', 'search-history-item');
    li.setAttribute('data-id', id);
    li.innerHTML = this.getTemplate(id);
    return li;
  }

  init() {
    this.input.focus();
    this.input.value = '';
  }
}
