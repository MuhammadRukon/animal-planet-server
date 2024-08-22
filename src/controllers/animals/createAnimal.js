const Animal = require("../../models/animalModel");

const createAnimal = async (req, res) => {
  const data = req.body;
  try {
    const animal = new Animal(data);
    const response = await animal.save();
    console.log(response);
    res.send({ status: 200, response });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.msg || err.message });
  }
};
module.exports = createAnimal;
