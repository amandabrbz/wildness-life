export default class Accordion {
  constructor(list) {
    this.this.classActive = "active";
    this.accordionList = document.querySelectorAll(list);
  }

  toggleAccordion(item) {
    this.classList.toggle(this.classActive);
    this.nextElementSibling.classList.toggle(this.classActive);
  }

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => {
        toggleAccordion(item);
      });
    });
  }

  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
