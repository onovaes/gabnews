const Sequelize = require("sequelize")
const connection = require("../config/db.config")

const Category = connection.define('categories',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Category.sync();

module.exports = Category