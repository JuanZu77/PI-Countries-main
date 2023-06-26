
const { Activity} = require('../db');

//POST new activities
const postActivitiesDB = async (name, difficulty, duration, season, countries) => {

          if(name && difficulty && duration && season && countries){

           let newActivity = await Activity.create({
                        name,
                        difficulty,
                        duration,
                        season,
                        countries
                });

           // console.log(newActivity); 
            newActivity.addCountries(countries);
            return newActivity;

        }
        // else {
        //     throw Error('You must complete all fields');
        // }
 };


//GET all activities
const getActivities = async () => {
       return await Activity.findAll();
};


module.exports = {
        postActivitiesDB, 
        getActivities
};
