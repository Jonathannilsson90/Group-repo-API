/// Re-declaring mongoose npm package to initialze the Schema
const mongoose = require("mongoose");
///The DB save content according to this Schema below:
const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  category: {
    type: Array,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("book", bookSchema);
