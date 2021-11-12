const fs = require('fs').promises

const convertTweets = async () => {
  const tweets = JSON.parse(await fs.readFile('./data/trump-tweets.json', 'utf8'))
  tweets
    .filter((tweet) => !tweet.is_retweet).forEach((tweet) => {
      console.log(tweet.text)
    })
}

convertTweets()