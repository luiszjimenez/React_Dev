//Desestructuracion Objetos
//Asignación Desestructurante
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre : 'Tony',
    edad : 45,
    clave: 'IronMan',
};

//const { nombre, edad, clave } = persona;

const setContext = ({clave,nombre,edad,rango='Capitan'}) => {
    //console.log(nombre,edad,rango)
    return {
        nombreClave : clave,
        anios:edad,
        latlng:{
            lat:14.1232,
            lng:-12.3225
        }
    }
};

const {nombreClave,anios,latlng:{lat,lng}} = setContext(persona);
console.log(nombreClave,anios)
console.log(lat,lng)

// console.log(nombre);
// console.log(edad);
// console.log(clave);