import {React, useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
//Action
import { searchCountry } from '../../store/actions/actions';
//style
import style from './SearchBar.module.css';


export default function SearchBar () {

     const [search, setSearch]=useState("");
 	   const dispatch = useDispatch()

	//   function handleSearch(){
      
  //      if(search.length > 0){
  //       dispatch(searchCountry(search))
        
  //     }else{
  //       alert('ingrese al menos un caracter')
  //     }
  //  }

      useEffect(()=>{
        dispatch(searchCountry(search))
      },[search,dispatch])

      function handleInput(e){
      setSearch(e.target.value);
     }

    return(
       <div>
              <input className={style.input} 
              type = 'text' 
              onChange= {event=>handleInput(event)}
              placeholder = 'Search country...'  
              />

             {/* <button title='search' className={style.button}
             onClick={()=>handleSearch()}>
                Search
            </button> */}
             
          </div>

    )
};

//export default SearchBar;