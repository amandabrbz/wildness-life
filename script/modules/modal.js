export default function initModal() {
  const btnOpen = document.querySelector('[data-modal="open"]');
  const btnClose = document.querySelector('[data-modal="close"]');
  const container = document.querySelector('[data-modal="container"]');

  function openModal(event) {
    event.preventDefault();
    container.classList.add("active");
  }

  function closeModal(event) {
    event.preventDefault();
    container.classList.remove("active");
  }

  function closeEsc(event) {
    if (event.key === 27 || event.key === "Escape") {
      closeModal(event);
    }
  }

  function closeFora(event) {
    if (event.target === this) {
      closeModal(event);
    }
  }

  if (btnOpen && btnClose && container) {
    btnOpen.addEventListener("click", openModal);
    btnClose.addEventListener("click", closeModal);
    document.addEventListener("keydown", closeEsc);
    container.addEventListener("click", closeFora);
  }
}
