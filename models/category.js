"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      CategoryName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      Description: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      ParentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Created_At: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      Updated_At: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      Created_By: {
        type: DataTypes.INTEGER,
        references: {
          model: user,
          key: "id",
        },
      },
      Updated_By: {
        type: DataTypes.INTEGER,
        references: {
          model: user,
          key: "id",
        },
      },
      IconUrl: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
