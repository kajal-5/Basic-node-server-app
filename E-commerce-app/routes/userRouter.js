const express= require("express");
const router = express.Router();
const userController = require("../Controllers/userController");

router.get("/",userController.getuserController);

router.get("/:id",userController.getuserControllerById);
router.post("/",userController.postuserController);


module.exports=router;