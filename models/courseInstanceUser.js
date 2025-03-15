const  {DataTypes} = require("sequelize");
const {sequelize} = require("../db/sequelizedb");

const CourseInstanceUser = sequelize.define("CourseInstanceUser", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    courseInstanceId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'courseInstanceUser',
      timestamps: false
    });

    CourseInstanceUser.associate = function(models){
        CourseInstanceUser.belongsTo(models.CourseInstance, {foreignKey:"courseInstanceId"});
        CourseInstanceUser.belongsTo(models.User,{foreignKey: "userId"});
    };

    module.exports = CourseInstanceUser;
