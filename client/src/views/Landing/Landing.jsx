import React from "react";
import { Link } from "react-router-dom";
import style from '../Landing/Landing.module.css';


export default function Landing () {
    return (
     <>
        <div className={style.container}>
             
        <div className={style.text}>
           <h1>Countries App</h1> 
          welcome to my personal project
        </div>

        <div>
         <Link to = '/home'>
           <button className={style.enter}>Enter</button>
          </Link>
        </div>

        <div className={style.textbottom}>    
            The whole world just a click away!
        </div>
        
       </div>

     </>
    );
};


//export defaul Landing;