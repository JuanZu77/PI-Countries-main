import React from "react";

//components
import Actions from "../Actions/Actions";
import Activity from "../ActivityNav/Activity";

//STYLE
import style from '../MenuBar/MenuBar.module.css';
    
export default function MenuBar ({setCurrentPage}) {
         return(

            <div className={style.container}>            
            <Actions 
            setCurrentPage={setCurrentPage}/>
            <Activity setCurrentPage={setCurrentPage}/>
      </div>

    )
};

