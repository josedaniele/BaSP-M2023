//select the elements to manipulate

var email = document.querySelector("#email");
var password = document.querySelector("#password");
var buttonLogin = document.querySelector("#log-in-button");
var modalContainer = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var modalText = document.querySelector('#modal-text');

// create the events and functions

function emailValidation() {
  if (email.value === "") {
    return false;
  } else {
    return true;
  }
}

function passwordValidation() {
  if (
    password.value === ""
  ) {
    return false;
  } else {
    return true;
  }
}

function blurEmail() {
  if (emailValidation() === false) {
    email.insertAdjacentHTML(
      "afterend",
      '<div id="email-password-error" class="error-message">Email required</div>'
    );
  }
}

function blurPassword() {
  if (passwordValidation() === false) {
    password.insertAdjacentHTML(
      "afterend",
      '<div id="email-password-error" class="error-message">Password required</div>'
    );
  }
}

function focusInputEmailPassword() {
  if (document.querySelector("#email-password-error")) {
    document.querySelector("#email-password-error").remove();
  }
}
function fetchLogin(){

  fetch(`https://api-rest-server.vercel.app/login?email=${email.value}&password=${password.value}`)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      if(data.success===false){
        throw data.errors.msg;
      }else{
        modalText.innerHTML = 'Success request: '+ data.msg
        modalContainer.style.display = "block";
      }
    })
    .catch(function(){
      modalText.innerHTML = 'Error request: wrong email or password'
      modalContainer.style.display = "block";
    })
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalContainer.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalContainer) {
    modalContainer.style.display = "none";
  }
}

function onClickLogIn() {
  if (emailValidation() && passwordValidation() == true) {
    fetchLogin()
  } else {
    alert("Email and password required");
  }
}

email.addEventListener("blur", blurEmail);
email.addEventListener("focus", focusInputEmailPassword);
password.addEventListener("blur", blurPassword);
password.addEventListener("focus", focusInputEmailPassword);
buttonLogin.addEventListener("click", onClickLogIn);
