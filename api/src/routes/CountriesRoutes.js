
const {Router} = require ('express');
const {getHandlerCountriesName, getHandlerCountriesId} = require('../handlers/countriesHandlers');

const {validateName} = require('../middleware/validateActivity');

const router = Router ();


router.get ('/', getHandlerCountriesName); //query
router.get('/:id', getHandlerCountriesId); //params

module.exports = router;