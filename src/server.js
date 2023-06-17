/**
 * 1 - Crear la app
 * 2 - Se ponen los middlewares.
 * 3 - Se ponen los middlewares de ruteo.
 * 
 * Esta app va a ser utilizada en ../index.js entonces se 
 * tiene que exportar.
 */
const express = require("express");

// 1 - Crear la app
const app = express();

// 2 - Poner los middlewares
app.use(express.json()) // Middlewares de parseo json.

// 3 - Middlewares de ruteo  -> WIP


module.exports = app;