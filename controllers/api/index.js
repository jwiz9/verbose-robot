const router = require('express').Router();
const userRoutes = require('./user-routes');
const budgetRoutes = require('./budget-route');
const expenseRoutes = require('./expense-route')

router.use('/users', userRoutes);
router.use('/budgets', budgetRoutes);
router.use('/expense', expenseRoutes);


module.exports = router;