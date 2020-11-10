export default function initAnimaAoScroll() {
  const classActive = "active";
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  function animaAoScroll() {
    sections.forEach((section) => {
      const metadeTela = window.innerHeight * 0.6;
      const sectionTop = section.getBoundingClientRect().top - metadeTela;
      const isSectionVisible = sectionTop - metadeTela < 0;
      if (isSectionVisible) {
        section.classList.add(classActive);
      } else if (section.classList.contains(classActive)) {
        section.classList.remove(classActive);
      }
    });
  }

  if (sections.length) {
    sections[0].classList.add(classActive);
    window.addEventListener("scroll", animaAoScroll);
  }
}
