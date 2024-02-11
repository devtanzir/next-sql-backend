const db = require("./database");

/**
 *
 * @param {category} callback
 */

const readCategory = (callback) => {
  const sql = `SELECT * FROM category`;
  db.all(sql, [], callback);
};
const readCategoryId = (callback) => {
  const sql = `SELECT id FROM category`;
  db.all(sql, [], callback);
};
const readCategoryCatId = (callback) => {
  const sql = `SELECT cat_id FROM category`;
  db.all(sql, [], callback);
};
const readCategoryCatNameEn = (callback) => {
  const sql = `SELECT cat_name_en FROM category`;
  db.all(sql, [], callback);
};
const readCategoryNoOfSubcat = (callback) => {
  const sql = `SELECT no_of_subcat FROM category`;
  db.all(sql, [], callback);
};
const readCategoryNoOfDua = (callback) => {
  const sql = `SELECT no_of_dua FROM category`;
  db.all(sql, [], callback);
};
const readCategoryCatIcon = (callback) => {
  const sql = `SELECT cat_icon FROM category`;
  db.all(sql, [], callback);
};
/**
 *
 * @param {Dua} callback
 */
const readDua = (callback) => {
  const sql = `SELECT * FROM dua`;
  db.all(sql, [], callback);
};
const readDuaId = (callback) => {
  const sql = `SELECT id FROM dua`;
  db.all(sql, [], callback);
};
const readDuaCatId = (callback) => {
  const sql = `SELECT cat_id FROM dua`;
  db.all(sql, [], callback);
};
const readDuaSubcatId = (callback) => {
  const sql = `SELECT subcat_id FROM dua`;
  db.all(sql, [], callback);
};
const readDuaDuaId = (callback) => {
  const sql = `SELECT dua_id FROM dua`;
  db.all(sql, [], callback);
};
const readDuaDuaNameEn = (callback) => {
  const sql = `SELECT dua_name_en FROM dua`;
  db.all(sql, [], callback);
};
const readDuaTopEn = (callback) => {
  const sql = `SELECT top_en FROM dua`;
  db.all(sql, [], callback);
};
const readDuaDuaArabic = (callback) => {
  const sql = `SELECT dua_arabic FROM dua`;
  db.all(sql, [], callback);
};
const readDuaTransliterationEn = (callback) => {
  const sql = `SELECT transliteration_en FROM dua`;
  db.all(sql, [], callback);
};
const readDuaTranslationEn = (callback) => {
  const sql = `SELECT translation_en FROM dua`;
  db.all(sql, [], callback);
};
const readDuaBottomEn = (callback) => {
  const sql = `SELECT bottom_en FROM dua`;
  db.all(sql, [], callback);
};
const readDuaRefferenceEn = (callback) => {
  const sql = `SELECT refference_en FROM dua`;
  db.all(sql, [], callback);
};
const readDuaAudio = (callback) => {
  const sql = `SELECT audio FROM dua`;
  db.all(sql, [], callback);
};
/**
 *
 * @param {SubCategory} callback
 */
const readSubCategory = (callback) => {
  const sql = `SELECT * FROM sub_category`;
  db.all(sql, [], callback);
};
const readSubCategoryId = (callback) => {
  const sql = `SELECT id FROM sub_category`;
  db.all(sql, [], callback);
};
const readSubCategoryCatId = (callback) => {
  const sql = `SELECT cat_id FROM sub_category`;
  db.all(sql, [], callback);
};
const readSubCategorySubcatId = (callback) => {
  const sql = `SELECT subcat_id FROM sub_category`;
  db.all(sql, [], callback);
};
const readSubCategorySubcatNameEn = (callback) => {
  const sql = `SELECT subcat_name_en FROM sub_category`;
  db.all(sql, [], callback);
};
const readSubCategoryNoOfDua = (callback) => {
  const sql = `SELECT no_of_dua FROM sub_category`;
  db.all(sql, [], callback);
};

module.exports = {
  readCategory,
  readCategoryId,
  readCategoryCatId,
  readCategoryCatNameEn,
  readCategoryNoOfSubcat,
  readCategoryCatIcon,
  readCategoryNoOfDua,
  readDua,
  readDuaId,
  readDuaCatId,
  readDuaSubcatId,
  readDuaDuaId,
  readDuaDuaNameEn,
  readDuaTopEn,
  readDuaDuaArabic,
  readDuaTransliterationEn,
  readDuaTranslationEn,
  readDuaBottomEn,
  readDuaRefferenceEn,
  readDuaAudio,
  readSubCategory,
  readSubCategoryId,
  readSubCategoryCatId,
  readSubCategorySubcatId,
  readSubCategorySubcatNameEn,
  readSubCategoryNoOfDua,
};
