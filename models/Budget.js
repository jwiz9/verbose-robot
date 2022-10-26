const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

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
            validate: {
                isAlphanumeric: true
            },
        },
        budget_limit: {
            type: DataTypes.DECIMAL,
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