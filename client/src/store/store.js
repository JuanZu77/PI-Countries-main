import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import reducer from './reducer/reducer';

const store = createStore(reducer, applyMiddleware(Thunk));


export default store;


//Opcion agregando el compose con el que estemos trabajando:

// import {createStore, applyMiddleware, compose} from 'redux';
// import {createStore} from 'redux';
// import reducer from './reducer/reducer';
// import thunkMiddleware from 'redux-thunk';

// const composeEnhancer = windows.__REDUX_DEVTOLLS_EXTENSION_COMPOSE__ || compose;

//const store = createStore{ 
//      reducer, 
//      composeEnhancer(applyMiddleware(thunkMiddleware))
//};

// export default store;


