// Import Model and DataTypes from Sequelize Library
const { Model, DataTypes } = require("sequelize");
// Import sequelize connection details
const sequelize = require("../config/connection");

// Initiate creation of Expense Model wtih specified columns
class Expense extends Model {}

Expense.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    expense_name: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   isAlphanumeric: true,
      // },
    },
    expense_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    expense_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    expense_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    budget_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "budget",
        key: "id",
      },
    },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //       model: 'user',
    //       key: 'id'
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "expense",
  }
);

module.exports = Expense;
