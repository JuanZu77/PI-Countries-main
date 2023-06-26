import React from "react";
import { filterOrder } from "../../store/actions/actions"; 
import {useDispatch} from "react-redux";

import style from './Actions.module.css';

export default function FilterByOrders({setCurrentPage}){
	const dispatch=useDispatch()


	function handleOrder(e){
		// e.preventDefault()
		dispatch(filterOrder(e.target.value))
        setCurrentPage(1)
	}

	return (
    <div>  
         <div className={style.title} >Filters</div>
        <select className={style.input}
        onChange={e=>handleOrder(e)} >
            <option value="all">Order By</option>
            <option value="asc">Ascendant</option>
            <option value="desc">Descending</option>
            <option value="min">Minimum Population</option>
            <option value="max">Maximum Population</option>
        </select>
    </div>
       )
};













//USING PROPS

// import React from "react";


// import style from './Actions.module.css';

// export default function FilterByOrders(props){

//     return (
//     <div>  
//          <div className={style.title} >Filters</div>
//         <select name="order" className={style.input}
//         onChange={props.handleByOrder} >
//             <option value="all">Order By</option>
//             <option value="asc">Ascendant</option>
//             <option value="desc">Descending</option>
//             <option value="min">Minimum Population</option>
//             <option value="max">Maximum Population</option>
//         </select>
//     </div>
//        )
// }