
console.log("Aqui empieza ejercicio 05");
/*Exercise #5
Para cada uno de los ejercicios siguientes, suponga que está comenzando con la siguiente matriz de personas.*/
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
//1. Escriba un comando que imprima todas las personas de la lista.
console.log(people);
//2. Escriba el comando para eliminar "Dani" de la matriz.
console.log(people.splice(1, 1)); //Dani
console.log(people); // ["Maria", "Luis", "Juan", "Camila"];
//3. Escriba el comando para eliminar "Juan" de la matriz.
console.log(people.splice(2, 1)); //Juan
console.log(people); // ["Maria", "Luis", "Camila"];
//4.Escribe el comando para mover "Luis" al frente del arreglo.
console.log( people.splice(1,1));//Luis
console.log(people.unshift("Luis"));//Luis
console.log(people);//["Luis", "Maria", "Camila"];
//5. Escriba el comando para agregar su nombre al final de la matriz.
console.log(people.push("Vanessa"));
console.log(people);
//6. Usando un bucle, repita esta matriz y después de console.log "Maria", salga del bucle.
for (let i = 0; i<people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Maria") {
      break;
  }
}
//7. Escribe el comando que da el indexOf donde se encuentra "Maria".
console.log(people.indexOf("Maria")); //1

//Al final del ejercicio, debería haber 4 personas en la formación. 
console.log("Al final las personas que quedan son ",people); 
//['Luis', 'Maria', 'Camila', 'Vanessa']