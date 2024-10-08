const Book = require('../models/Book');
const Review = require('../models/Review');
const { StatusCodes } = require('http-status-codes');

const handleGetAllBooks = async (req, res) => {
  try {
    const books = await Book.findAllBooks();
    return res.status(StatusCodes.OK).json(books);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
}

const handleGetBook = async (req, res) => {
  const { id } = req.params;

  let book;
  try {
    book = await Book.findBookById(id);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }

  if (!book) {
    return res.status(StatusCodes.NOT_FOUND).end();
  }

  res.status(StatusCodes.OK).json(book);
}

const handleGetReview = async (req, res) => {
  const { id } = req.params;

  try {
    const reviews = await Review.findReviewsByBookId(id);
    res.status(StatusCodes.OK).json(reviews);
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
}

module.exports = {
  handleGetAllBooks,
  handleGetBook,
  handleGetReview
}