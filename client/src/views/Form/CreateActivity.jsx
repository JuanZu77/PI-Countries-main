import React from "react";
import {useDispatch, useSelector} from 'react-redux'; 
import { useEffect, useState } from "react";

//REDUX/Store/Actiones {getCountry, addActivity}
import {getCountry, addActivity} from '../../store/actions/actions';

//LINK
import {Link} from 'react-router-dom';

//Validations Form
import validate from "../../utils/validate";

//Components
import Header from '../../components/Header/Header';

//Style
import style from '../Form/CreateActivity.module.css';

export default function CreateActivity (props) {
        //dispacth
        const dispatch = useDispatch()
        //selector
        const country = useSelector((state)=>state.countries)

        //state
        const [inputBody, setInputBody] = useState({
          name:'',
          difficulty:"",
          duration:"",
          season:"",
          countries:[]
        });

        //setErrors
        const [errors, setErrors] = useState({});

//HandleInput NAME
        function handleInput(e){
          //e.preventDefault()
          setInputBody({
            ...inputBody,
            [e.target.name]:e.target.value
          })
          //valido exactamente lo que se esta seteando (serInputBody)
          setErrors(validate({
            ...inputBody,
            [e.target.name]: e.target.value
          }));

        };

//Input select for DIFICULTY, DURATION, SEASON
        function handleSelect(e){
          //e.preventDefault()
          setInputBody({
            ...inputBody,
            [e.target.name]:e.target.value
          })
        setErrors(validate({
            ...inputBody,
            [e.target.name]: e.target.value
          }));

        };

//Input select COUNTRY
      	function handleSelectCountry(e){
          //e.preventDefault()
          setInputBody({
            ...inputBody,
            countries:[...inputBody.countries, e.target.value]
          })

          setErrors(validate({
            ...inputBody,
            countries:[...inputBody.countries, e.target.value]
          }));
        };

        
//delete country Adds
        function handleDelete(e){
          setInputBody({
            ...inputBody,
            countries: inputBody.countries.filter((del)=> del!==e)
          })	
        }

//handleSubmit FORM
          function handleSubmit(e){
            e.preventDefault()

            if(errors.name || errors.difficulty || errors.duration || errors.season || errors.countries){
              alert("Loading errors. Check the fields...")
            }
              else if(inputBody.countries.length===0){
              alert("You must select a country")
  
            }
            else{

              if(inputBody.name && inputBody.difficulty && inputBody.duration && inputBody.season && inputBody.countries ){
                dispatch(addActivity(inputBody));
                alert("activity created")
  
                setInputBody({
                  name:'',
                  countries:[]
                })
                e.target.reset()
             
              }else{
                alert("You must complete all fields")
              }
            }
        
          };

//useEffect for getCountry()
        useEffect(()=>{
          dispatch(getCountry())
        },[dispatch]);


    return (

  <div className={style.container}>
        <Header/>

        <div className={style.createContainer}>  
        
         <div>
{/*FORM */}
          <form className={style.formContainer} onSubmit={event=>handleSubmit(event)} >
                  <p className={style.title}>Create Activity</p>

 {/*NAME*/}                 
      <div>
            <label className={style.atribute}> Activity Name: </label>

            <input className={style.input} 
              type = 'text' 
              value = {inputBody.name} 
              name ='name'
              onChange={event=>handleInput(event)}>
            </input>   
            {errors.name ? <p className={style.warning}>{errors.name}</p> : null } 
      </div>

{/*DIFICULTY*/}   
      <div>
            <label className={style.atribute}>Difficulty: </label>

            <select className={style.select}
            name="difficulty" 
            onChange={event=>handleSelect(event)}>
            <option></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
            {errors.difficulty ? <p className={style.warning}>{errors.difficulty}</p> : null } 
			</div>
            
 {/*DURATION*/}    
        <div>
              <label className={style.atribute}>Duration: </label>
              <select className={style.select}
              name="duration" 
              onChange={event=>handleSelect(event)}>
              <option></option>
              <option value="1">1hs</option>
              <option value="2">2hs</option>
              <option value="3">3hs</option>
              <option value="4">4hs</option>
              <option value="5">5hs</option>
              <option value="6">6hs</option>
              <option value="7">7hs</option>
              <option value="8">8hs</option>
              <option value="9">9hs</option>
              <option value="10">10hs</option>
              <option value="11">11hs</option>
              <option value="12">12hs</option>
              <option value="13">13hs</option>
              <option value="14">14hs</option>
              <option value="15">15hs</option>
              <option value="16">16hs</option>
              <option value="17">17hs</option>
              <option value="18">18hs</option>
              <option value="19">19hs</option>
              <option value="20">20hs</option>
              <option value="21">21hs</option>
              <option value="22">22hs</option>
              <option value="23">23hs</option>
              <option value="24">24hs</option>
              </select>
              {errors.duration? <p className={style.warning}>{errors.duration}</p> : null } 
		    </div>


 {/*SEASON*/}  
        <div>
              
            <label className={style.atribute}>Season: </label>
            
            <select className={style.select}
            name="season" 
            onChange={event=>handleSelect(event)}>
            <option></option>
            <option value="summer">summer</option>
            <option value="autumn">autumn</option>
            <option value="winter">winter</option>
            <option value="spring">spring</option>
            </select>
            {errors.season ? <p className={style.warning}>{errors.season}</p> : null } 
        </div>

 {/*COUNTRIES*/}  
        <div>
            <label className={style.atribute}>Countries: </label>
            <select className={style.select} 
            
            onChange= {event=>handleSelectCountry(event)}
            //required
            >
            <option></option>

             {country.map((e)=>(
              <option key={e.id} value={e.id}>{e.name}</option>))
            } 
            </select>
            {errors.countries ? <p className={style.warning}>{errors.countries}</p> : null } 
        
			  </div>


{/*DESDE AQUI LOS BOTONES*/}

    {/*BACK*/}
        <div className={style.buttonscontainer}>
              <Link to = '/home'><button className={style.button}>Back</button>
              </Link>

             <button className={style.button} 
              type='submit' >
                   Add Activity
              </button>
        </div>
      </form>

              
    {/*ADD Countries in Activity Created + Button X delete*/}            
      
            <div className={style.countriesADDcontainer}>

                 {inputBody.countries.map(e=>
              <div>
                  <p>{e}</p>
                  <button className={style.buttonXdelete}
                  onClick={()=>handleDelete(e)}
                  >
                    x
                  </button>
              </div>
              )}
               
            </div> 

      

      </div>{/*cierre div cardContainer*/}
      </div>{/*cierre div form*/}
  </div>

  );
};


//export default CreateActivity;