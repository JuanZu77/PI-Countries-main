
const {Country, Activity} = require('../db');
//Op (Operator) nos permite crear operaciones avanzadas y personalizadas. Permite la creacion de consultas complejas en las bases de datos
const {Op} = require('sequelize');


//GET Countries Q uery
const getCountriesName = async (name) => {
    
        if(name){
            let nameCountries=await Country.findAll({
				where:{
					name:{
						[Op.iLike]: "%"+name+"%" //sin distinción entre mayús y minús
					}
				},
				include:Activity,
			})

            if(!nameCountries){
				throw Error('Country not found!')
			}

           return nameCountries;
           
        }else{
            let allCountries = await Country.findAll({
				include:Activity
			})
            return allCountries;
        }
};



//GET Countries ID
const getCountriesId = async (id)  => {
    //include: (inluidas las actividades si es que existen registradas para este pais)

    let countryID;

        if (typeof id==="string" && id.length ===3) {
         
			countryID = await Country.findByPk(id.toUpperCase(),{include:Activity})
            
            if (countryID) {
               return countryID;

            }else{
               throw Error("There is no country with the ID entered");
           };
            
        }else{
            throw Error ("Incorrect ID");
        }
        
};

module.exports = {

    getCountriesName,  // GET ?name='' 
    getCountriesId    // GET /:id
};