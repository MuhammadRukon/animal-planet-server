const Animal = require("../../models/animalModel");

const getAnimals = async (req, res)=>{
try {
    const response = await Animal.find();
    res.send({status: 200, response});
    console.log(response);
} catch (err) {
    res.status(500).json({status:500, message: err.msg || err.message})
}
}
module.exports = getAnimals;