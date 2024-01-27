let btns = document.getElementsByClassName("btn");
let productImg = document.getElementById("product");

btns[0].addEventListener("click", () => {
  productImg.src = "./image1.png";
  for (let bt of btns) {
    bt.classList.remove("active");
  }
  btns[0].classList.add("active");
});
btns[1].addEventListener("click", () => {
  productImg.src = "./image2.png";
  for (let bt of btns) {
    bt.classList.remove("active");
  }
  btns[1].classList.add("active");
});
btns[2].addEventListener("click", () => {
  productImg.src = "./image3.png";
  for (let bt of btns) {
    bt.classList.remove("active");
  }
  btns[2].classList.add("active");
});
