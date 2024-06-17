//Variables y Constantes
//No es recomendable usar var


const nombre = 'Luisz';
const apellido = 'Jimenez';

let valorDato = 5;
//let valorDato =4; -> No es correcto esto, ya que esta definido
valorDato =4;
console.log(nombre,apellido,valorDato);

//Esto es posible, ya que son variables de Scope
if(true){
    const nombre = 'Diana';
    let valorDato = 7;
    console.log(valorDato)
    console.log(nombre);
}

console.log(valorDato);