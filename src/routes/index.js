const express = require("express");
const getCategory = require("../controllers/categories/getCategory");
const createCategory = require("../controllers/categories/createCategory");
const getAnimals = require("../controllers/animals/getAnimals");
const createAnimal = require("../controllers/animals/createAnimal");

const router = express.Router();

router.get("/categories", getCategory);
router.post("/categories/create", createCategory);
router.get("/animals", getAnimals);
router.post("/animals/create", createAnimal);


module.exports = router;
