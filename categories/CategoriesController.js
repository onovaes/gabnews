const express = require("express");
const router = express.Router();

router.get("/categories",(req,res) => {
    res.send("Router categories")
});

module.exports = router;