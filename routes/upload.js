const express = require("express");
const router = express.Router();
const uploadImageAndPdf = require("../middleware/multer");

//Controllers Route
const uploadController = require("../controllers/upload");

//POST Route
router.get("/:id", uploadController.getUploadedFile);
//router.get("/uploadFile", uploadController.uploadPage )
router.post("/uploadFile", uploadImageAndPdf.single("file"), uploadController.uploadFile);


module.exports = router;