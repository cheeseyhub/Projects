var imgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("original-img");
var cursor = document.getElementById("cursor");

console.log(originalImg);
var leftSpace = imgBox.offsetLeft;

originalImg.style.width = imgBox.offsetWidth + "px";
imgBox.onmousemove = function (e) {
  var boxWidth = e.pageX - leftSpace + "px";
  imgWrap.style.width = boxWidth;

  cursor.style.left = boxWidth;
};
