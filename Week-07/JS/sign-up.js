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
var buttonSignUp = document.querySelector("#sign-up-button");
var emailRegex = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;

var modalContainer = document.getElementById("myModal");
var modalText = document.getElementById("modal-text");
var span = document.getElementsByClassName("close")[0];


//localStorage get items
var savedData = localStorage.getItem('formData');
if (savedData !== null) {
  var data = JSON.parse(savedData);
  name1.value= data.name;
  lastName.value= data.lastName;
  dni.value= data.dni;
  birthdate.value= data.birthdate;
  phoneNumber.value= data.phoneNumber;
  adress.value= data.adress;
  city.value= data.city;
  zipCode.value= data.zipCode;
  email.value= data.email;
  password.value= data.password;
  repeatPassword.value= data.password;
}
//fucntions validation
//The numbers returned by each validation are for entering the specific error message
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
  } else if (dni.value.length < 7) {
    return 3;
  } else {
    return true;
  }
}

function validateBirthdate() {
  var splitDate = birthdate.value.split('-');
  var year = parseInt(splitDate[0], 10);
  var month = parseInt(splitDate[1], 10);
  var day = parseInt(splitDate[2], 10);
  var birthdateValue= new Date(year, month - 1, day);
  var currentDate = new Date();
  if (birthdate.value === "") {
    return 1;
  }else if (birthdateValue > currentDate) {
    return 2;
  }else {
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
    onlyLetters(streetAndNumber[0]) == false ||isNaN(Number(streetAndNumber[1]))
  ) {
    return 4;
  } else {
    return true;
  }
}

