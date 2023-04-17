console.log("For");
/*
Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle
for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
*/
console.log("5)a)");

var fiveWords=["theStrokes","parcels","oasis","theKillers","theSmiths"];

for (var index = 0; index <= 4; index++) {
    alert(fiveWords[index]);  
};

/*
Al array anterior convertir la primera letra de cada palabra en mayúscula y 
mostrar una alerta por cada palabra modificada.
*/
console.log("5)b)");

for (var index = 0; index <= 4; index++) {
    var firstLetterUpper=fiveWords[index].substring(0,1).toUpperCase()+ fiveWords[index].substring(1);
    alert(firstLetterUpper);
};
/*
Crear una variable llamada “sentence” que tenga un string vacío, luego al array
del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro
de la variable sentence. Al final mostrar una única alerta con la cadena completa.
*/
console.log("5)c)");

var sentence= "";

for (var index = 0; index <= 4; index++) {
    sentence +=fiveWords[index];  
};

alert(sentence);

/*
Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con
el número de la repetición, es decir que al final de la ejecución del bucle for
debería haber 10 elementos dentro del array, desde el número 0 hasta al número9.
Mostrar por la consola del navegador el array final (utilizar console.log).
*/
console.log("5)d)");

var cleanArray=[];
for (var index = 0; index <10 ; index++) {
    cleanArray[index] = index;
    
}
console.log(cleanArray);
