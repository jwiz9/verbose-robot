const router = require('express').Router();

const dashRoutes = require('./dash');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/dash', dashRoutes);

module.exports = router;