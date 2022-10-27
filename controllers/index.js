const router = require('express').Router();

const dashRoutes = require('./dashboard-routes');
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api')

router.use('/', homeRoutes);
router.use('/dash', dashRoutes);
router.use("/api", apiRoutes);

module.exports = router;