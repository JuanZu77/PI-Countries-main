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
		console.log(('Successfully loaded BD'))
	}
	catch(err){
		console.log(err)
		throw Error("error loading database",err)
	}
}

module.exports = loaderDB;


//Prueba con Promesas
// const loaderDB=async()=>{
// 	axios.get(urlapi)
// 	.then((res)=>res.data)
// 	.then(data=>{
// 	let allCountry = data.map((e)=>{
// 	Country.findOrCreate({ 
// 	//creo los registros en la tabla donde:
// 	where:{
// 	id:e.alpha3Code,
// 	name:e.name, 
// 	flag: e.flags.svg, 
// 	continent:e.region,
// 	capital:e.capital ? e.capital : "There is no capital",
// 	subregion:e.subregion ? e.subregion : "There is no Subregion",
// 	area:e.area+" Km2",
// 	population:e.population
// 	}
// 	})
// 	});
// 	return allCountry;
// 	})
// 	.then(()=>console.log('loaded database'))
// 	.catch((err)=>{
// 	console.log(err)
// 	throw Error("error loading database",err)
// 	})
	

//https://restcountries.com/v3/all
// id:e.cca3, 
// name:e.name.common, 
// flag: (e.flags)[0], //es array
// continent:e.region,
// capital:e.capital ? e.capital[0] : "There is no capital",
// subregion:e.subregion ? e.subregion : "There is no Subregion",
// area:e.area+" Km2",
// population:e.population


