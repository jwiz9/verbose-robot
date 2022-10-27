const router = require('express').Router();

const dashRoutes = require('./dashboard-routes');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
router.use('/dash', dashRoutes);

module.exports = router;