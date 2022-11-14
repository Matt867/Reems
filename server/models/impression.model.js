const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db/db');

/*
This model will have a table which will contain
ID: INTEGER - Impression ID,
User_ID: INTEGER - Id of user that has made an impression
Tweet_id: INTEGER - id of tweet that user has impressed upon
impression_level: INTEGER - level of impression 0: placed on feed and not interacted with, 1: viewed, 2: liked, 3: shared, 4: liked+shared
*/


class Impression extends Model {}


Impression.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    impression_level: {
        type: DataTypes.TINYINT,
        allowNull: false
    }
}, {sequelize: db})

module.exports = Impression;
