// Require Express Router
const router = require('express').Router();

// Import routing folders 
const userRoutes = require('./user-routes');
const budgetRoutes = require('./budget-route');
const expenseRoutes = require('./expense-route');
const buildRoutes = require('./build-routes');

// Establish router.use endpoints 
router.use('/users', userRoutes);
router.use('/budgets', budgetRoutes);
router.use('/expense', expenseRoutes);
router.use('/build', buildRoutes);

// Export router module
module.exports = router;