const { Sequelize } = require("sequelize");
const { mysqlConfig } = require("../appConfig");
// const mysql2 = require('mysql2/promise');

// const db = mysql2.createPool({
//   host: mysqlConfig.host,
//   port: mysqlConfig.port,
//   user: mysqlConfig.user,
//   password: mysqlConfig.password,
//   database: mysqlConfig.database,
// });

const sequelize = new Sequelize(
  mysqlConfig.database,
  mysqlConfig.user,
  mysqlConfig.password,
  {
    host: mysqlConfig.host,
    port: mysqlConfig.port,
    dialect:
      "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  }
);

sequelize
  .authenticate()
  .then((x) => {
    console.log("Connection has been established successfully.");
  })
  .catch((r) => {
    console.error("Unable to connect to the database:", r);
  });

module.exports = {
  sequelize, 
};
