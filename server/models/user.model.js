const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db/db');


class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        defaultValue: Sequelize.col('name')
    },

}, {sequelize: db})

module.exports = User
