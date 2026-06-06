const userServices= require("../services/userServices")

exports.getuserController=(req,res)=>{
    const result=userServices.getuser();
    console.log("GET USER HIT");
    res.send(result);
}

exports.postuserController= (req,res)=>{
    const result=userServices.postuser();
    res.send(result);
}

exports.getuserControllerById=(req,res)=>{
    const result =userServices.getuserbyiId(req.params.id);
    res.send(result);
}
