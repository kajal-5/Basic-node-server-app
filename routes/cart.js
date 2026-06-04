const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("fetch the cart items for sepecific user");
})
router.post("/",(req,res)=>{
    res.send("Add a product to the user's cart");
})


module.exports= router;