import {React, useEffect} from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
//Actions
import { getActivity, filterActivity } from '../../store/actions/actions';

import style from './Activity.module.css';
import { Link } from "react-router-dom";

export default function Activity ({setCurrentPage}) {

    const dispatch=useDispatch()

	let allActivities=useSelector((state)=>state.activities)

	useEffect(()=>{
		dispatch(getActivity())
	},[dispatch])


    function handleActivity(e){
		e.preventDefault()
		dispatch(filterActivity(e.target.value))
        setCurrentPage(1)
	}

    return(

     <div className={style.activitycontainer}>
      <div className={style.titleAct}>Activities</div>
        <div >
          <select onChange={event=>handleActivity(event)}>
                <option>
                    Select activity
                </option>  
                {
                allActivities.map((event)=>(
                    <option key={event.id} value={event.name}>
                        {event.name}
                    </option>
                ))
                }
            </select>
        </div>

        
        <Link to = '/activity'><button className={style.button}>Create Activity</button></Link>
      </div>

    )
}