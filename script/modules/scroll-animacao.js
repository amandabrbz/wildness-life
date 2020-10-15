export default function initAnimaAoScroll() {
  const classActive = "active";
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if (sections.length) {
    const metadeTela = window.innerHeight * 0.6;

    sections[0].classList.add(classActive);

    function animaAoScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - metadeTela;
        const isSectionVisible = sectionTop - metadeTela < 0;
        if (isSectionVisible) {
          section.classList.add(classActive);
        } else if (section.classList.contains(classActive)) {
          section.classList.remove(classActive);
        }
      });
    }

    window.addEventListener("scroll", animaAoScroll);
  }
}
