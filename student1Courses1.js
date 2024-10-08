/* Exercise #4
(sugerencia filter() e includes())
Cree un programa que recorra las 2 matrices; Si hay cursos comunes, imprímalos en la consola.*/
console.log("Aqui empieza ejercicio 04");
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
function findCommonCourses(course1, course2) {
  let commonCourses = course1.filter(function (curso) {
    return course2.includes(curso);
  });
  console.log("Curso en común: ", commonCourses); //['Programming'] 
}
;
findCommonCourses(student1Courses, student2Courses);
