const Upload = require('../model/Upload');

module.exports = {
    getIndex:  (req, res) => {
        try{
      res.render("index.ejs");
        } catch(err){
            console.log(err);
        }
    },
    getUploadFile: async (req, res) => {
        try{
        const upload = await Upload.find().sort({createdAt: "desc" })
        res.render("upload.ejs", {upload: upload});
    } catch(err) {

    }
}
  };