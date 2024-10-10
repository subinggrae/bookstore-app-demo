const Cart = require('../models/Cart');
const { StatusCodes } = require('http-status-codes');

const handleCreateItem = async (req, res) => {
  const { userId } = req.params;
  const { bookId, quantity } = req.body;

  let createRows = 0;
  try {
    createRows = await Cart.createItem(userId, bookId, quantity);
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
  if (!createRows) {
    return res.status(StatusCodes.BAD_REQUEST).json();
  }
  
  res.status(StatusCodes.CREATED).json();
}

const handleGetItems = async (req, res) => {
  const { userId } = req.params;

  try {
    const items = await Cart.findItemsByUserId(userId);
    return res.status(StatusCodes.OK).json(items);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
}

const handleDeleteItem = async (req, res) => {
  const { itemId } = req.params;

  let deleteRows = 0;
  try {
    deleteRows = await Cart.deleteItemById(itemId);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
  if (!deleteRows) {
    return res.status(StatusCodes.BAD_REQUEST).json();
  }
  
  res.status(StatusCodes.OK).json();
}

module.exports = {
  handleCreateItem,
  handleGetItems,
  handleDeleteItem
}