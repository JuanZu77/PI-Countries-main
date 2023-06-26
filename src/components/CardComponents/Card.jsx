
import React from "react";

import style from './Card.module.css';

import {Link} from 'react-router-dom';

export default function Card ({flag, name, continent, id,capital}){
	
	return  (
    
    <div className={style.card}>

			<Link to={`/countries/${id}`}  style={{ textDecoration: 'none'}}>
				<img src={flag} alt="img not found" width="250px" height="150px" />
				<h3>Pais: {name}</h3>
				<h3>Region: {continent}</h3>
				<h3>Capital: {capital}</h3>
			</Link>
	</div>
    )
}