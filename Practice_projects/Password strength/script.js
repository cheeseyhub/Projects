const inputBox = document.querySelector(".input-box");
console.log(inputBox);
const password = document.getElementById("password");
const strength = document.getElementById("strength");
const message = document.getElementById("message");
password.addEventListener("input", () => {
  if (password.value.length > 0) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
  if (password.value.length < 4) {
    strength.innerHTML = "Weak";

    strength.style.color = "red";
    inputBox.style.borderColor = "red";
  } else if (password.value.length >= 4 && password.value.length < 8) {
    strength.innerHTML = "Good";
    strength.style.color = "orange";
    inputBox.style.borderColor = "orange";
  } else if (password.value.length <= 8) {
    strength.innerHTML = "Strong";
    strength.style.color = "#2ff";
    inputBox.style.borderColor = "#2ff";
  }
});
