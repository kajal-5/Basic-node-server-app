exports.getuserController=(req,res)=>{
res.send("all user list");
}

exports.postuserController= (req,res)=>{
    res.send("new user added");
}

exports.getuserControllerById=(req,res)=>{
    res.send(`get user by id ${req.params.id}`);
}
