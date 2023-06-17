/**
 * 
 * 1 - Conectarnos a la base de datos.   /// check
 * 2 - Levantar la app (aqui no se crea la app!!!!)
 */
// Hacermos que todo lo de .env se pase a process.env
require("dotenv").config();
const mongoose = require("mongoose");
const { DB_USERNAME, DB_PASSWORD, DB_URL, DB_NAME } = process.env
const databaseUrl = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_URL}/${DB_NAME}`;

mongoose.connect(databaseUrl)
.then(() => {
  console.log("Estamos conectados a la base de datos de twitter!");
})