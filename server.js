const express= require("express");
const app = express();
const bookrouter = require("./routes/books");
app.use("/books",bookrouter);
app.listen(4000,()=>{
    console.log("server is running at 4000");
})