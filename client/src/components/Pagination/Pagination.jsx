
import React from "react";

import style from '../Pagination/Pagination.module.css';

export default function Pagination ({allCountry,countriesPerPage, paying, page, setPage}){
    
	const numberpage=[];

	//Dividir la cantidad total por el nro de paises por pagina 
	for(var i=1; i<=Math.ceil(allCountry/countriesPerPage); i++){
		numberpage.push(i);
	}
    //retornar el componente nav (nav=paginacion). Generamos todas las paginas y cada items va a contener un boton (onClick) a traves del cual voy a acceder a la pagina clickeada. 

//Previus Page
const onPreviusPage=()=>{setPage(page-1)}

//Next Page
const onNextPage =()=>{setPage(page+1)}

	return (
<div>
	<div className={style.containPreviusNext}>
       <button className={page===1 ? style.invalid : style.previusNext}
	   onClick={onPreviusPage}>Previus 
	   </button>
	   <button className={page>=numberpage.length ? style.invalid : style.previusNext}
	   onClick={onNextPage}>Next 
	   </button>
     </div>
	<nav className={style.paginado}>


		<ul className={style.paginado}>
			{numberpage &&
				numberpage.map(number=>(
					<li key={number} className={number===page ? style.activeLI : style.inactiveLI}>
					<button className={number===page ?style.buttonActual: style.buttonPag} 
					onClick={() => paying(number)}>{number}</button>
					</li>
			))}
		</ul>
	</nav>
	</div>		
	)
}



