const Tweet = require("../models/tweet.model");


const create = (data) => {
  const tweet = Tweet.create(data)
  return tweet
}

const list = (id) => {
  const tweets = Tweet.find({ "user._id": id });
  return tweets;
}

module.exports = { create, list }