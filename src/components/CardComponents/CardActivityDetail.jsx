import React from "react";

//style idem component Detail
import style from './Card.module.css';

export default function CardActivityDetail ({activities}){
   
    if (activities && activities.length > 0) {
        return (
            <div className={style.activityContainer}>

                <h2>-----------------------</h2>
                <h3>Activities for Country:</h3>
                
                <div className={style.activities}>

                    {activities && activities.map((e) => (
                        <ul key={e.id} >
                            <li>Name: {e.name}</li>
                            <li>Duration (hour): {e.duration}</li>
                            <li>Difficulty: {e.difficulty}</li>
                            <li>Season: {e.season}</li>
                            <li>-----------</li>
                        </ul>
                    ))}
                </div>   
            </div>

            
        )
    } else {
        return <h3 className={style.noActivity}>No activities were created this country</h3>
    }
}