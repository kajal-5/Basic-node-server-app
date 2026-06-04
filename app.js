const http = require("http");
const express= require("express");
const app = express();
const orderRouter = require('./routes/orders');
const userRouter =  require("./routes/users");
// const bookRouter = 

app.use('/orders',orderRouter);
app.use("/users",userRouter);


// const server = http.createServer((req, res) => {

//     if (req.url === "/home") {
//         res.end("Welcome home");
//     }

//     else if (req.url === "/about") {
//         res.end("Welcome to About Us");
//     }

//     else if (req.url === "/node") {
//         res.end("Welcome to my Node Js project");
//     }

//     else {
//         res.end("Page Not Found");
//     }

// });

app.listen(3000, () => {
    console.log("Server running on port 3000");
});