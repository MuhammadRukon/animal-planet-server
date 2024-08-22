const express = require("express");
const app = express();
const applyMiddleware = require("./middlewares/applyMiddleware");
const handleNotFound = require("./middlewares/handleNotFound");
const handleError = require("./middlewares/handleError");
const routes = require("./routes/index");
const Animal = require("./models/animalModel");
const Category = require("./models/categoryModel");

applyMiddleware(express, app);

app.use(routes);

app.get("/", (req, res) => {
  res.send("root route");
});

app.get("/health", (req, res) => {
  res.send("AnimalPlanet server running");
});

// // removes all documents from collections
//   const wipe = async ()=>{
//     const resAnimal = await Animal.deleteMany({});
//     const resCat =await Category.deleteMany({});
//     console.log(resAnimal, resCat);
//    }
// wipe();

app.all("*", handleNotFound);
app.use(handleError);

module.exports = app;
