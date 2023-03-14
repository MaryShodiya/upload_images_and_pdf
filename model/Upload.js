const mongoose = require("mongoose");

const UploadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: false,
  },
  pdfUrl: {
    type: String,
    required: false
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  createdAt: {
      type: Date,
      default: Date.now
  }
  
});

module.exports = mongoose.model("Upload", UploadSchema);