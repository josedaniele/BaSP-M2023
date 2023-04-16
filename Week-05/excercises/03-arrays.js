
console.log("Arrays");

/*
Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"
, "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar
por consola los meses 5 y 11 (utilizar console.log).
*/
console.log("3)a)");

let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(months[4],months[10]);

/*Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
console.log("3)b)");

orderAlphabetically= months.slice().sort();

console.log(orderAlphabetically);

/*
Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/
console.log("3)c)");

months.unshift("FirstMonth");
months.push("LastMonth");

console.log(months);

/*
Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/
console.log("3)d)");

months.shift();
months.pop();

console.log(months);

/*
Invertir el orden del array (utilizar reverse).
*/
console.log("3)e)");

backwardsMonths= months.slice().reverse();

console.log(backwardsMonths);

/*
Unir todos los elementos del array en un único string donde cada mes este separado
por un guión - (utilizar join).
*/
console.log("3)f)");

var monthsString =months.join("-");

console.log(monthsString);

/*
Crear una copia del array de meses que contenga desde Mayo hasta Noviembre 
(utilizar slice)
*/
console.log("3)g)");

mayToNovember= months.slice(4,11);

console.log(mayToNovember);

