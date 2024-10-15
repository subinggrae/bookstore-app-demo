const Order = require('../models/Order');
const Cart = require('../models/Cart');
const { StatusCodes } = require('http-status-codes');

const handleCreateOrder = async (req, res) => {
  const { items, delivery, totalPrice, userId } = req.body;

  try {
    let deliveryId = await Order.createDelivery(delivery.address, delivery.reciever, delivery.contact);
    if (!deliveryId) {
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    let orderId = await Order.createOrder(userId, deliveryId, totalPrice);
    if (!orderId) {
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    let orderItems = await Cart.findSelectedItemsByUserId(items);
    if (!orderItems) {
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    let insertRows = await Order.createOrderItem(orderId, orderItems);
    if (!insertRows) {
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    let deleteRows = await Cart.deleteSelectedItems(items);
    if (!deleteRows) {
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }

  return res.status(StatusCodes.CREATED).end();
}

const handleGetOrder = async (req, res) => {
  const { id } = req.params;

  let order;
  try {
    order = await Order.findOrderById(id);
    if (!order) {
      return res.status(StatusCode.BAD_REQUEST).end();
    }
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }

  return res.status(StatusCodes.OK).json(order);
}

module.exports = {
  handleCreateOrder,
  handleGetOrder
}