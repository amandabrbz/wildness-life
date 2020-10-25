import initNumbers from "./numbers.js";

export default function initFetchApi() {
  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJson = await animaisResponse.json();

    const numbersGrid = document.querySelector(".numbers-grid");

    animaisJson.forEach((animal) => {
      const divAnimal = createAnimal(animal);
      numbersGrid.appendChild(divAnimal);
      initNumbers();
    });
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("number-animal");
    div.innerHTML = `<h2>${animal.especie}</h2>  <span data-number>${animal.total}</span>`;
    return div;
  }

  fetchAnimais("./animaisapi.json");
}
