const express = require("express");
const router = express.Router();

//Controllers Route
const homeController = require("../controllers/home");

//Get Route
router.get("/", homeController.getIndex);
router.get("/uploadFile", homeController.getUploadFile);


module.exports = router;