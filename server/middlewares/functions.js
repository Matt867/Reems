const { Tweet, User, Impression } = require('../models');
const db = require('../db/db');
const res = require('express/lib/response');


const createTweet = async (authorId, body) => {
    const tweet = await Tweet.create({
        body: body
    })

    const author = await User.findByPk(authorId)

    await tweet.setUser(author)

    return tweet
}

const createUser = async (username, name) => {
    const user = await User.create({
        username: username,
        name: name
    })

    return user
}

const getAllTweets = async () => {
    const tweets = Tweet.findAll()

    return tweets
}

const likeTweet = async (tweetId) => {
    const tweet = await Tweet.findByPk(tweetId);

    await Tweet.increment('likes', {by: 1, where: { id: tweetId }})
    await Tweet.increment('impression_score', {by: 3, where: { id: tweetId }})
}


const viewImpression = async (tweetId) => {
    const tweet = await Tweet.findByPk(tweetId);

    await Tweet.increment('impression_score', {by: 1, where: { id: tweetId }})
}

const getTweet = async (id) => {
    const tweet = await Tweet.findByPk(id)

    return tweet
}


async function main () {
    const u1 = await createUser("matt", "Matthew Sidaway")

    const tweet = await createTweet(u1, "Hello World")

    await likeTweet(tweet.id)
}

module.exports = {createTweet, createUser, likeTweet, getAllTweets, getTweet, viewImpression}
