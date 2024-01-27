const imagesArea = document.getElementById("images-area");
const showMore = document.getElementById("show-more");
const submitBtn = document.getElementById("submit-btn");
const inputText = document.getElementById("text");
const accessKey = "gyA1aAbfwKw_wo9h8VSWKcJo1ixpdMY5s0D3g8ys_4s";
let imageName = "";
let page;
async function searchImage() {
  imageName = inputText.value;

  console.log(imageName);
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${imageName}&client_id=${accessKey}&per_page=12`;
  if (page == 1) {
    imagesArea.innerHTML = "";
  }
  const response = await fetch(url);
  const data = await response.json();

  let imagesArray = data.results;
  console.log(imagesArray);
  imagesArray.map((item) => {
    const image = document.createElement("img");
    image.src = item.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = item.links.html;
    imageLink.target = "_blank";
    imagesArea.appendChild(imageLink).appendChild(image);
  });
  showMore.style.display = "block";
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

showMore.addEventListener("click", (e) => {
  page++;
  searchImage();
});
