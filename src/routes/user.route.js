/**
 * 1 - El router de mi recurso
 * 2 - Importarnos el usecase que hace la logica
 * 3 - Endpoints -> req, res
 * 4 - Aqui se decide si una ruta es publica o privada
 */

const express = require("express");
const router = express.Router();
const { create } = require("../usecases/user.usecase");
    
router.post("/", async (req, res) => {
  try {
    const user = await create(req.body);
    res.status(201);
    res.json({
      success: true,
      data: user
    })
  }catch(err) {
    res.status(err.status || 500)
    res.json({
      success: false,
      message: err.message
    })
  }
})

module.exports = router;
