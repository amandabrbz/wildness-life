export default function fetchBitcoins(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const btcPrice = document.querySelector(target);
      btcPrice.innerText = (1000 / json.BRL.sell).toFixed(4);
    })
    .catch((error) => {
      console.log(Error(error));
    });
}
