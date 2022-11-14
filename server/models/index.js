const Impression = require('./impression.model')
const User = require('./user.model')
const Tweet = require('./tweet.model')


Tweet.belongsTo(User);
User.hasMany(Tweet);



Impression.belongsTo(User);
User.hasMany(Impression);


Impression.belongsTo(Tweet);
Tweet.hasMany(Impression);


module.exports = { Tweet, User, Impression }
