const {getCountriesName, getCountriesId} = require('../controllers/CountriesController');


const getHandlerCountriesName = async (req, res) => {
       
    const {name} = req.query;
    console.log(name)

    try{
        const countriesName = await getCountriesName(name);
        res.status(200).json(countriesName);
    }
    catch (err) {
        res.status(404).json({err:err.message});
    }
};


const getHandlerCountriesId = async (req, res) => {

    const  {id} = req.params;

    try{
        const countriesId = await getCountriesId(id);
        res.status(200).json(countriesId);
    }
    catch (err) {
        res.status(404).json({err:err.message});
    }
};


module.exports = {
    getHandlerCountriesName,
    getHandlerCountriesId
};

