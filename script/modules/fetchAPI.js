import CountNumbers from "./numbers.js";

export default function fecthAnimais(url, target) {

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("number-animal");
    div.innerHTML = `<h2>${animal.especie}</h2>  <span data-number>${animal.total}</span>`;
    return div;
  }

  const numbersGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numbersGrid.appendChild(divAnimal);
  }

  function animaNumerosAnimais() {
      const animaNumeros = new CountNumbers("[data-number]",".numbers", "active");
      animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      animaisJson.forEach((animal) => preencherAnimais(animal));
      animaNumerosAnimais();

    } catch (error) {
      console.log(Error(error));
    }
  }

  return criarAnimais();
}
