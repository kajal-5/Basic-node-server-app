const express= require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("List all students");
})

router.get("/:id",(req,res)=>{
    console.log(`fetched student by ${req.params.id}`);
    res.send(`fetched student by ${req.params.id}`);
})
router.post('/',(req,res)=>{
    res.send("new student added");
})

module.exports= router;