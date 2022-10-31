// Import Model and DataTypes from Sequelize Library
const { Model, DataTypes} = require('sequelize');
// Import sequelize connection details
const sequelize = require('../config/connection');

// Initiate creation of Budget Model wtih specified columns
class Budget extends Model {}

Budget.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING, 
            allowNull: false, 
        },
        budget_limit: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false, 
            validate: {
                isDecimal: true
            },
        },
        user_id: {
            type: DataTypes.INTEGER, 
            references: {
                model: 'user', 
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "budget",
      }
);

module.exports = Budget;