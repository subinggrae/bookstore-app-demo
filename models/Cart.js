const db = require('../db');

const createItem = async (userId, bookId, quantity) => {
  let sql = 'INSERT INTO cart_item (user_id, book_id, quantity) VALUES (?, ?, ?)';
  let fields = [userId, bookId, quantity];

  const [result] = await db.query(sql, fields);
  return result.affectedRows;
}

const findItemsByUserId = async (userId) => {
  let sql = `
    SELECT cart_item.id, book_id, title, summary, quantity, price
    FROM cart_item LEFT JOIN book 
    ON cart_item.book_id = book.id 
    WHERE user_id = ?
  `;
  let fields = [userId];

  const [rows] = await db.query(sql, fields);
  return rows;
}

const findSelectedItemsByUserId = async (selected) => {
  let sql = 'SELECT book_id, quantity FROM cart_item WHERE cart_item.id IN (?)';
  let fields = [selected];

  const [rows] = await db.query(sql, fields);
  return rows.length ? rows : null;
}

const deleteItemById = async (id) => {
  let sql = 'DELETE FROM cart_item WHERE id = ?';
  let fields = [id];

  const [result] = await db.query(sql, fields);
  return result.affectedRows;
}

const deleteSelectedItems = async (selected) => {
  let sql = 'DELETE FROM cart_item WHERE cart_item.id IN (?)';
  let fields = [selected];

  const [result] = await db.query(sql, fields);
  return result.affectedRows;
}

module.exports = {
  createItem,
  findItemsByUserId,
  findSelectedItemsByUserId,
  deleteItemById,
  deleteSelectedItems
}