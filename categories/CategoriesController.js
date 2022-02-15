const e = require("express");
const { response } = require("express");
const express = require("express");
const router = express.Router();
const slugify = require("slugify");

const Category = require("./Category");




router.get("/admin/categories",(req,res) => {


  
    let page = 1
    if (req.query.page >=1)
        page = req.query.page
    console.log(page)

    let offset = 0
    let itemsPerPage = 4
    let next = false
    offset = (page - 1) * itemsPerPage 

   

    Category.findAndCountAll({
        limit:itemsPerPage,
        offset: offset
    }).then(categories => {
       
        if (offset + itemsPerPage >= categories.count){
            next = false
        }else {
            next = true
        }
        
        var result = {
            categories : categories,
            page:parseInt(page),
            next:next
        }
        console.log(result)
        res.render("admin/categories/list", result );
        //res.json(result);
    }).catch(function (error) {
		res.status(500).send("error 44");
	});
    
});


router.get("/admin/categories/new",(req,res) => {
    res.render("admin/categories/new")
});


router.post("/admin/categories/save",(req,res) =>{
    var title = req.body.title;

    if (title != undefined){
        Category.create({
            title:title,
            slug: slugify(title)
        }).then( () =>{
            res.redirect("/admin/categories")
        })
    }else{
        res.redirect("/admin/categories/new")
    }
})

router.post("/admin/categories/delete", (req,res) => {
    var id = req.body.id;
    console.log(id);
    Category.destroy({
        where : {
            id:id
        }
    }).then(() => {
        res.redirect("/admin/categories")
    });
})

module.exports = router;