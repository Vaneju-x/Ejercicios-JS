
/*Exercise #2 
sugerencia map())
Escribe una función que:
● Acepta una serie de números.
● Duplica el valor de cada número en la matriz.
● Imprime la nueva matriz actualizada.
Ejemplo: Dada una matriz [1, 2, 4, 5]. La salida debe ser [2, 4, 8, 10]*/
console.log("Aqui empiesa ejercicio 02");

let  matriz = [1, 2, 4, 5];
  let duplicar = matriz.map((matriz) => {
    return matriz * 2;
    });
console.log("Matriz inicial",matriz);// [1, 2, 4, 5]
console.log("Matriz duplicada",duplicar); //[2, 4, 6, 8, 10]
 