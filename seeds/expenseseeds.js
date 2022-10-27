const { Expense } = require('../models');

const expenseSeeds = [
    {
        expense_name: 'test expense', 
        expense_description: 'I bought something',
        expense_date: 2022-01-15,
        budget_id: 2

    },
    {
        expense_name: 'test2expense', 
        expense_description: 'I bought something',
        expense_date: 2022-01-15,
        budget_id: 3
    },
    {
        expense_name: 'test expense', 
        expense_description: 'I bought something',
        expense_date: 2022-01-15,
        budget_id: 1
    },
]

const seedExpenses = () => Expense.bulkCreate(expenseSeeds);

module.exports = seedExpenses