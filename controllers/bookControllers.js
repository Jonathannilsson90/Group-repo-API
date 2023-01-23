const book = require("../models/Bookmodel");

const getAllBooks = async (req, res) => {
  try {
    res.json(await book.find());
  } catch (error) {
    console.log({ message: error });
  }
};

const getBook = async (req, res) => {
  try {
    res.json(await book.findById());
  } catch (error) {
    console.log({ message: error });
  }
};

const postBook = async (req, res) => {
  try {
    const createBook = new book({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock,
      image: req.body.image,
      category: req.body.category,
    });
    res.json(await createBook.save());
  } catch (error) {
    console.log({ message: error });
  }
};

const deleteBook = async (req, res) => {
  try {
    res.json(await book.deleteOne({ _id: req.params.bookId }));
  } catch (error) {
    res.json({ message: error });
  }
};

const updateBook = async (req, res) => {
  try {
    res.json(
      await book.updateOne(
        { _id: req.params.bookId },
        {
          $set: {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            image: req.body.image,
            category: req.body.category,
          },
        }
      )
    );
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  getAllBooks,
  postBook,
  getBook,
  deleteBook,
  updateBook,
};
