const sqlite3 = require("sqlite3").verbose();

const dbName = "dua_main.sqlite";

let db = new sqlite3.Database(dbName, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to the database");
  }
});

module.exports = db;
