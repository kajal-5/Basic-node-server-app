const express= require("express");
const app = express();
app.get('/orders',(req,res)=>{
    res.send("Here is the list of all oreders.");
});
app.post('/orders',(req,res)=>{
    res.send("A new order is the list of all orders. ");
});

app.get('/users', (req, res) => {
    res.send('Here is the list of all users.');
});

app.post('/users', (req, res) => {
    res.send('A new user has been added.');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});