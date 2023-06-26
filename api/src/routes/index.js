const { Router } = require('express');

const CountriesRoutes = require ('../routes/CountriesRoutes');

const ActivitiesRoutes = require ('../routes/ActivitiesRoutes');

const router = Router();
router.use('/countries', CountriesRoutes);
router.use('/activity', ActivitiesRoutes );


module.exports = router;

