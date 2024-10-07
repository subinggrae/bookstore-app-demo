const Category = require('../models/Category');
const Book = require('../models/Book');
const { StatusCodes } = require('http-status-codes');

const handleCreateCategory = async (req, res) => {
  const { name } = req.body;
  
  try {
    const category = await Category.createCategory(name);
    return res.status(StatusCodes.CREATED).json(category);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
}

const handleGetAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAllCategories();
    return res.status(StatusCodes.OK).json(categories);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
}

const handleUpdateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;


  let updateRows = 0;
  try {
    updateRows = await Category.updateCategoryById(id, name);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }

  if (!updateRows) {
    return res.status(StatusCodes.NOT_FOUND).end();
  }

  res.status(StatusCodes.OK).end();
}

const handleDeleteCategory = async (req, res) => {
  const { id } = req.params;

  let deleteRows = 0;
  try {
    deleteRows = await Category.deleteCategoryById(id);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }

  if (!deleteRows) {
    return res.status(StatusCodes.NOT_FOUND).end();
  }

  res.status(StatusCodes.OK).end();
}

const handleGetBooksByCategory = async (req, res) => {
  const { id } = req.params;
  const { limit, page, sort } = req.query;

  try {
    const books = await Book.findBooksByCategoryId(parseInt(id), parseInt(limit), page - 1, sort);
    return res.status(StatusCodes.OK).json(books);
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
}

module.exports = {
  handleCreateCategory,
  handleDeleteCategory,
  handleGetAllCategories,
  handleUpdateCategory,
  handleGetBooksByCategory
}