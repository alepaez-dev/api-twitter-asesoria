const express = require("express");

const router = express.Router();
const { create, list } = require("../usecases/like.usecase");

// Dar like
router.post("/", async (req, res) => {
  try {
    const like = await create(req.body);
    res.status(201)
    res.json({
      success: true,
      data: like
    })
  }catch(err){
    res.status(err.status || 500)
    res.json({
      success:false,
      message: err.message
    })
  }
});

// Listas likes de un perfil
router.get("/", async (req, res) => {
  try {
    const likes = await list(req.query.userLikeId);
    res.json({
      success: true,
      data: likes
    })
  }catch(err){
    res.status(err.status || 500)
    res.json({
      success:false,
      message: err.message
    })
  }
})

module.exports = router;