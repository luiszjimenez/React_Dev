//Import / Funciones
import heroes,{owners} from '../data/heroes';

console.log(owners);
//Find - unico registro o seccion igual a ese dato
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
console.log(getHeroeById(2));


//Filter - Return Multiples similitudes
const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
console.log(getHeroeByOwner('Marvel'));