function validateCity() {
  if (city.value === "") {
    return 1;
  } else if (city.value.length < 5) {
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
  } else if (password.value != repeatPassword.value) {
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
      var errorDni = validateDni();

      if (errorDni === 1) {
        dni.insertAdjacentHTML(
          "afterend",
          '<span id="dni-error" class="error-message">DNI required</span>'
        );
      } else if (errorDni === 2) {
        dni.insertAdjacentHTML(
          "afterend",
          '<span id="dni-error" class="error-message">The DNI can only contain numbers</span>'
        );
      } else if (errorDni === 3) {
        dni.insertAdjacentHTML(
          "afterend",
          '<span id="dni-error" class="error-message">The DNI must  have a minimum of 7 digits.</span>'
        );
      }

      break;
    case 4:
      var errorBirthdate = validateBirthdate();

      if (errorBirthdate === 1) {
        birthdate.insertAdjacentHTML(
          "afterend",
          '<span id="birthdate-error" class="error-message">Birthdate required</span>'
        );
      }else if (errorBirthdate ===2) {
        birthdate.insertAdjacentHTML(
          "afterend",
          '<span id="birthdate-error" class="error-message">The birthdate cannot be later than the current date.</span>'
        );
      }

      break;
    case 5:
      var errorPhone = validatePhoneNumber();

      if (errorPhone === 1) {
        phoneNumber.insertAdjacentHTML(
          "afterend",
          '<span id="phone-error" class="error-message">Phone required</span>'
        );
      } else if (errorPhone === 2) {
        phoneNumber.insertAdjacentHTML(
          "afterend",
          '<span id="phone-error" class="error-message">The phone can only contain numbers</span>'
        );
      } else if (errorPhone === 3) {
        phoneNumber.insertAdjacentHTML(
          "afterend",
          '<span id="phone-error" class="error-message">The phone must be composed of 10 digits.</span>'
        );
      }

      break;
    case 6:
      var errorAdress = validateAdress();

      if (errorAdress === 1) {
        adress.insertAdjacentHTML(
          "afterend",
          '<span id="adress-error" class="error-message">Adress required</span>'
        );
      } else if (errorAdress === 2) {
        adress.insertAdjacentHTML(
          "afterend",
          '<span id="adress-error" class="error-message">The adress must have a minimum of 5 charcaters with letters and numbers</span>'
        );
      } else if (errorAdress === 3 || errorAdress == 4) {
        adress.insertAdjacentHTML(
          "afterend",
          '<span id="adress-error" class="error-message">The adress must start with letters and then the numbers separated by a space</span>'
        );
      }

      break;
    case 7:
      var errorCity = validateCity();

      if (errorCity === 1) {
        city.insertAdjacentHTML(
          "afterend",
          '<span id="city-error" class="error-message">City required</span>'
        );
      } else if (errorCity === 2) {
        city.insertAdjacentHTML(
          "afterend",
          '<span id="city-error" class="error-message">The city must have a minimum of 5  alphanumerics charcaters</span>'
        );
      }

      break;
    case 8:
      var errorZipCode = validateZipCode();

      if (errorZipCode === 1) {
        zipCode.insertAdjacentHTML(
          "afterend",
          '<span id="zip-code-error" class="error-message">Zip code required</span>'
        );
      } else if (errorZipCode === 2) {
        zipCode.insertAdjacentHTML(
          "afterend",
          '<span id="zip-code-error" class="error-message">The Zip code can only contain numbers</span>'
        );
      } else if (errorZipCode === 3) {
        zipCode.insertAdjacentHTML(
          "afterend",
          '<span id="zip-code-error" class="error-message">The Zip code must have between 4 and 5 digits</span>'
        );
      }

      break;
    case 9:
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
    case 10:
      var errorPassword = validatePassword();

      if (errorPassword === 1) {
        password.insertAdjacentHTML(
          "afterend",
          '<span id="password-error" class="error-message">Password required</span>'
        );
      } else if (errorPassword === 2) {
        password.insertAdjacentHTML(
          "afterend",
          '<span id="password-error" class="error-message">Password must be at least 8 characters</span>'
        );
      } else if (errorPassword === 3) {
        password.insertAdjacentHTML(
          "afterend",
          '<span id="password-error" class="error-message">Password must contain letters and numbers</span>'
        );
      }

      break;
    case 11:
      var errorRepeatPassword = validatePasswordRepeat();

      if (errorRepeatPassword === 1) {
        repeatPassword.insertAdjacentHTML(
          "afterend",
          '<span id="repeat-password-error" class="error-message">Field required</span>'
        );
      } else if (errorRepeatPassword === 2) {
        repeatPassword.insertAdjacentHTML(
          "afterend",
          '<span id="repeat-password-error" class="error-message">Passwords dont match </span>'
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

function fetchSignUp(){
  //change the birthdate to mm/dd/yyyy before to the request
  var birthdateValue = new Date(birthdate.value);
  var day = (birthdateValue.getDate() + 1).toString().padStart(2, '0');
  var month = (birthdateValue.getMonth() + 1).toString().padStart(2, '0');
  var year = birthdateValue.getFullYear();
  birthdateValue = `${month}/${day}/${year}`;
  //request
  fetch(`https://api-rest-server.vercel.app/signup?name=${name1.value}&lastName=${lastName.value}&dni=${dni.value}&dob=${birthdateValue}&phone=${phoneNumber.value}&address=${adress.value}&city=${city.value}&zip=${zipCode.value}&email=${email.value}&password=${password.value}`)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    if(data.success===false){
      throw data.errors;
    }else{
      modalText.insertAdjacentHTML(
        "beforeend", `<p class = "close-item">Success request: ${data.msg}</p>`)
      modalContainer.style.display = "block";
    }
  })
  .then(function(){
    //create object
    var data = {
      name: name1.value,
      lastName: lastName.value,
      dni: dni.value,
      birthdate: birthdate.value,
      phoneNumber: phoneNumber.value,
      adress: adress.value,
      city: city.value,
      zipCode: zipCode.value,
      email: email.value,
      password: password.value
    };
    // Convert object to JSON and save to localStorage
    localStorage.setItem('formData', JSON.stringify(data));
  })
  .catch(function(errors){
    modalText.insertAdjacentHTML(
        "beforeend", `<p class ="close-item">Error request:</p>`)
    for (var i = 0; i < errors.length; i++) {
      modalText.insertAdjacentHTML(
        "beforeend", `<p class ="close-item">${errors[i].msg}</p>`)
    }
    modalContainer.style.display = "block";
  })
}

/* 
When the user clicks on <span> (x), close the modal and 
remove error messages from the modal to avoid repetition
*/
span.onclick = function() {
  modalContainer.style.display = "none";
  if (document.querySelector(".close-item")) {
    var elementos = document.querySelectorAll('.close-item');
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].remove();
    }
  }
}
/* When the user clicks anywhere outside of the modal, close it and
 remove error messages from the modal to avoid repetition
*/
window.onclick = function(event) {
  if (event.target == modalContainer) {
    modalContainer.style.display = "none";
    if (document.querySelector(".close-item")) {
      var elementos = document.querySelectorAll('.close-item');
      for (let i = 0; i < elementos.length; i++) {
        elementos[i].remove();
      }
    }
  }
}

function buttonSignUpClick() {
  if (
    validateName() === true &&
    validateLastName() === true &&
    validateDni() === true &&
    validateBirthdate() &&
    validatePhoneNumber() === true &&
    validateAdress() === true &&
    validateCity() === true &&
    validateZipCode() === true &&
    validateEmail() === true &&
    validatePassword() === true &&
    validatePasswordRepeat() === true
  ) {
    fetchSignUp();
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
  blurFunction(11);
});
repeatPassword.addEventListener("focus", function () {
  focusFunction("repeat-password");
});

buttonSignUp.addEventListener("click", buttonSignUpClick);
