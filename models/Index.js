// Import All Models
const User = require('./User');
const Budget = require('./Budget');
const Expense = require('./Expense');

// Establish Model relationships
User.hasMany(Budget, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// User.hasMany(Expense, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });

Budget.belongsTo(User, {
    foreignKey: 'user_id'
});

Budget.hasMany(Expense, {
    foreignKey: 'budget_id', 
    onDelete: 'CASCADE',
});

Expense.belongsTo(Budget, {
    foreignKey: 'budget_id'
});

// Expense.belongsTo(User, {
//     foreignKey: 'user_id'
// });

// Export all Model relationships
module.exports = {
    User, 
    Budget, 
    Expense
};


