
console.log("Strings");

/*
Crear una variable de tipo string con al menos 10 caracteres y convertir todo 
el texto en mayúscula (utilizar toUpperCase).
*/

console.log("2)a)");

var theForceOfTheUpperCase="this-text-is-in-uppercase";
var theForceOfTheUpperCase= theForceOfTheUpperCase.toUpperCase();

console.log(theForceOfTheUpperCase);

/*
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los primeros 5 caracteres guardando el resultado en una nueva
variable (utilizar substring).
*/

console.log("2)b)");

var textComplete= "Hello-Mr.Robot";
var textShort= textComplete.substring(0,5);

console.log(textShort);

/*
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los últimos 3 caracteres guardando el resultado en una nueva
variable (utilizar substring).
*/

console.log("2)c)");

textShort= textComplete.substring(textComplete.length-3);

console.log(textShort);

/*
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con la primera letra en mayúscula y las demás en minúscula. Guardar el 
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase 
y el operador +).
*/

console.log("2)d)");

var textOriginal="pROGRAMMING";
var firstLetterUpper=textOriginal.substring(0,1).toUpperCase()
var restText=textOriginal.substring(1).toLowerCase();
var newText= firstLetterUpper+restText;

console.log(newText);

/*
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una 
variable (utilizar indexOf).
*/

console.log("2)e)");

var stringSpace ="Ilove Javascript"
var spaceIndex= stringSpace.indexOf(" ");
console.log(spaceIndex);

/*
Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres
y algún espacio entre medio). Utilizar los métodos de los ejercicios 
anteriores para generar un nuevo string que tenga la primera letra de 
ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, 
substring, toUpperCase, toLowerCase y el operador +).
*/

console.log("2)f)");

var longString = "programming facebookPage";
//save the position of the space
spaceIndex= longString.indexOf(" ");
//change the first letter of the words to uppercase
var firstWordUpper= longString.substring(0,1).toUpperCase();
var secondWordUpper= longString.substring(spaceIndex+1,spaceIndex+2).toUpperCase();
//I concatenate the rest of the string in lower case and store it in a variable
firstWordUpper = firstWordUpper + longString.substring(1,spaceIndex).toLowerCase();
secondWordUpper = secondWordUpper + longString.substring(spaceIndex+2).toLowerCase();

console.log(firstWordUpper+secondWordUpper);
