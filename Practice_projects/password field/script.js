let icon = document.getElementById("icon");
let password = document.getElementById("password");

console.log(icon);
console.log(password);

icon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    icon.src = "./eye-open.png";
  } else {
    password.type = "password";
    icon.src = "./eye-close.png";
  }
};
