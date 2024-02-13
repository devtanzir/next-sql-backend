const db = require("./database");

/**
 * Reads categories from the database.
 * @param {function} callback - The callback function to handle the result.
 */
const readCategory = (callback) => {
  const sql = `SELECT * FROM category`;
  db.all(sql, [], callback);
};

/**
 * Reads duas from the database.
 * @param {function} callback - The callback function to handle the result.
 */
const readDua = (callback) => {
  const sql = `SELECT * FROM dua`;
  db.all(sql, [], callback);
};

/**
 * Reads subcategories from the database.
 * @param {function} callback - The callback function to handle the result.
 */
const readSubCategory = (callback) => {
  const sql = `SELECT * FROM sub_category`;
  db.all(sql, [], callback);
};

module.exports = {
  readCategory,
  readDua,
  readSubCategory,
};
