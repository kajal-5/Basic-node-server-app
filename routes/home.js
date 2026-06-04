const express= require("express");
const router = express.Routes();

router.get('/',(res,req)=>{
    res.send("welcome home");
})

router.post('/',(res,req)=>{
    res.send("welcome back home");
})

module.exports= router;