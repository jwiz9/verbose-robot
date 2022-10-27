const { Budget } = require('../models');

const budgetSeeds = [
    {
        name:'Test Budget 1', 
        budget_limit:1000, 
        user_id: 1
    },
    {
        name:'Test Budget 1', 
        budget_limit:2000, 
        user_id: 2
    },
    {
        name:'Test Budget 1', 
        budget_limit:3000, 
        user_id: 3
    },
]

const seedBudgets = () => Budget.bulkCreate(budgetSeeds);

module.exports = seedBudgets