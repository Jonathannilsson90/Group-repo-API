const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Desciption: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Stock: {
    type: Number,
    required: true,
  },
  Image: {
    type: String,
    required: false,
  },
  Category: {
    type: Array,
    required: false,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("book", bookSchema);
