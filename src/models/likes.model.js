const mongoose = require("mongoose")

/**
 *   id integer [primary key]
  tweet varchar
  userId integer ---> quien le dio like
 */
const likeSchema = new mongoose.Schema({
  tweet: {
    _id: String,
    body: {
      type: String,
      required: true,
      maxlength: 100
    },
    user: {
      type: {
        _id: String,
        userName: String,
        profilePicture: String
      }
    },
    createdAt: {
      type: Date
    }
  },
  userLikeId: String // USER QUE DIO LIKE
})

module.exports = mongoose.model("like", likeSchema);