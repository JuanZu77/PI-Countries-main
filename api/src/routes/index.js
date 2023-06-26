const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const CountriesRoutes = require ('../routes/CountriesRoutes');

const ActivitiesRoutes = require ('../routes/ActivitiesRoutes');

const router = Router();
router.use('/countries', CountriesRoutes);
router.use('/activity', ActivitiesRoutes );

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;


// const { Router } = require('express');
// const {Country, Activity} = require("../db");
// const {Op} = require("sequelize");
// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js');


// const router = Router();

// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);

// router.get("/countries", async(req, res, next)=>{
// 	try{
// 		let name=req.query.name;

// 		if(name){
// 			let nameCountries=await Country.findAll({
// 				where:{
// 					name:{
// 						[Op.iLike]: "%"+name+"%"
// 					}
// 				},
// 				include:Activity,
// 			})
// 			if(!nameCountries[0]){
// 				res.status(404).send({Data: "El Nombre de Pais No esta en nuestra Base de Datos"})
// 			}
// 			res.send(nameCountries)
// 		}else{
// 			let allCountries = await Country.findAll({
// 				include:Activity
// 			})
// 			res.send(allCountries)
// 		}
// 	}
// 	catch(err){
// 		next(err)
// 	}
// })

// router.get("/countries/:id", async (req,res,next)=>{
// 	try{
// 		let id=req.params.id.toUpperCase();
// 		let paisFiltrado

// 		if(typeof id==="string" && id.length ===3){

// 			paisFiltrado=await Country.findByPk(id,{include:Activity})

// 			if(paisFiltrado){
// 				res.send(paisFiltrado)
// 			}else{
// 				res.status(409).send({Error:"El id ingresado no existe, por favor intente con otro"})
// 			}
// 		}else{
// 			res.status(411).send({Error:"Ingrese un dato de 3 letras. No se permiten numeros"})
// 		}
// 	}
// 	catch(err){
// 		next(err)
// 	}
// })

// router.post("/activity", async(req,res,next)=>{
// 	try{
// 		let {name, difficulty, duration, season, idCountry}=req.body;

// 		if(name && difficulty && duration && season && idCountry){

// 							let searchId=await Country.findAll({
// 							where:{
// 								id: idCountry
// 							}
// 						});
					
// 							let newActivity=await Activity.create({
// 									name,
// 									difficulty,
// 									duration,
// 									season,
									
// 							});
// 							newActivity.addCountries(searchId)
// 							res.send(newActivity)
// 						}
// 	       }

// 	catch(err){
// 		next(err)
// 	}
// })

// router.get("/activity", async(req,res)=>{
// 	let respuesta= await Activity.findAll()
// 	res.send(respuesta)
// })


// module.exports = router;
