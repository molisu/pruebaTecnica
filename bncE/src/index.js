const express = require('express');
const router = require('./routes/pokedexRouter')

const app = express();
// Asigno el puerto
const PORT = 3000;

app.use(express.json());
// Asigno ruta base, conecto con router
app.use('/api/pokedex', router);

// Creo servidor http
app.listen(PORT, () => 
    console.log("Server listening PORT: " + PORT));

module.exports = app;