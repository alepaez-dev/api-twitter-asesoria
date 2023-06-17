const Tweet = require("../models/tweet.model");


const create = (data) => {
  const tweet = Tweet.create(data)
  return tweet
}

const list = () => {
  const tweets = Tweet.find();
  return tweets;
}

module.exports = { create, list }