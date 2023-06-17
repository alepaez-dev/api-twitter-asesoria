const Like = require("../models/likes.model");

const create = (data) => {
  const like = Like.create(data);
  return like
}

const list = (id) => {
  const likes = Like.find({ userLikeId: id });
  return likes;
}

module.exports = { create, list };