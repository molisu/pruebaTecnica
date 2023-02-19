const axios = require('axios');

/** Función con librería axios para solicitar por método 'GET' los 
 * datos de pokemon a pokeAPI. Reenviando la data o manejando el 
 * error. */
const getPokemonsApiData = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return error;
        });
};

/** Función con librería axios enviando parametro 'pokeID' para 
 * solicitar por método 'GET' las habilidades de pokemon especifico 
 * según 'ID' a pokeAPI. Reenviando la data o manejando el error. */
const getSkillsByIdApiData = (pokeId) => {
    return axios.get(`https://pokeapi.co/api/v2/ability/${pokeId}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return error;
        });
};

module.exports = { getPokemonsApiData, getSkillsByIdApiData };