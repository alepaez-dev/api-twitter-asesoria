const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    match: /^.*@.*\..*$/
  },
  userName: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String
  }
})

module.exports = mongoose.model("user", userSchema);