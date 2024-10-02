const db = require('../db');

const createUser = async (username, email, password, salt) => {
  const sql = 'INSERT INTO `user` (username, email, password, salt) VALUES (?, ?, ?, ?);'
  const params = [username, email, password, salt];

  const [result] = await db.query(sql, params);
  return result;
}

module.exports = {
  createUser
}