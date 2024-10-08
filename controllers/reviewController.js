const { StatusCodes } = require('http-status-codes');
const Review = require('../models/Review');


const handleCreateReview = async (req, res) => {
  const { userId, bookId, content, rating } = req.body;

  let updateRows = 0;
  try {
    updateRows = await Review.createReview(parseInt(userId), parseInt(bookId), content, parseFloat(rating));
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }

  if (!updateRows) {
    res.status(StatusCodes.BAD_REQUEST).end();
  }

  res.status(StatusCodes.CREATED).end();
}

module.exports = {
  handleCreateReview
}