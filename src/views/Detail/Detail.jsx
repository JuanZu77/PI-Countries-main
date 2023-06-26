import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';

import { Link } from "react-router-dom";

//Action
import {getCountriesDetail} from '../../store/actions/actions';

//Params
import { useParams} from "react-router-dom";

//Import cardActivity
import CardActivityDetail from "../../components/CardComponents/CardActivityDetail";

import Header from '../../components/Header/Header';

import style from './Detail.module.css';

export default function Detail (props) {

     const country=useSelector((state)=>state.countryDetail)
     const dispatch=useDispatch();
	   let {id}=useParams();

	useEffect(()=>{
		dispatch(getCountriesDetail(id))
	},[id, dispatch])

     return(
<div className={style.container}>
        <Header/>
        <div className={style.buttonscontainer}>
              <Link to = '/home'>
                <button className={style.button}>
                    Home
                </button>
              </Link>
      </div>
      <div className={style.detailContainer}>
        <div>      

          <div className={style.detail}>
          <h3>ID: {country.id}</h3>
          <h1>{country.name}</h1>
          <div><img src={country.flag} alt="img not found" width="250px" height="150px"/></div>
          <h3>Continent: {country.continent}</h3>
          <h3>Capital: {country.capital}</h3>
          <h3>Subregion: {country.subregion}</h3>
          <h3>Area: {country.area}</h3>
          <h3>Population: {country.population} Persons</h3>
        <div>
               <CardActivityDetail activities={country.activities}/>
        </div>
     </div>
   
    </div>
  </div>  
</div>
     );
};

//export default Detail;