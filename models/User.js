const db = require('../db');

const createUser = async (username, email, password, salt) => {
  const sql = 'INSERT INTO `user` (username, email, password, salt) VALUES (?, ?, ?, ?);'
  const fields = [username, email, password, salt];

  const [result] = await db.query(sql, fields);
  return result.affectedRows;
}

const findUserByEmail = async (email) => {
  const sql = 'SELECT * FROM `user` WHERE email = ?';
  const fields = [email];

  const [rows] = await db.query(sql, fields);
  return rows.length ? rows[0] : null;
}

module.exports = {
  createUser,
  findUserByEmail
}