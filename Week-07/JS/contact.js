var name1 = document.querySelector("#name");
var lastName = document.querySelector("#lastname");
var email = document.querySelector("#email");
var contactReason = document.querySelector("#contact-reason");
var message = document.querySelector("#message");

var submitButtonContact = document.querySelector("#submit-button-contact");
var emailRegex = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;
// functions validation

function validateName() {
  if (name1.value === "") {
    return 1;
  } else if (onlyLetters(name1.value) == false) {
    return 2;
  } else if (name1.value.length < 3) {
    return 3;
  } else {
    return true;
  }
}

function validateLastName() {
  if (lastName.value === "") {
    return 1;
  } else if (onlyLetters(lastName.value) == false) {
    return 2;
  } else if (lastName.value.length < 3) {
    return 3;
  } else {
    return true;
  }
}

function validateEmail() {
  if (email.value === "") {
    return 1;
  } else if (!emailRegex.test(email.value)) {
    return 2;
  } else {
    return true;
  }
}


function validateMessage() {
  if (message.value == "") {
    return 1;
  }else if (message.value.length < 15) {
    return 2;
} else {
    return true;
  }
}
//secondary validations
function onlyLetters(stringTest) {
  var i = 0;
  do {
    if (!isNaN(stringTest[i])) {
      return false;
    }
    i++;
  } while (i < stringTest.length);
  return true;
}

// event functions whith messages error

function blurFunction(evt) {
  switch (evt) {
    case 1:
      var errorName = validateName();

      if (errorName === 1) {
        name1.insertAdjacentHTML(
          "afterend",
          '<span id="name-error" class="error-message">Name required</span>'
        );
      } else if (errorName === 2) {
        name1.insertAdjacentHTML(
          "afterend",
          '<span id="name-error" class="error-message">The name can only contain letters</span>'
        );
      } else if (errorName === 3) {
        name1.insertAdjacentHTML(
          "afterend",
          '<span id="name-error" class="error-message">The name must have a minimum of 3 letters</span>'
        );
      }
      break;
    case 2:
      var errorLastName = validateLastName();

      if (errorLastName === 1) {
        lastName.insertAdjacentHTML(
          "afterend",
          '<span id="lastName-error" class="error-message">Lastname required</span>'
        );
      } else if (errorLastName === 2) {
        lastName.insertAdjacentHTML(
          "afterend",
          '<span id="lastName-error" class="error-message">The lastname can only contain letters</span>'
        );
      } else if (errorLastName === 3) {
        lastName.insertAdjacentHTML(
          "afterend",
          '<span id="lastName-error" class="error-message">The lastname must have a minimum of 3 letters</span>'
        );
      }
      break;
    case 3:
      var errorEmail = validateEmail();

      if (errorEmail === 1) {
        email.insertAdjacentHTML(
          "afterend",
          '<span id="email-error" class="error-message">Email required</span>'
        );
      } else if (errorEmail === 2) {
        email.insertAdjacentHTML(
          "afterend",
          '<span id="email-error" class="error-message">Enter a valid e-mail address(for example juanalberto@gmail.com)</span>'
        );
      }
      break;
    case 4:
      var errorMessage = validateMessage();
      if (errorMessage === 1) {
        message.insertAdjacentHTML(
          "afterend",
          '<span id="message-error" class="error-message">Message required</span>'
        );
      }else if (errorMessage === 2) {
        message.insertAdjacentHTML(
            "afterend",
            '<span id="message-error" class="error-message">The message must have a minimum of 15 characters</span>'
          );
      }
      break;
    default:
      break;
  }
}

function focusFunction(evt) {
  if (document.querySelector("#" + evt + "-error")) {
    document.querySelector("#" + evt + "-error").remove();
  }
}

function buttonSignUpClick(event) {
    event.preventDefault();
  if (
    validateName() ===true &&
    validateLastName() === true &&
    validateEmail() ===true &&
    validateMessage() === true
  ) {
    alert(
      "Name: " +
        name1.value +
        "\nLastName: " +
        lastName.value +
        "\nEmail: " +
        email.value +
        "\nContact Reason: " +
        contactReason.value +
        "\nMessage: " +
        message.value 

    );
  } else {
    alert("Fill in all the fields correctly");
  }
}
name1.addEventListener("blur", function () {
    blurFunction(1);
  });
  name1.addEventListener("focus", function () {
    focusFunction("name");
  });
  lastName.addEventListener("blur", function () {
    blurFunction(2);
  });
  lastName.addEventListener("focus", function () {
    focusFunction("lastName");
  });
  email.addEventListener("blur", function () {
    blurFunction(3);
  });
  email.addEventListener("focus", function () {
    focusFunction("email");
  });
  message.addEventListener("blur", function () {
    blurFunction(4);
  });
  message.addEventListener("focus", function () {
    focusFunction("message");
  });

  submitButtonContact.addEventListener("click", buttonSignUpClick);