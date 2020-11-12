import CountNumbers from "./numbers.js";


export default function initFetchApi() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("number-animal");
    div.innerHTML = `<h2>${animal.especie}</h2>  <span data-number>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      const numbersGrid = document.querySelector(".numbers-grid");

      animaisJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numbersGrid.appendChild(divAnimal);
        const animaNumeros = new CountNumbers("[data-number]", '.numbers', 'active');
        animaNumeros.init();
      });
    } catch (error) {
      console.log(Error(error));
    }
  }

  fetchAnimais("./animaisapi.json");
}
