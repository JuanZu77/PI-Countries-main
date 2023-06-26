import React from "react";

//COMPONENTS
import Header from "../../components/Header/Header";
//import MenuBar from "../../components/MenuBar/MenuBar";
import Cards from "../../components/CardsComponent/Cards";

//STYLE
import style from '../../views/Home/Home.module.css';

export default function Home () {
    return (
      <div className={style.container}>
      <Header/>
         <div className={style.cardsContainer}>
         <Cards/>
         </div>
      </div>

    );
};


//export defaul Home;