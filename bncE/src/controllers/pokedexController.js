const service = require('../services/pokedexService');

/** Llamada a servicio para obtener lista de pokemóns */
const getAllPokemon = (req, res) => {
    service.getAllPoke(req, res);
};
    
/** Llamada a servicio para obtener habilidades de un pokemón 
 * según 'ID' */
const getSkillsById = (req, res) => {
    service.getSkillsById(req, res);
}

module.exports = { getAllPokemon, getSkillsById };