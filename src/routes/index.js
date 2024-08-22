const express = require("express");
const getCategory = require("../controllers/categories/getCategory");
const createCategory = require("../controllers/categories/createCategory");

const router = express.Router();

router.get("/categories", getCategory);
router.post("/categories/create", createCategory);


module.exports = router;
