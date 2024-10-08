
console.log("Aqui empiesa ejercicio 03");

/*Exercise #3
Sugerencia reduce()
Escribe un programa para calcular la suma y el producto (multiplicación) de una serie de números. Imprime la suma y el producto.
Ejemplo: Dada una matriz [1, 2, 3, 4] La suma es 10. El producto es 24.
*/

let sumaTotal = [ 1, 2, 3, 4].reduce(function (a, b) {
  return a + b;
}); 
   
console.log ("Suma es igual a " ,sumaTotal);// 10

let multiTotal = [ 1, 2, 3, 4].reduce(function (a, b) {
  return a * b;
});
console.log( "Producto es igual a " ,multiTotal); // 24
