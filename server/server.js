const express = require('express');
const path = require('path')

const {createTweet, createUser, likeTweet, getAllTweets, getTweet, viewImpression} = require('./middlewares/functions')

const app = express()
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/newtweet', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/pages/index.html'))
})

app.post('/newuser', async (req, res) => {
    /** POST
     * {
     *      "username": STRING,
     *      "name": STRING
     * }
     */

    const user = req.body

    try{
        await createUser(user.username, user.name)
    } catch {
        res.sendStatus(500)
    }

    res.sendStatus(200)
})


app.route('/tweets')
    .post(async (req, res) => {
        /** POST
         * {
         *      "authorId": NUMBER,
         *      "tweetBody": STRING
         * }
         */
        const tweet = req.body

        console.log(tweet)

        try {
            await createTweet(tweet.authorId, tweet.tweetBody)
        } catch {
            res.sendStatus(500)
        }

        res.sendStatus(200)
    })

    .get(async (req, res) => {
        const tweets = await getAllTweets()

        res.send(tweets)
    })



app.route('/tweets/:tweetId')

    .get(async (req, res) => {

        const id = req.params.tweetId

        const tweet = await getTweet(id)
        await viewImpression(id)

        res.send(tweet)

    })

    .patch(async (req, res) => {
        const id = req.params.tweetId

        await likeTweet(id)

        res.sendStatus(200)
    })

app.listen(port)
