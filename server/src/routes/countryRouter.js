const { Router } = require("express");
const express = require("express");
const {getCountryHandler,getCountryDetail,getCountryDetailName} = require("../handler/countryHandler");
const countriesrouter = Router();
countriesrouter.use(express.json());


countriesrouter.get('/',getCountryHandler);
// Ruta para obtener el detalle de un país por su ID
countriesrouter.get('/id/:id', getCountryDetail);

// Ruta para obtener el detalle de un país por su nombre
countriesrouter.get('/name/:name', getCountryDetailName);


 module.exports = countriesrouter;