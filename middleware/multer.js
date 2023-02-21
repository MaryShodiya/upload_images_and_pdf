const multer = require("multer");
const path = require("path");

module.exports = multer({

//destination of storage; tells multer where to store the files
  storage: multer.diskStorage({}),

//function to control which files are acceptable; the different image and pdf file format 
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".pdf" && ext !== ".doc") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});