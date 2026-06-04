const express= require("express");
const router= express.Router();

router.get("/",(req,res)=>{
    res.send("Fetch all users");
})
router.post("/",(req,res)=>{
    res.send("New user added");
})
router.get("/:id",(req,res)=>{
    res.send(`fetch  a user by ${req.params.id}`);
})

module.exports = router;