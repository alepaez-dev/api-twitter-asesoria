/**
 * 1- Se importa el modelo
 * 2- Se hacen las acciones(logica)
 */

const User = require("../models/user.model");

const create = (data) => {
  const user = User.create(data);
  return user;
}

module.exports = { create };