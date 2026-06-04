const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("fetch all products");
})
router.post("/",(req,res)=>{
    res.send("add a new products");
})
router.get("/:id",(req,res)=>{
    res.send(`fetch a product by ${req.params.id}`);
})

module.exports= router;