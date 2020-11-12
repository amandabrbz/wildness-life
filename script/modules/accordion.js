export default class Accordion {
  constructor(list) {
    this.classActive = "active";
    this.accordionList = document.querySelectorAll(list);
  }

  toggleAccordion(item) {
    item.classList.toggle(this.classActive);
    item.nextElementSibling.classList.toggle(this.classActive);
  }

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }

    return this;
  }
}
