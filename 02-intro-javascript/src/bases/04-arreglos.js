/**Arreglos - Informacion dentro de una misma Variable
const arreglo = new Array()
No recomenado, a menos que sean de tamaño fijo o predeterminado
pero no dice que pone un candado, si usamos arreglo.push(1), que anexa un campo mas
 
Tambien no es recomendable usar el Push, ya que modifica el valor
Entonces lo declaramos así;
**/
const arreglo = [1,2,3,4];

let arreglo2 = [...arreglo,5];

const arreglo3 = arreglo2.map( function(numero){
    return numero * 2;
});


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

//Documentacion Util - https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map