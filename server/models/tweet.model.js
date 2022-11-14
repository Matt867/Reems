const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db/db');
const User = require('./user.model')

class Tweet extends Model {};

Tweet.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    body: {
        type: DataTypes.STRING(240),
        allowNull: false,
    },

    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },

    impression_score: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },

}, { sequelize: db })

module.exports = Tweet
