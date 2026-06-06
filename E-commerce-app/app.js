const express= require("express");
const app = express();
const userRouter= require("./routes/userRouter");
const productRouter = require("./routes/productRouter")

app.use("/user",userRouter);
app.use("/product",productRouter);




app.listen(3000,()=>{
    console.log("server running at 3000 port");
})