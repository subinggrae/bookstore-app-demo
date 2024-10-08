const db = require('../db');

const findReviewsByBookId = async (id) => {
  let sql = 'SELECT * FROM review WHERE book_id = ?';
  let fields = [id];

  const [rows] = await db.query(sql, fields);
  return rows;
}

const createReview = async (userId, bookId, content, rating) => {
  let sql = 'INSERT INTO review (user_id, book_id, content, rating) VALUES (?, ?, ?, ?)';
  let fields = [userId, bookId, content, rating];

  let [result] = await db.query(sql, fields);
  
  if (result.affectedRows < 0) {
      throw new Error('Cannot update review table.');
  }

  sql = 'UPDATE book SET rating = (SELECT AVG(review.rating) FROM review WHERE book_id = ?) WHERE book.id = ?';
  fields = [bookId, bookId];

  [result] = await db.query(sql, fields);
  return result;
}

module.exports = {
  findReviewsByBookId,
  createReview
}