const Category = require("../../models/categoryModel");

const getCategory = async (req, res) => {
  try {
    const response = await Category.find();
    res.send({ status: 200, response });
    console.log(response);
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message || err.errmsg });
  }
};
module.exports = getCategory;
