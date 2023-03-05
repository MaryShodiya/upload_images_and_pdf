//the cloudinary path
const cloudinary = require("../middleware/cloudinary");
//Add the model path
const Upload = require("../model/Upload");

//the upload request
module.exports = {
uploadFile: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
       
        //add response to model objects
        await Upload.create({
            title: req.body.title,
           image: result.secure_url,
           pdfUrl: result.secure_url,
            cloudinaryId: result.public_id,
          });
     
console.log("File has been added!");
     res.redirect("/uploadFile")
    } catch (err) {
      console.log(err);
    }
  },

getUploadedFile: async (req, res) => {
    try {
//add Response to MongoDB
        const upload = await Upload.findById(req.params.id);
      res.render("upload.ejs", { upload: upload })
    } catch (err) {
      console.log(err);
    }
}

}