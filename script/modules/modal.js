export default class Modal {
  constructor(open, close, container) {
    this.btnOpen = document.querySelector(open);
    this.btnClose = document.querySelector(close);
    this.container = document.querySelector(container);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.closeFora = this.closeFora.bind(this);
    this.eventKey = this.eventKey.bind(this);
  }

  toggleModal() {
    this.container.classList.toggle("active");
  }

  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  closeFora(event) {
    if (event.target === this.container) {
      this.eventToggleModal(event);
    }
  }

  eventKey(event) {
    if (event.key === 27 || event.key === "Escape") {
      this.eventToggleModal(event);
    }
  }

  addModalEvents() {
    this.btnOpen.addEventListener("click", this.eventToggleModal);
    this.btnClose.addEventListener("click", this.eventToggleModal);
    this.container.addEventListener("click", this.closeFora);
    document.addEventListener("keydown", this.eventKey);
  }

  init() {
    if (this.btnOpen && this.btnClose && this.container) {
      this.addModalEvents();
    }
    return this;
  }
}
