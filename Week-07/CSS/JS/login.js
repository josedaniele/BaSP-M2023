//select the elements to manipulate

var email = document.querySelector("#email");
var password = document.querySelector("#password");
var buttonLogin = document.querySelector("#log-in-button");
var emailRegex = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;

// create the events and functions

function emailValidation() {
  if (email.value === "" || !emailRegex.test(email.value)) {
    return false;
  } else {
    return true;
  }
}

function passwordValidation() {
  if (
    password.value === "" ||
    password.value.length < 8 ||
    validateNumbersAndLetters(password.value) == false
  ) {
    return false;
  } else {
    return true;
  }
}
function validateNumbersAndLetters(passwordTest) {
  var haveNumbers = false;
  var i = 0;
  do {
    if (!isNaN(passwordTest[i])) {
      haveNumbers = true;
    }
    i++;
  } while (i < passwordTest.length && haveNumbers == false);

  if (haveNumbers == true && isNaN(passwordTest)) {
    return true;
  } else {
    return false;
  }
}

function blurEmail() {
  if (emailValidation() === false) {
    password.insertAdjacentHTML(
      "afterend",
      '<div id="email-password-error" class="error-message">Email or password incorrect</div>'
    );
  }
}

function blurPassword() {
  if (passwordValidation() === false) {
    password.insertAdjacentHTML(
      "afterend",
      '<div id="email-password-error" class="error-message">Email or password incorrect</div>'
    );
  }
}

function focusInputEmailPassword() {
  if (document.querySelector("#email-password-error")) {
    document.querySelector("#email-password-error").remove();
  }
}

function onClickLogIn() {
  if (emailValidation() && passwordValidation() == true) {
    alert("Email: " + email.value + "\nPassword: " + password.value);
  } else {
    alert("Email or password error");
  }
}

email.addEventListener("blur", blurEmail);
email.addEventListener("focus", focusInputEmailPassword);
password.addEventListener("blur", blurPassword);
password.addEventListener("focus", focusInputEmailPassword);
buttonLogin.addEventListener("click", onClickLogIn);
