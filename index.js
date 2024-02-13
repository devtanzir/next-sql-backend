const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { readCategory, readDua, readSubCategory } = require("./crud");

const app = express();

app.use(cors());

app.use(express.static("./public"));

app.use(express.json());

const port = process.env.PORT || 8000 || 5001;

app.get("/", (_req, res) => {
  res.status(200).json({
    message: "Ops There are Nothing to Show. Please Go to /category",
  });
});
//  category route Start
app.get("/category", (_req, res) => {
  readCategory((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
//  category route end

//  dua route start
app.get("/dua", (req, res) => {
  readDua((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
//  dua route end

// sub Category start
app.get("/sub_category", (req, res) => {
  readSubCategory((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});

app.listen(port, (err) => {
  if (err) console.error(err);
  console.log(`Server is lisning on port ${port}`);
});
