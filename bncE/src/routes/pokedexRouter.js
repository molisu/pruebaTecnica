const express = require('express');

const router = express.Router();
const controller = require('../controllers/pokedexController.js');

router
    /** GET 
     * para traer lista de Pokemons */
    .get('/', controller.getAllPokemon)
    /** GET 
     * con ID por body, para traer habilidades
     * de un pokemon por id */
    .get('/habilidades', (req, res) => { 
        const pokeId = req.body.id;
        controller.getSkillsById(pokeId, res) 
    })
    
module.exports = router;