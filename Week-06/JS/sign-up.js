//select the elements to manipulate
var name1 = document.querySelector("#name");
var lastName = document.querySelector("#last-name");
var dni = document.querySelector("#dni");
var birthdate = document.querySelector("#birthdate");
var phoneNumber = document.querySelector("#phone-number");
var adress = document.querySelector("#adress");
var city = document.querySelector("#city");
var zipCode = document.querySelector("#zip-code");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var repeatPassword = document.querySelector("#repeat-password");

var buttonLogin = document.querySelector("#sign-up-button");
var emailRegex = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;

//fucntions validation

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

function validateDni() {
  if (dni.value === "") {
    return 1;
  } else if (isNaN(dni.value)) {
    return 2;
  } else if (dni.value.length != 7) {
    return 3;
  } else {
    return true;
  }
}

function validateBirthdate() {
  if (birthdate.value === "") {
    return 1;
  } else {
    return true;
  }
}

function validatePhoneNumber() {
  var phoneTypeNumber = Number(phoneNumber.value);

  if (phoneNumber.value === "") {
    return 1;
  } else if (Number.isInteger(phoneTypeNumber) == false) {
    return 2;
  } else if (phoneNumber.value.length != 10) {
    return 3;
  } else {
    return true;
  }
}

function validateAdress() {
  //this var is for the adress.When dont have two parts separated by space return the error 3
  var streetAndNumber = adress.value.split(" ");

  if (adress.value === "") {
    return 1;
  } else if (adress.value.length < 5) {
    return 2;
  } else if (streetAndNumber.length !== 2) {
    return 3;
  } else if (
    onlyLetters(streetAndNumber[0]) == false ||isNaN(Number(streetAndNumber[1]))){
    return 4;
  } else {
    return true;
  }
}

function validateCity() {
  if (city.value === "") {
    return 1;
  } else if (city.value.length < 3) {
    return 2;
  } else {
    return true;
  }
}

