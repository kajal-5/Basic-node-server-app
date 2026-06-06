exports.getuserController=(req,res)=>{
res.send("all product list");
}

exports.postuserController= (req,res)=>{
    res.send("new product added");
}

exports.getuserControllerById=(req,res)=>{
    res.send(`get product by id ${req.params.id}`);
}
