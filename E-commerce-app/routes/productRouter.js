const express= require("express");
const router = express.Router();
const productController = require("../Controllers/productController");

router.get("/",productController.getuserController);

router.get("/:id",productController.getuserControllerById);
router.post("/",productController.postuserController);


module.exports=router;