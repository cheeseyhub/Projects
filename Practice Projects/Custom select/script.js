const selector = document.getElementById("selectfield");
const selectText = document.getElementById("selecttext");
const list = document.querySelector(".list");
const options = document.getElementsByClassName("options");
selector.addEventListener("click", () => {
  list.style.width = "350px";
  for (option of options) {
    option.onclick = function () {
      selectText.innerHTML = this.textContent;
      list.style.width = "1px";
    };
  }
});
