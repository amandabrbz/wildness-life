export default function initNumbers() {
  function animaNumbers() {
    const numbers = document.querySelectorAll("[data-number]");
    numbers.forEach((number) => {
      const total = +number.innerText;
      const add = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start += add;
        number.innerText = start;

        if (start >= total) {
          number.innerText = total;
          clearInterval(timer);
        }
      }, 15 + Math.random());
    });
  }


  //funcao observadora que nao deixa a contagem acontecer antes de estar ativo
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("active")) {
      observer.disconnect();
      animaNumbers();
    }
  }

  const obsTarget = document.querySelector(".numbers");
  const observer = new MutationObserver(handleMutation);

  observer.observe(obsTarget, { attributes: true });
}
