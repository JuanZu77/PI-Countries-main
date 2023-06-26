const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const CountriesRoutes = require ('../routes/CountriesRoutes');

const ActivitiesRoutes = require ('../routes/ActivitiesRoutes');

const router = Router();
router.use('/countries', CountriesRoutes);
router.use('/activity', ActivitiesRoutes );


module.exports = router;

