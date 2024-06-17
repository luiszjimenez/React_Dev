//Funciones

const getSaludar = function (nombre){
    return `Hola,${nombre}`;
}


/*
    Funciones de Flecha

*/

const getSaludar2 = (nombre)=>{
    return `Hola,${nombre}`;
}

//Mas simplificado

const getSaludar3 = (nombre)=> `Hola,${nombre}`;
const getSaludar4 = ()=> `Hola Mundo`; //Valor PRIMITIVO - no necesita (); como getUser()

// console.log(getSaludar('Diana'));

console.log(getSaludar2('Ñoñostacio'))
console.log(getSaludar3('Ñoñostacio'))
console.log(getSaludar4());


const getUser = () => ({
        uid : 'ABC123',
        username : 'lujimenez'   
});

const user = getUser();
console.log(user);
/*TAREA
1.- Transformar en Funcion LAMNDA
2.- Tiene que retornar un objeto implícito
3.- Pruebas
function getUsuarioActivo (nombre){
    return {
        uid : 'ABC567',
        username : nombre   
    }
};
*/
const getUsuarioActivo = (nombre) => ({
    uid : 'ABC567',
    username : nombre
});


const usuarioActivo = getUsuarioActivo('d3m0n10')
console.log(usuarioActivo);