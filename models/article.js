const Sequelize = require("sequelize")
const Category = require("./category")
const connection = require("../config/database")


const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug:{
        type: Sequelize.STRING,
        allowNull: false
    }, body:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article);
Article.belongsTo(Category);

Article.sync();

module.exports = Article