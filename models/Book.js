const db = require('../db');

const findAllBooks = async () => {
  const sql = 'SELECT * FROM book;';

  const [rows] = await db.query(sql);
  return rows;
}

const findBookById = async (id) => {
  const sql = 'SELECT * FROM book WHERE id = ?;';
  const fields = [id];

  const [rows] = await db.query(sql, fields);
  return rows.length ? rows[0] : null;
}

const findBooksByCategoryId = async (categoryId) => {
  const sql = 'SELECT * FROM book WHERE category_id = ?;';
  const fields = [categoryId];

  const [rows] = await db.query(sql, fields);
  return rows;
}

module.exports = {
  findAllBooks,
  findBooksByCategoryId,
  findBookById
}