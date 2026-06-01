const express= require("express");
const app = express();
app.get('/products',(req,res)=>{
    res.send("Here is the list of all products.");
});
app.post('/orders',(req,res)=>{
    res.send("A new product has been added. ");
});

app.get('/categories', (req, res) => {
    res.send('Here is the list of all categories.');
});

app.post('/categories', (req, res) => {
    res.send('A new category has been added.');
});

app.get('/welcome/:username',(req,res) =>
    {
        const user= req.params.username;
        const role = req.query.role;
        res.send(`welcome ${user}, your role is ${role}`);

    });

app.use((req,res)=>{
    res.status(404).send("<h1>404- page not found </h1>");
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});