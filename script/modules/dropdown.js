import outsideClick from "./outsideClick.js";

export default function initDropdown() {
  const dropdown = document.querySelectorAll("[data-dropdown]");
  const events = ["touchstart", "click"];

  dropdown.forEach((menu) => {
    events.forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");

    outsideClick(this, events, () => {
      this.classList.remove("active");
    });
  }
}
