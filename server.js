const express = require('express');
const app = express();
app. get('/',(req,res)=>{
    res.send("hello backend");
})

app.post('/user',(req,res)=>{
    res.send("user created");
});

app.get('/user',(req,res)=>{
    res.send("fetch data");
});



app.listen(5000,()=>{
    console.log("server running");
})