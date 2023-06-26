import { GET_COUNTRY,SEARCH_COUNTRY, GET_DETAIL,FILTER_CONTINENT, FILTER_ORDER, GET_ACTIVITY, FILTER_ACTIVITY, POST_ACTIVITY } from "../actions/actionsTypes";

const initialState={
	countries:[],
	allCountry:[],
	countryDetail:[],
	activities:[]
}

export default function reducer(state=initialState, action){
	switch(action.type){
		case GET_COUNTRY:
			return{
				...state,
				countries:action.payload,
				allCountry:action.payload
			}
		case SEARCH_COUNTRY:
			return{
				...state,
				countries:action.payload
			}
		case GET_DETAIL:
			return{
				...state,
				countryDetail:action.payload
			}
		case FILTER_CONTINENT:
			const allCountry=[...state.allCountry];
			const filterContinent= action.payload === "all" ? allCountry : allCountry.filter(e=> e.continent === action.payload)
			return{
				...state,
				countries:filterContinent
			}
		case FILTER_ACTIVITY:
			const allactivities=[...state.allCountry.filter((e)=>{
				return e.activities.length > 0
			})];

			const filterActivity= action.payload === "all" ? allactivities : allactivities.filter(e=> {
                return(
                    e.activities.find(r => r.name === action.payload)
                )});

			return{
				...state,
				countries:filterActivity
			}
		case FILTER_ORDER:
			let OrderCountry= [...state.countries];

			if(action.payload === "asc"){
				OrderCountry=OrderCountry.sort(function (a, b) {
  					if (a.name > b.name) {
    					return 1;
  					}
  					if (a.name < b.name) {
    					return -1;
  					}
  					return 0;
				});
			}
			if(action.payload === "desc"){
				OrderCountry=OrderCountry.sort(function (a, b) {
  					if (a.name > b.name) {
    					return -1;
  					}
  					if (a.name < b.name) {
    					return 1;
  					}
  					return 0;
				});
			}
			if(action.payload === "min"){
				OrderCountry=OrderCountry.sort(function (a, b) {
  					if (a.population > b.population) {
    					return 1;
  					}
  					if (a.population < b.population) {
    					return -1;
  					}
  					return 0;
				});
			}
			if(action.payload === "max"){
				OrderCountry=OrderCountry.sort(function (a, b) {
  					if (a.population > b.population) {
    					return -1;
  					}
  					if (a.population < b.population) {
    					return 1;
  					}
  					return 0;
				});
			}
			return{
				...state,
				countries:OrderCountry
			}
		case POST_ACTIVITY:
			return {
				...state,
			}
		case GET_ACTIVITY:
			return {
				...state,
				activities:action.payload
			}
		default:
			return state;
	}
 
}


		