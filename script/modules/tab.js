export default function initTab() {
  const classActive = "active";
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(classActive);

    function activeTab(index) {
      const directionAnime = tabContent[index].dataset.anime;

      tabContent.forEach((item)=> {
        item.classList.remove(classActive);
      });

      tabContent[index].classList.add(classActive, directionAnime);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => activeTab(index));
    });
  }
}
