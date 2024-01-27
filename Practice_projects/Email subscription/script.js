const msg = document.getElementById("msg");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbw85XLAZglXmO26Jxi3d9VDahqg125xkMQGTI039kSwiouEIx8eSHwc1CORYfdiMNCNAA/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      setTimeout(function () {
        msg.innerHTML = "Thank You For Subscribing";
      }, 500);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
