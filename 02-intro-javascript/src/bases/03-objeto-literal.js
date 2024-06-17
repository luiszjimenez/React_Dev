//Objetos Literales
const persona = {
    nombre:'Luis',
    apellido:'Jimenez',
    edad:29,
    direccion:{
        ciudad:'Cancun',
        cp:77510,
        lat:14.322,
        lng:34.1312
    }
};
//console.table(persona) -> Funcion de utilidad, de visualizacion
console.log({persona});

//Copiar Estructura de un modelo de Datos Operador Spreet
const persona2 = {...persona};
persona2.nombre = 'Kratos'

console.log({persona2});