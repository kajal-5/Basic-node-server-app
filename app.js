const http = require("http");
const express= require("express");
const app = express();
const orderRouter = require('./routes/orders');
const userRouter =  require("./routes/users");
const studentRouter = require('./routes/students') ;

app.use('/orders',orderRouter);
app.use("/users",userRouter);
app.use("/students",studentRouter);

app.use((req,res)=>{
    res.status(404).send("404 page not found");
})
app.listen(3000, () => {
    console.log("Server running on port 3000");
});