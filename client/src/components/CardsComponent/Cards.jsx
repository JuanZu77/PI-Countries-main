import React from "react";
import Card from "../CardComponents/Card";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

//Action
import {getCountry} from '../../store/actions/actions';

//Pagination
import Pagination from '../Pagination/Pagination';
import MenuBar from "../MenuBar/MenuBar";

//Style
import style from './Cards.module.css';


export default function Cards(){
    //useSelector me traigo las countries del store
	const allCountry= useSelector((state)=>state.countries)  
	const dispatch = useDispatch()

	const[currentPage, setCurrentPage]=useState(1)
	const countriesPerPage= 10;

	//Debo definir valor de Pagina Inical y de la última Pagina para q trabajen de forma dinámica
	                   //     1     *   10 --> 1*10 = 10 
	const lastCountries = currentPage * countriesPerPage; 
	               //      10        -       10 --> 10-10=0      
	const firstCountries =  lastCountries - countriesPerPage;

	//Agregamos del 1(firstCountries) al 10(lastCountries) elementos por pagina
	const currentCountries = allCountry.slice(firstCountries,lastCountries);

	const paying=(pageNumber)=>{
		setCurrentPage(pageNumber)
	}

	//renderizar con cada cambio en la variable del array de dependencias 
	useEffect(()=>{
		dispatch(getCountry())
	},[dispatch])


	return (
	 <div className={style.container}>
		<div>
		<MenuBar 
		setCurrentPage={setCurrentPage}/>
		</div>
	
		 <div>
			<Pagination 
			allCountry={allCountry.length} 
			countriesPerPage={countriesPerPage} 
			paying={paying}
			page={currentPage}
			setPage={setCurrentPage}
			/>

			<div className={style.containerCard}>
				
				{currentCountries.map((e)=>{
					return <Card key={e.id} id={e.id} name={e.name} flag={e.flag} continent={e.continent} capital={e.capital}/>
				})}
		   </div>
		
	     </div>

	</div>
	)
}

//Opcion 2 mapear allcountry y separar cada 10
// {allCountry.map((e)=>{
// 	return <Card key={e.id} id={e.id} name={e.name} flag={e.flag} continent={e.continent}/>
// }).slice(firstCountries,lastCountries)}