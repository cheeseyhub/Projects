const passwordBox = document.getElementById("password");
const length = 12;
const btn = document.getElementById("btn");
const icon = document.getElementById("icon");
console.log(icon);
const upperCase = "ABCDEFHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefhijklmnopqestuvwxyz";

const number = "0123456789";
const symbols = "!@&^%#$><?-+=";

const allChars = upperCase + lowerCase + symbols + number;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}
function copyPass() {
  passwordBox.select();
  document.execCommand("copy");
}

btn.addEventListener("click", createPassword);
icon.addEventListener("click", copyPass);
