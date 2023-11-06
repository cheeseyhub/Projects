const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");
const links = document.querySelectorAll(".nav-links li");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
