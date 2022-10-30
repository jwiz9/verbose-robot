// Require Express Router
const router = require('express').Router();

// Import routing folders 
const dashRoutes = require('./dashboard-routes');
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api')

// Establish router.use endpoints 
router.use('/', homeRoutes);
router.use('/dash', dashRoutes);
router.use("/api", apiRoutes);

// Export router
module.exports = router;