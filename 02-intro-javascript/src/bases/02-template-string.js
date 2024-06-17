//Template String
const nombre = 'Luis Alberto';
const apellido = 'Jimenez';

//Concatenación normal
//const nombreCompleto = nombre + ' ' + apellido;

//Template Strings
//const nombreCompleto = ` Hola Mundo! `;
const nombreCompleto = ` ${nombre} ${apellido}`;
;
function getSaludo(nombre) {
    return 'Hola ' + nombre
}

console.log(`Este es un texto : ${getSaludo(nombreCompleto)}`);