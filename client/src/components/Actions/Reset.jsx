import React from'react';
import style from '../Actions/Actions.module.css';

//import { getCountry } from '../../store/actions/actions';
//import {useDispatch} from 'react-redux';

export default function Reset () {

    function handleReset(){ 
        window.location.reload();
    };

    return(

        <div>
        <button className={style.button}
        onClick={event=>handleReset(event)} >
            Reset filters
        </button>
      </div>

    )
};



//USING PROPS

// import React from'react';
// import style from '../Actions/Actions.module.css';

// export default function Reset (props) {

//     return(

//         <div>
//         <button className={style.button}
//         onClick={props.handleReset} >
//             Reset filters
//         </button>
//       </div>

//     )
// }