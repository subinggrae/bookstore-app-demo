const db = require('../db');

const findAllBooks = async () => {
  const sql = 'SELECT * FROM book';

  const [rows] = await db.query(sql);
  return rows;
}

const findBookById = async (id) => {
  const sql = 'SELECT * FROM book LEFT JOIN category ON book.category_id = category.id WHERE book.id = ?';
  const fields = [id];

  const [rows] = await db.query(sql, fields);
  return rows.length ? rows[0] : null;
}

const findBooksByCategoryId = async (id, limit, page,  sort) => {
  let sql = 'SELECT * FROM book WHERE category_id = ?';
  const fields = [id];

  if (sort === 'newest') {
    sql += ' ORDER BY book.published_at DESC';
  }

  sql += ' LIMIT ? OFFSET ?'
  fields.push(limit, page);

  const [rows] = await db.query(sql, fields);
  return rows;
}

module.exports = {
  findAllBooks,
  findBooksByCategoryId,
  findBookById
}