const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  images: [],
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  additionallInfo: [],
});

module.exports = mongoose.model("product", productSchema);