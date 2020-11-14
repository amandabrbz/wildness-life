export default class ScrollAnima {
  constructor(sections) {
    this.classActive = "active";
    this.sections = document.querySelectorAll(sections);
    this.metadeTela = window.innerHeight * 0.6;

    // funcoes de callback precisam de bind
    this.checkDistance = this.checkDistance.bind(this);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset) - this.metadeTela,
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add(this.classActive);
      } else if (item.element.classList.contains(this.classActive)) {
        item.element.classList.remove(this.classActive);
      }
    });
  }

  init() {
    if (this.sections.lenght) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
