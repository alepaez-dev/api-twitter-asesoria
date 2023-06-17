const mongoose = require("mongoose");

/**
 *   
 * id integer [primary key]
  body text [note: 'Content of the post'] // embebbed relationship
  user text // embebbed relationship
  createdAt Date
 */
const tweetSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
    maxlength: 100
  },
  user: {
    type: {
      userName: String,
      profilePicture: String
    }
  },
  createdAt: {
    type: Date
  }
})

module.exports = mongoose.model("tweet", tweetSchema);