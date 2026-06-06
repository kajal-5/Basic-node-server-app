const http = require("http");
const express= require("express");
const app = express();
const orderRouter = require('./routes/orders');
const userRouter =  require("./routes/users");
const studentRouter = require('./routes/students');
const productRouter = require('./routes/products');
const cartRouter = require("./routes/cart");


app.use(express.json());

app.use(express.static('public'));

app.use('/orders',orderRouter);
app.use("/users",userRouter);
app.use("/students",studentRouter);
app.use("/products", productRouter);
app.use("/cart",cartRouter);



/////////////////////HTML/////////////////////////
app.get("/api/products", (req,res)=>{
    console.log(__dirname);
    res.sendFile(__dirname + "/View/products.html");
})

app.post("/api/products", (req, res) => {
    console.log(req.body);

    res.send(req.body);
});


app.use(express.static('public'))

app.use((req,res)=>{
    res.status(404).send("404 page not found");
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});