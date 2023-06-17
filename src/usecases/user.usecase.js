/**
 * 1- Se importa el modelo
 * 2- Se hacen las acciones(logica)
 */
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

const create = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  data.password = hashedPassword;
  const user = User.create(data);
  return user;
}

module.exports = { create };