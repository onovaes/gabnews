const express = require("express")
const app = express()

const bodyParser = require("body-parser")
const connection = require("./database/database")

const categoriesController = require("./categories/CategoriesController")
const articlesController = require("./articles/ArticlesController")

const Article = require("./articles/Article")
const Category = require("./categories/Category")

// View Engine
app.set('view engine', 'ejs')

// Static
app.use(express.static("public"))

//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Conection database
connection
    .authenticate()
    .then(() => {
        console.log("sucess")
    }).catch((error) => {
        console.log(error)
    })

app.use("/",categoriesController);
app.use("/",articlesController);


app.get("/", function(req,res){
    //res.send('Hello rota 1')
    res.render('index')
})


app.listen(8090, function() { console.log('\x1b[36m%s\x1b[0m', '\nRunning at http://localhost:8090\n');   })  