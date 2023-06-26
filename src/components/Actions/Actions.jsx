import React from "react";

//Component Actions
import SearchBar from "../Actions/SearchBar";
import FilterContinent from "../Actions/FilterContinent";
import FilterByOrders from "../Actions/FilterByOrders";
import Reset from "../Actions/Reset";

export default function Actions({setCurrentPage, allCountries}){
     return(
        <div>
            <SearchBar/>
            <FilterContinent setCurrentPage={setCurrentPage}/>
            <FilterByOrders setCurrentPage={setCurrentPage}/>
            <Reset/>
        </div>
     )
};