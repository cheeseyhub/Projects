var settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  method: "GET",
  headers: {},
};
const bitCoin = document.getElementById("bitcoin");
const ethereum = document.getElementById("ethereum");
const dogeCoin = document.getElementById("dogeCoin");

$.ajax(settings).done(function (response) {
  bitCoin.innerText = "$" + response.bitcoin.usd;
  ethereum.innerText = "$" + response.ethereum.usd;
  dogeCoin.innerText = "$" + response.dogecoin.usd;
});
