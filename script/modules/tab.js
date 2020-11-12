export default class Tab {
  constructor(menu, content) {
    this.classActive = "active";
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
  }

  activeTab(index) {
    this.tabContent.forEach((item) => {
      item.classList.remove(this.classActive);
    });

    const directionAnime = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.classActive, directionAnime);
  }

  addTabEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addTabEvent();
    }
    return this;
  }
}
