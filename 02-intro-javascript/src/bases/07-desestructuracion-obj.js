//Desestructuracion de arreglos
const personajes = ['Luis','Neto','Gael']

/*
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);
*/

const [ , , p3 ] = personajes;

console.log( p3 );

const retornaArreglo = () =>{
    return ['ABC',123];
}

const [ letras,numeros ] = retornaArreglo();

console.log(letras);
console.log(numeros);

//TAREA
//1.- Primer valor del arreglo - Nombre
//2.- Se llamara setNombre
const setState = (valor) =>{
    return [valor,()=>{console.log('Hola mundo')}];
}
const arr = setState('Goku');
console.log(arr);

const [nombre,func] = setState('Luis');
console.log(nombre)
func();