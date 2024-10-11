const Order = require('../models/Order');
const { StatusCodes } = require('http-status-codes');

const handleCreateOrder = async (req, res) => {
  const { items, delivery, totalPrice, userId } = req.body;

  let deliveryId = 0;
  try {
    deliveryId = await Order.createDelivery(delivery.address, delivery.reciever, delivery.contact);
    if (!deliveryId) {
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }

  let orderId = 0;
  try {
    orderId = await Order.createOrder(userId, deliveryId, totalPrice);
    if (!orderId) {
      return res.status(StatusCodes.BAD_REQUEST);
    }
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }

  let insertRows = 0;
  try {
    insertRows = await Order.createOrderItem(orderId, items);
    if (!insertRows) {
      return res.status(StatusCodes.BAD_REQUEST);
    }
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
  
  return res.status(StatusCodes.CREATED).end();
}

module.exports = {
  handleCreateOrder
}