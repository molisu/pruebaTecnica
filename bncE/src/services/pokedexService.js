const db = require('../database/db');

/** Para llamar a función que solicita la data. A su vez 
 * recibirla y procesar los status y enviarlos junto con 
 * data recibida o enviando error, según corresponda. */
const getAllPoke = (req, res) => {
    db.getPokemonsApiData().then(data => {
        // Enviamos el campo 'name' de cada pokemón
        res.status(200).send(data['name']);
    }).catch(error => {
        console.log(error);
        res.status(500).send(error);
    });
};

/** Para llamar a función que solicita la data, enviando 
 * parametro 'ID' por 'req'. Recibiendo respuesta y procesando 
 * los 'status' y enviarlos junto con data recibida o enviando 
 * error, según corresponda. */
const getSkillsById = (req, res) => {
    db.getSkillsByIdApiData(req).then(data => {
        res.status(200).send(data);
    }).catch(error => {
        console.log(error);
        res.status(500).send(error);
    });
};

module.exports = { getAllPoke, getSkillsById };