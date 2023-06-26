export  default function validate(input) {
    let errors = {};
      if(!input.name){
        errors.name ="Name is required";

    }else if(! /^[A-Za-z\s]+$/.test(input.name)){
       errors.name = 'Name can only contain letters';

    }else if(input.name.length < 6  ){
      errors.name = 'min 5 characters allowed';
    }

    else if( input.name.length > 21){
      errors.name = 'max 20 characters allowed';
    }


    else if(!input.difficulty){
      errors.difficulty ="Dificulty is required"

    } 
    
    else if(!input.duration){
      errors.duration ="Please select duration"

    } 
    
    else if(!input.season){
      errors.season ="Please select season"

    } 

    else if(!input.countries.length){
      errors.countries ="Please select countries"

    } 
    
    return errors;
  }

 // Solo letras --> /^[A-Za-z]+$/
 // Solo letras y espacios /^[A-Za-z\s]+$/ 
 // letras y espacios opcion2: /^[A-Za-z ]+$/

// ^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/
