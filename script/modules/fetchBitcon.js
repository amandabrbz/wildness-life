export default function initBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((json) => {
      const btcPrice = document.querySelector(".btc-price");
      btcPrice.innerText = (1000 / json.BRL.sell).toFixed(4);
    })
    .catch((error) => {
      console.log(Error(error));
    });
}

// async function fetchBit(url) {
//   const bitResponse = await fetch(url);
//   const bitJson = await bitResponse.json();

//   console.log(bitJson.BRL.buy);
// }
// fetchBit("https://blockchain.info/ticker");
