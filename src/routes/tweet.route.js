const express = require("express");
const { create, list } = require("../usecases/tweet.usecase");

const router = express.Router();

// Crear un tweet
router.post("/", async (req, res) => {
  try{
    const tweet = await create(req.body);
    res.status(201);
    res.json({
      success:true,
      data: tweet
    })
  }catch(err) {
    res.status(err.status || 500)
    res.json({
      success: false,
      message: err.message
    })
  }
})

// List tweets
router.get("/", async (req, res) => {
  const userId = req.query?.userId
  try{
    const tweets = await list(userId);
    res.json({
      success: true,
      data: tweets
    })
  }catch(err) {
    res.status(err.status || 500);
    res.json({
      success: false,
      message: err.message
    })
  }
})

module.exports = router