function validateZipCode() {
  if (zipCode.value === "") {
    return 1;
  } else if (isNaN(zipCode.value)) {
    return 2;
  } else if (zipCode.value.length < 4 || zipCode.value.length > 5) {
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

function validatePassword() {
  if (password.value === "") {
    return 1;
  } else if (password.value.length < 8) {
    return 2;
  } else if (validateNumbersAndLetters(password.value) == false) {
    return 3;
  } else {
    return true;
  }
}

function validatePasswordRepeat() {
  if (repeatPassword.value === "") {
    return 1;
  } else if (password.value !== repeatPassword.value) {
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

// event functions whith messages error
function blurFunction(evt) {
  switch (evt) {
    case 1:
      var errorName = validateName();

      if (errorName === 1) {
        name1.insertAdjacentHTML(
          "afterend",
          '<div id="name-error" class="error-message">Name required</div>'
        );
      } else if (errorName === 2) {
        name1.insertAdjacentHTML(
          "afterend",
          '<div id="name-error" class="error-message">The name can only contain letters</div>'
        );
      } else if (errorName === 3) {
        name1.insertAdjacentHTML(
          "afterend",
          '<div id="name-error" class="error-message">The name must have a minimum of 3 letters</div>'
        );
      }
      break;
    case 2:
      var errorLastName = validateLastName();

      if (errorLastName === 1) {
        lastName.insertAdjacentHTML(
          "afterend",
          '<div id="lastName-error" class="error-message">Lastname required</div>'
        );
      } else if (errorLastName === 2) {
        lastName.insertAdjacentHTML(
          "afterend",
          '<div id="lastName-error" class="error-message">The lastname can only contain letters</div>'
        );
      } else if (errorLastName === 3) {
        lastName.insertAdjacentHTML(
          "afterend",
          '<div id="lastName-error" class="error-message">The lastname must have a minimum of 3 letters</div>'
        );
      }

      break;
    case 3:
      var errorDni = validateDni();

      if (errorDni === 1) {
        dni.insertAdjacentHTML(
          "afterend",
          '<div id="dni-error" class="error-message">DNI required</div>'
        );
      } else if (errorDni === 2) {
        dni.insertAdjacentHTML(
          "afterend",
          '<div id="dni-error" class="error-message">The DNI can only contain numbers</div>'
        );
      } else if (errorDni === 3) {
        dni.insertAdjacentHTML(
          "afterend",
          '<div id="dni-error" class="error-message">The DNI must be composed of 7 digits.</div>'
        );
      }

      break;
    case 4:
      var errorBirthdate = validateBirthdate();

      if (errorBirthdate === 1) {
        birthdate.insertAdjacentHTML(
          "afterend",
          '<div id="birthdate-error" class="error-message">Birthdate required</div>'
        );
      }

      break;
    case 5:
      var errorPhone = validatePhoneNumber();

      if (errorPhone === 1) {
        phoneNumber.insertAdjacentHTML(
          "afterend",
          '<div id="phone-error" class="error-message">Phone required</div>'
        );
      } else if (errorPhone === 2) {
        phoneNumber.insertAdjacentHTML(
          "afterend",
          '<div id="phone-error" class="error-message">The phone can only contain numbers</div>'
        );
      } else if (errorPhone === 3) {
        phoneNumber.insertAdjacentHTML(
          "afterend",
          '<div id="phone-error" class="error-message">The phone must be composed of 10 digits.</div>'
        );
      }

      break;
    case 6:
      var errorAdress = validateAdress();

      if (errorAdress === 1) {
        adress.insertAdjacentHTML(
          "afterend",
          '<div id="adress-error" class="error-message">Adress required</div>'
        );
      } else if (errorAdress === 2) {
        adress.insertAdjacentHTML(
          "afterend",
          '<div id="adress-error" class="error-message">The adress must have a minimum of 5 charcaters with letters and numbers</div>'
        );
      } else if (errorAdress === 3 || errorAdress == 4) {
        adress.insertAdjacentHTML(
          "afterend",
          '<div id="adress-error" class="error-message">The adress must start with letters and then the numbers separated by a space</div>'
        );
      }

      break;
    case 7:
      var errorCity = validateCity();

      if (errorCity === 1) {
        city.insertAdjacentHTML(
          "afterend",
          '<div id="city-error" class="error-message">City required</div>'
        );
      } else if (errorCity === 2) {
        city.insertAdjacentHTML(
          "afterend",
          '<div id="city-error" class="error-message">The city must have a minimum of 5  alphanumerics charcaters</div>'
        );
      }

      break;
    case 8:
      var errorZipCode = validateZipCode();

      if (errorZipCode === 1) {
        zipCode.insertAdjacentHTML(
          "afterend",
          '<div id="zip-code-error" class="error-message">Zip code required</div>'
        );
      } else if (errorZipCode === 2) {
        zipCode.insertAdjacentHTML(
          "afterend",
          '<div id="zip-code-error" class="error-message">The Zip code can only contain numbers</div>'
        );
      } else if (errorZipCode === 3) {
        zipCode.insertAdjacentHTML(
          "afterend",
          '<div id="zip-code-error" class="error-message">The Zip code must have between 4 and 5 digits</div>'
        );
      }

      break;
    case 9:
      var errorEmail = validateEmail();

      if (errorEmail === 1) {
        email.insertAdjacentHTML(
          "afterend",
          '<div id="email-error" class="error-message">Email required</div>'
        );
      } else if (errorEmail === 2) {
        email.insertAdjacentHTML(
          "afterend",
          '<div id="email-error" class="error-message">Enter a valid e-mail address(for example juanalberto@gmail.com)</div>'
        );
      }

      break;
    case 10:
      var errorPassword = validatePassword();

      if (errorPassword === 1) {
        password.insertAdjacentHTML(
          "afterend",
          '<div id="password-error" class="error-message">Password required</div>'
        );
      } else if (errorPassword === 2) {
        password.insertAdjacentHTML(
          "afterend",
          '<div id="password-error" class="error-message">Password must be at least 8 characters</div>'
        );
      } else if (errorPassword === 3) {
        password.insertAdjacentHTML(
          "afterend",
          '<div id="password-error" class="error-message">Password must contain letters and numbers</div>'
        );
      }

      break;
    case 11:
      var errorRepeatPassword = validatePasswordRepeat();

      if (errorRepeatPassword === 1) {
        repeatPassword.insertAdjacentHTML(
          "afterend",
          '<div id="repeat-password-error" class="error-message">Field required</div>'
        );
      } else if (errorRepeatPassword === 2) {
        repeatPassword.insertAdjacentHTML(
          "afterend",
          '<div id="repeat-password-error" class="error-message">Passwords dont match </div>'
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
dni.addEventListener("blur", function () {
  blurFunction(3);
});
dni.addEventListener("focus", function () {
  focusFunction("dni");
});
birthdate.addEventListener("blur", function () {
  blurFunction(4);
});
birthdate.addEventListener("focus", function () {
  focusFunction("birthdate");
});
phoneNumber.addEventListener("blur", function () {
  blurFunction(5);
});
phoneNumber.addEventListener("focus", function () {
  focusFunction("phone");
});
adress.addEventListener("blur", function () {
  blurFunction(6);
});
adress.addEventListener("focus", function () {
  focusFunction("adress");
});
city.addEventListener("blur", function () {
  blurFunction(7);
});
city.addEventListener("focus", function () {
  focusFunction("city");
});
zipCode.addEventListener("blur", function () {
  blurFunction(8);
});
zipCode.addEventListener("focus", function () {
  focusFunction("zip-code");
});
email.addEventListener("blur", function () {
  blurFunction(9);
});
email.addEventListener("focus", function () {
  focusFunction("email");
});
password.addEventListener("blur", function () {
  blurFunction(10);
});
password.addEventListener("focus", function () {
  focusFunction("password");
});
repeatPassword.addEventListener("blur", function () {
  blurFunction();
});
repeatPassword.addEventListener("focus", function () {
  focusFunction("repeat-password");
});
