const { model, Schema } = require("mongoose");

const animalSchema = new Schema({
  name: { type: String, Required: true, Unique: true },
  categoryId: { type: String, Required: true, Unique: true },
  imgURL: { type: String, Required: true, Unique: true },
});

const Animal = model("animal", animalSchema);

module.exports = Animal;
