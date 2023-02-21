const mongoose = require("mongoose");

const UploadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  pdfUrl: {
    type: String,
    required: true
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