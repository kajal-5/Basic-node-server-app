const http = require("http");
const express= require("express");
const app = express();
const orderRouter = require('./routes/orders');
const userRouter =  require("./routes/users");
const studentRouter = require('./routes/students');
const productRouter = require('./routes/products');
const cartRouter = require("./routes/cart");

app.use('/orders',orderRouter);
app.use("/users",userRouter);
app.use("/students",studentRouter);
app.use("/products", productRouter);
app.use("/cart",cartRouter);

app.use((req,res)=>{
    res.status(404).send("404 page not found");
})
app.listen(3000, () => {
    console.log("Server running on port 3000");
});