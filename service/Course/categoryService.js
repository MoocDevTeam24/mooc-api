const { sequelize } = require("../../db/sequelizedb");
const Category = require("../../models/category");
const getCategoryListAsync = async () => {
  // let countSql = "SELECT count(*) total FROM user; ";
  // let resultCount = await db.query(countSql);
  // let total = resultCount[0][0].total;
  // if (total == 0) {
  //   return { isSuccess: true, message: "", data: { items: [], total: 0 } };
  // }

  const categories = await Category.findAll();
  return {
    isSuccess: true,
    message: "",
    data: {
      items: categories,
    },
  };

  // let sql = "SELECT * FROM user limit ? offset ? ;";
  // let resultData = await db.query(sql, [pageSize, (page - 1) * pageSize]);

  // let userlist = [];
  // if (resultData[0].length > 0) {
  //   resultData[0].forEach((element) => {
  //     let user = { id: 0 };
  //     user.id = element.id;
  //     user.username = element.username;
  //     //user.password = element.password;
  //     user.email = element.email;
  //     user.age = element.age;
  //     user.gender = element.gender;
  //     userlist.push(user);
  //   });
  // }
  // return {
  //   isSuccess: true,
  //   message: "",
  //   data: { items: userlist, total: total },
  // };
};

module.exports = { getCategoryListAsync };
