const usersSeed = require('./log');
const seedBudgets = require('./budgetseeds');
const seedExpenses = require('./expenseseeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await usersSeed();
    await seedBudgets();
    await seedExpenses();
    process.exit(0);
};

seedAll();