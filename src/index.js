import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>

      <BrowserRouter>
        <Provider store={store}>
         <App />
        </Provider>
      </BrowserRouter>
      
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// {/* <React.StrictMode>
// Proporciona un componente auxiliar llamado StrictMode para resaltar piezas de código que se desvían de las prácticas estándar en React
// <BrowserRouter> 
// almacena la ubicación actual en la barra de direcciones del navegador mediante URL limpias y navega utilizando la pila de historial integrada del navegador

//   <Provider store={store}>
//   El Provider es un componente envolvente de React Redux que envuelve tu aplicación React. Esta envoltura te permite acceder a las funciones Redux store y dispatch a la cual debemos indicarle como prop cual es el STORE.
//    <App />
//   </Provider>
// </BrowserRouter>
// </React.StrictMode> */}