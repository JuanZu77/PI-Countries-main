import React from'react';
import style from '../Actions/Actions.module.css';
import {filterContinent} from '../../store/actions/actions';

import {useDispatch} from 'react-redux';

export default function FilterContinent({setCurrentPage}) {

   const dispatch = useDispatch()

    function handleFilter(e){
     // e.preventDefault()
      dispatch(filterContinent(e.target.value))
      setCurrentPage(1)
    }
    
    return(
    <div>
    <div className={style.title} >Order by Continent</div>

    <select className={style.input} 
         onChange={event=>handleFilter(event)}>

      <option value ='all'> Show all </option>
      <option value='Africa'> Africa </option>
      <option value='Americas'> Americas </option>
      <option value='Antarctic'> Antarctic </option>
      <option value ='Asia'> Asia </option>
      <option value='Europe'> Europa </option>
      <option value='Oceania'> Oceania </option>
    </select>
  </div>

    )
};




//USING PROPS

// import React from'react';
// import style from '../Actions/Actions.module.css';

// export default function FilterContinent(props) {

   
//     return(
//     <div>
//     <div className={style.title} >Order by Continent</div>

//     <select className={style.input} 
//          onChange={props.handledFilter}>

//       <option value ='all'> Show all </option>
//       <option value='Africa'> Africa </option>
//       <option value='Americas'> Americas </option>
//       <option value='Antarctic'> Antarctic </option>
//       <option value ='Asia'> Asia </option>
//       <option value='Europe'> Europa </option>
//       <option value='Oceania'> Oceania </option>
//     </select>
//   </div>

//     )
// };