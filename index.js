const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const bodyParser = require("body-parser")
const connection = require("./src/config/db.config")

const categoriesController = require("./src/controllers/categories.controllers")
const articlesController = require("./src/controllers/articles.controllers")

const Article = require("./src/models/article.models")
const Category = require("./src/models/category.models")

// Set view engine to ejs and sent directory's views
app.set('view engine', 'ejs')
app.set('views','./src/views');

// Static Files
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


app.listen(port, function() { console.log('\x1b[36m%s\x1b[0m', '\nRunning at http://localhost:'+port+'\n\n');   })  