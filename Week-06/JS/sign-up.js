//select the elements to manipulate
var name1 = document.querySelector('#name');
var lastName = document.querySelector('#last-name');
var dni = document.querySelector('#dni');
var birthdate = document.querySelector('#birthdate');
var phoneNumber = document.querySelector('#phone-number');
var adress = document.querySelector('#adress');
var city = document.querySelector('#city');
var zipCode = document.querySelector('#zip-code');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var repeatPassword = document.querySelector('#repeat-password');

var buttonLogin = document.querySelector('#sign-up-button');
var emailRegex = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;

// create the events and functions

function nameValidation(){
    if (name1.value === "") {
        return 1;
    }else if (onlyLetters(name1.value) == false) {
        return 2;
    }else if (name1.value.length < 3){
        return 3;
    }else{
        return true;
    }
}


function lastNameValidation(){
    if (lastName.value === "") {
        return 1;
    }else if (onlyLetters(lastName.value) == false) {
        return 2;
    }else if (lastName.value.length < 3){
        return 3;
    }else{
        return true;
    }
}

function dniValidation(){
    if (dni.value === "") {
        return 1;
    }else if (isNaN(dni.value)) {
        return 2;
    }else if (dni.value.length === 7){
        return 3;
    }else{
        return true;
    }
}

function validateBirthdate(){
    if (birthdate.value === "") {
        return 1;
    }else{
        return true;
    }
}

function validatePhoneNumber() {
    Number(phoneNumber.value)
    if(phoneNumber.value === 0){
        return 1;
    }else if (Number.isInteger(phoneNumber.value)== false) {
        return 2;
    }else if (Number.length === 10) {
        return 3
    }else{
        return true;
    }
}

function validateAdress(){
    //this var is for the adress.When dont have two parts separated by space return the error
    var streetNumber = adress.value.split(" ");
    if (adress.value === "") {
        return 1;
    }else if (streetNumber.length !==2) {
        return 2;
    }else if(onlyLetters(streetNumber[0])== false && Number(streetNumber[2] == NaN)){
        return 3;
    }else{
        return true;
    }
}

function validateCity() {
    if (city.value === "") {
        return 1;
    }else if (city.value.length < 3 ) {
        return 2; 
    }else{
        return true;
    }   
}

function validateZipCode() {
    if (zipCode.value === "") {
        return 1;
    }else if (isNaN(zipCode.value)) {
        return 2;
    }else if (zipCode.value.length < 4 && zipCode.value.length >5 ){
        return 3;
    }else{
        return true;
    }

}
function validationEmail(){
    if (email.value ==="") {
        return 1;
       
    }else if (!emailRegex.test(email.value)) {
        return 2;

    }else{
        return true;

    }
}

function validationPassword(){
    if (password.value === "") {
        return 1;

    }else if (password.value.length < 8) {
        return 2;

    }else if (validateNumbersAndLetters(password.value) == false){
        return 3;

    }else{
        return true;

    }
}

function validatePasswordRepeat(){
    if (repeatPassword.value === "" ) {
        return 1;

    }else if (password.value !== repeatPassword.value) {
        return 1;

    }else{
        return true;

    }
}

function onlyLetters(stringTest){
    var i =0;
    do{
        if (!isNaN(stringTest[i])) {
            return false;
        }
        i++;

    }while(i < stringTest.length)
    return true;
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


