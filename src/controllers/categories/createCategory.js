const Category = require("../../models/categoryModel");

const createCategory = async (req, res) => {
  const data = req.body;

  try {
    const category = new Category(data);
    const response = await category.save();
    res.send({ status: 200, response });
  } catch (err) {
    res.status(500).json({status:500, message: err.message || err.errmsg})
  }
};
module.exports = createCategory;
