
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









//Exercise #4 
//(sugerencia filter() e includes())
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];


  

//console.log(student1Courses.includes(student2Courses));
//Cree un programa que recorra las 2 matrices; Si hay cursos comunes, imprímalos en la consola.

//Exercise #5
// Para cada uno de los ejercicios siguientes, suponga que está comenzando con la siguiente matriz de personas.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
//1. Escriba un comando que imprima todas las personas de la lista.
console.log(people);
//2. Escriba el comando para eliminar "Dani" de la matriz.
console.log( people.splice(1,1 ));//Dani
console.log(people);// ["Maria", "Luis", "Juan", "Camila"];
//3. Escriba el comando para eliminar "Juan" de la matriz.
console.log( people.splice(2,1 ));//Juan
console.log(people);// ["Maria", "Luis", "Camila"];
//4.Escribe el comando para mover "Luis" al frente del arreglo.
console.log( people.splice(1,1));//Luis
console.log(people.unshift("Luis"));//Luis
console.log(people);//["Luis", "Maria", "Camila"];
//5. Escriba el comando para agregar su nombre al final de la matriz.
console.log(people.push("Vanessa"));
console.log(people);
//6. Usando un bucle, repita esta matriz y después de console.log "Maria", salga del bucle.
const people1 = people.slice();
console.log(people1.shift());//
console.log(people1);
//7. Escribe el comando que da el indexOf donde se encuentra "Maria".

//Al final del ejercicio, debería haber 4 personas en la formación. 
console.log(people1);