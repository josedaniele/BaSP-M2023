console.log("Functions");
/*
Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor
de dicha variable en la consola del navegador.
*/
console.log("6)a)");

function sum(a,b){
    return a+b;
}

var theSum= sum(5,5);
console.log(theSum);

/*
Copiar la función suma anterior y agregarle una validación para controlar si 
alguno de los parámetros no es un número; de no ser un número, mostrar un alert
aclarando que uno de los parámetros tiene error y retornar el valor NaN como 
resultado.
*/
console.log("6)b)");

function sumOnlyNumbers(a,b){
    if ( typeof a!='number' || typeof b !='number') {
        alert("One of the parameters is not a number");
        return NaN;
    }else{
        return a+b;
    }
}

var onlyNumbers= sumOnlyNumbers("10",10);
console.log(onlyNumbers);

/*
Crear una función “validateInteger” que reciba un número como parámetro y 
devuelva verdadero si es un número entero.
*/
console.log("6)c)");

function validateInteger(a){
    if (Number.isInteger(a)) {
        return true;
    }
}

var itsTrue = validateInteger(5);
console.log(itsTrue);

/*
Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a 
la función del ejercicio 6c. y que valide que los números sean enteros. En caso
que haya decimales mostrar un alert con el error y retornar el número
convertido a entero (redondeado).
*/
console.log("6)d)");

function roundingNumbers(a,b){
    if ( typeof a!='number' || typeof b !='number') {
        alert("One of the parameters is not a number");
        return NaN;
    }
    if (validateInteger(a) !=true) {
        alert("The parameter A its not a int");
        a=Math.round(a);
        console.log("converting A to int...",a);
    }
    if (validateInteger(b) !=true) {
        alert("The parameter B its not a int");
        b=Math.round(b);
        console.log("converting B to int...",b);
    }
    return a+b;
}

var onlyInts= roundingNumbers(6.9,4.5)
console.log(onlyInts)

/*Convertir la validación del ejercicio 6d) en una función separada y llamarla 
dentro de una nueva función probando que todo siga funcionando igual que en el 
apartado anterior.
*/
console.log("6)e)");
function insideOfTheFunction(a,b){
    return roundingNumbers(a,b);
}

var itsWork= insideOfTheFunction(5.5,9.8);
console.log(itsWork);