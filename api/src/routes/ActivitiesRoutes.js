
const {Router} = require ('express');
const {postHandlerActivitiesDB, getHandlerActivities} = require('../handlers/activityHandlers');

const validateActivity = require('../middleware/validateActivity');

const router = Router ();

router.post ('/', validateActivity, postHandlerActivitiesDB);
router.get('/', getHandlerActivities);

module.exports = router;