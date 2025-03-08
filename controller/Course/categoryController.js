const CategoryService = require("../../service/Course/categoryService");

const getCategoryListAsync = async (req, res) => {
  let result = await CategoryService.getCategoryListAsync();
  if (result.isSuccess) {
    res.sendCommonValue(result.data, "success", 1);
  } else {
    res.sendCommonValue([], "failed", 0);
  }
};

module.exports = {
  getCategoryListAsync,
};
