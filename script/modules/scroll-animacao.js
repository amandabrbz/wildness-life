export default class ScrollAnima {
  constructor(sections) {
    this.classActive = "active";
    this.sections = document.querySelectorAll(sections);
    this.metadeTela = window.innerHeight * 0.6;

    // funcoes de callback precisam de bind
    this.animaAoScroll = this.animaAoScroll.bind(this);
  }

  animaAoScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - this.metadeTela;
      const isSectionVisible = sectionTop - this.metadeTela < 0;
      if (isSectionVisible) {
        section.classList.add(this.classActive);
      } else if (section.classList.contains(this.classActive)) {
        section.classList.remove(this.classActive);
      }
    });
  }

  init() {
    this.animaAoScroll();
    window.addEventListener("scroll", this.animaAoScroll);
    return this;
  }
}
