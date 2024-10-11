const db = require('../db');

const createDelivery = async (address, reciever, contact) => {
  let sql = 'INSERT INTO delivery (address, reciever, contact) VALUES (?, ?, ?)';
  let fields = [address, reciever, contact];

  const [result] = await db.query(sql, fields);
  return result.insertId;
}

const createOrder = async (userId, deliveryId, totalPrice) => {
  let sql = 'INSERT INTO `order` (user_id, delivery_id, total_price) VALUES (?, ?, ?)';
  let fields = [userId, deliveryId, totalPrice];

  const [result] = await db.query(sql, fields);
  return result.insertId;
}

const createOrderItem = async (orderId, items) => {
  let sql = 'INSERT INTO order_item (order_id, book_id, quantity) VALUES ?';
  let fields = [];

  items.forEach((item) => {
    fields.push([orderId, item.bookId, item.quantity]);
  });

  const [result] = await db.query(sql, [fields]);
  return result.affectedRows;
}

module.exports = {
  createDelivery,
  createOrder,
  createOrderItem
}