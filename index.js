const express = require("express");
require("dotenv").config();
const {
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
} = require("./crud");

const app = express();

app.options("*", cors());

app.use(express.json());

const port = process.env.PORT || 8000 || 5001;
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Ops There are Nothing to Show. Please Go to /category",
  });
});
//  category route Start
app.get("/category", (req, res) => {
  readCategory((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/category/id", (req, res) => {
  readCategoryId((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/category/cat_id", (req, res) => {
  readCategoryCatId((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/category/cat_name_en", (req, res) => {
  readCategoryCatNameEn((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/category/no_of_subcat", (req, res) => {
  readCategoryNoOfSubcat((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/category/cat_icon", (req, res) => {
  readCategoryCatIcon((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/category/no_of_dua", (req, res) => {
  readCategoryNoOfDua((err, rows) => {
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
app.get("/dua/id", (req, res) => {
  readDuaId((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/dua/cat_id", (req, res) => {
  readDuaCatId((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/dua/subcat_id", (req, res) => {
  readDuaSubcatId((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/dua/dua_id", (req, res) => {
  readDuaDuaId((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/dua/dua_name_en", (req, res) => {
  readDuaDuaNameEn((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/dua/top_en", (req, res) => {
  readDuaTopEn((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/dua/dua_arabic", (req, res) => {
  readDuaDuaArabic((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/dua/transliteration_en", (req, res) => {
  readDuaTransliterationEn((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/dua/translation_en", (req, res) => {
  readDuaTranslationEn((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/dua/bottom_en", (req, res) => {
  readDuaBottomEn((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/dua/refference_en", (req, res) => {
  readDuaRefferenceEn((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/dua/audio", (req, res) => {
  readDuaAudio((err, rows) => {
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
app.get("/sub_category/id", (req, res) => {
  readSubCategoryId((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/sub_category/cat_id", (req, res) => {
  readSubCategoryCatId((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/sub_category/subcat_id", (req, res) => {
  readSubCategorySubcatId((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/sub_category/subcat_name_en", (req, res) => {
  readSubCategorySubcatNameEn((err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).json(rows);
    }
  });
});
app.get("/sub_category/no_of_dua", (req, res) => {
  readSubCategoryNoOfDua((err, rows) => {
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
