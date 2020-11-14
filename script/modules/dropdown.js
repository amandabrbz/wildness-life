import outsideClick from "./outsideClick.js";

export default class Dropdown {
  constructor(dropdown, events) {
    this.dropdown = document.querySelectorAll(dropdown);
    this.active = "active";

    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }

    this.activeDropDown = this.activeDropDown.bind(this);
  }

  activeDropDown(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.active);

    outsideClick(element, this.events, () => {
      element.classList.remove(this.active);
    });
  }

  addDropDownEvents() {
    this.dropdown.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDown);
      });
    });
  }

  init() {
    if (this.dropdown.length) {
      this.addDropDownEvents();
    }
    return this;
  }
}
