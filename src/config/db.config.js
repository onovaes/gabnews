// Connects to SqLite or Mysql db with sequelize lib
const { Sequelize } = require("sequelize")
const sequelize = require("sequelize")


// Mysql Example
const connection = new Sequelize('gabnews','root','121212',{
    host: 'localhost',
    dialect: 'mysql'
})



// const connection = new Sequelize({
//     dialect: 'sqlite',
//     storage: '.sqlite/gabnews.db'
//   })


//const connection = new Sequelize('sqlite:.sqlite/gabnews.db')

module.exports = connection;