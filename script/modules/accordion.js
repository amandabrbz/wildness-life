export default function initAccordion() {
  const classActive = "active";
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt'
  );

  function activeAccordion() {
    this.classList.toggle(classActive);
    this.nextElementSibling.classList.toggle(classActive);
  }

  if (accordionList.length) {
    accordionList[0].classList.add(classActive);
    accordionList[0].nextElementSibling.classList.add(classActive);

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
