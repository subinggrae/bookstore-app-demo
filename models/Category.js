const db = require('../db');

const createCategory = async (name) => {
  const sql = 'INSERT INTO category (name) VALUES (?);';
  const fields = [name];

  const [result] = await db.query(sql, fields);
  return result;
}

const findAllCategories = async () => {
  const sql = 'SELECT * FROM category;';
  
  const [rows] = await db.query(sql);
  return rows;
}

const updateCategoryById = async (id, name) => {
  const sql = 'UPDATE category SET name = ? WHERE id = ?;';
  const fields = [name, id];

  const [result] = await db.query(sql, fields);
  return result.affectedRows;
}

const deleteCategoryById = async (id) => {
  const sql = 'DELETE FROM category WHERE id = ?;';
  const fields = [id];

  const [result] = await db.query(sql, fields);
  return result.affectedRows;
}

module.exports = {
  createCategory,
  findAllCategories,
  updateCategoryById,
  deleteCategoryById
}