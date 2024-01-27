var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var phoneError = document.getElementById("number-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

  return true;
}

function validateNumber() {
  var PhoneNo = document.getElementById("contact-number").value;

  if (PhoneNo.length == 0) {
    phoneError.innerHTML = "Number is required";
    return false;
  }
  if (PhoneNo.length !== 10) {
    phoneError.innerHTML = "Phone number should be 10 digits";
    return false;
  }
  if (!PhoneNo.match(/^[ 0-9]{10}$/)) {
    phoneError.innerHTML = "Only digits please.";
    return false;
  }
  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
function validateEmail() {
  var email = document.getElementById("contact-email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Please enter your email";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Invalid Email";
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
function validateMessage() {
  var message = document.getElementById("contact-message").value;
  var required = 20;
  var left = required - message.length;
  if (left > 0) {
    messageError.innerHTML = `${left} charachters required`;

    return false;
  }
  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (
    !validateEmail() ||
    !validateMessage() ||
    !validateName() ||
    !validateNumber()
  ) {
    submitError.innerHTML = "Please correct the error";
    setTimeout(function () {
      submitError.innerHTML = "";
    }, 3000);
    return false;
  }
  return true;
}
