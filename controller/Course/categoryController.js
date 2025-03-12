const CategoryService = require("../../service/Course/categoryService");

const getCategoryListAsync = async (req, res) => {
  const page = parseInt(req.params.page);
  const pageSize = parseInt(req.params.pageSize);
  const result = await CategoryService.getCategoryListAsync(page, pageSize);
  if (result.isSuccess) {
    res.sendCommonValue(result.data, "success", 1);
  } else {
    res.sendCommonValue([], "failed", 0);
  }
};

const deleteCategoryByIdAsync = async (req, res) => {
  let ids = req.params.ids;
  let result = await CategoryService.deleteCategoryByIdAsync(ids);
  if (result.isSuccess) {
    res.sendCommonValue({}, "success", 1);
  } else {
    res.sendCommonValue({}, "failed", 0);
  }
};

module.exports = {
  getCategoryListAsync,
  deleteCategoryByIdAsync,
};
