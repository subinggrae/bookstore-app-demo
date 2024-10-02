const db = require('../db');

const createUser = async (username, email, password, salt) => {
  const sql = 'INSERT INTO `user` (username, email, password, salt) VALUES (?, ?, ?, ?);'
  const params = [username, email, password, salt];

  const [result] = await db.query(sql, params);
  return result;
}

const findUserByEmail = async (email) => {
  const sql = 'SELECT * FROM `user` WHERE email = ?';
  const params = [email];

  const [rows] = await db.query(sql, params);
  return rows.length ? rows[0] : null;
}

module.exports = {
  createUser,
  findUserByEmail
}