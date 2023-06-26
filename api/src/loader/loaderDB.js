const axios = require ("axios");
const { Country } = require('../db');
const urlapi= "https://rest-countries.up.railway.app/v2/all";

const loaderDB=async()=>{
	const getapi= await axios.get(urlapi);
	const allCountry=getapi.data;
	try{
		allCountry.map(async(e)=>{
			await Country.findOrCreate({ 
				//creo los registros en la tabla donde:
				where:{
					id:e.alpha3Code,
					name:e.name, 
					flag: e.flags.svg, 
					continent:e.region,
					capital:e.capital ? e.capital : "There is no capital",
					subregion:e.subregion ? e.subregion : "There is no Subregion",
					area:e.area+" Km2",
					population:e.population
				}
			})
		});
	}
	catch(err){
		console.log("error loading database",err)
	}
}

module.exports = loaderDB;





//https://restcountries.com/v3/all
// id:e.cca3, 
// name:e.name.common, 
// flag: (e.flags)[0], //es array
// continent:e.region,
// capital:e.capital ? e.capital[0] : "There is no capital",
// subregion:e.subregion ? e.subregion : "There is no Subregion",
// area:e.area+" Km2",
// population:e.population


