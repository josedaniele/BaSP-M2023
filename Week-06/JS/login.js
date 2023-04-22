
//select the elements to manipulate

var email = document.querySelector('#email');
var password = document.querySelector('#password');
var buttonLogin = document.querySelector('#log-in-button');
var emailRegex = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;

// create the events and functions



function emailValidation(){
    if (email.value ==="") {
        email.insertAdjacentHTML('afterend', '<div id="email-error" class="error-message">Email required</div>');
        return false
       
    }else if (!emailRegex.test(email.value)) {
        email.insertAdjacentHTML('afterend', '<div id="email-error" class="error-message">Enter a valid e-mail address(for example juanalberto@gmail.com)</div>');
        return false
    }else{
        return true
    }
}

function passwordValidation(){
    if (password.value === "") {
        password.insertAdjacentHTML('afterend', '<div id="password-error" class="error-message">Password required</div>');
        return false;
    }else if (password.value.length < 8) {
        password.insertAdjacentHTML('afterend', '<div id="password-error" class="error-message">Password must be at least 8 characters</div>');
        return false
    }else if (validateNumbersAndLetters(password.value) == false){
        password.insertAdjacentHTML('afterend', '<div id="password-error" class="error-message">Password must contain letters and numbers</div>');
        return false
    }else{
        return true
    }
}
function validateNumbersAndLetters(passwordTest){
    var haveNumbers = false;
    var i =0;
    do{
        if (!isNaN(passwordTest[i])) {
            haveNumbers = true;
        }
        i++;

    }while(i < passwordTest.length && haveNumbers== false)

    if (haveNumbers == true && isNaN(passwordTest)){
        return true;
    }else{
        return false;
    }
}


function focusInputEmail(){
    if (document.querySelector('#email-error')) {
        document.querySelector('#email-error').remove();
    }
    
}
function focusInputPassword(){
    if (document.querySelector('#password-error')) {
        document.querySelector('#password-error').remove();
    }
}


function onClickLogIn(){
    if (passwordValidation() && emailValidation() == true) {
        alert('Email: '+email.value+"\nPassword: "+password.value);
    }else{
        alert("Email or password error");
    }
    focusInputEmail();
    focusInputPassword();
}

email.addEventListener("blur" ,emailValidation);
email.addEventListener("focus",focusInputEmail );
password.addEventListener("blur" ,passwordValidation);
password.addEventListener("focus",focusInputPassword);
buttonLogin.addEventListener("click", onClickLogIn);