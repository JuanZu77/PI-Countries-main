const {postActivitiesDB, getActivities} = require('../controllers/ActivitiesControllers'); 

const postHandlerActivitiesDB = async (req, res) =>{

    const {name, difficulty, duration, season, countries} = req.body

    try{
    const postActivity = await postActivitiesDB(name, difficulty, duration, season, countries);
    res.status(200).json(postActivity);

    }
    catch (err) {
        res.status(404).json({err:err.message});
    }
};


const getHandlerActivities = async (req, res) => {

    const {name, difficulty, duration, season, countries} = req.body;
    try{
        const getAllActivities = await getActivities(name, difficulty, duration, season, countries);

        res.status(200).json(getAllActivities);    
    }
    
    catch (err) {
        res.status(404).json({err:err.message});
    }

};



module.exports = {
    postHandlerActivitiesDB,
    getHandlerActivities 
}