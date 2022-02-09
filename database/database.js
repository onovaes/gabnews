// Connects to mysql db with sequelize lib
const { Sequelize } = require("sequelize")
const sequelize = require("sequelize")

const connection = new Sequelize('dothnews_fatimanews.com.br','root','121212',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;