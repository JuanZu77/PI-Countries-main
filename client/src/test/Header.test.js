import React from 'react';
import {render, screen} from '@testing-library/react';
import Header from '../components/Header/Header';

// describe('Header component', ()=>{

//    it('El componente existe en el Documento', ()=>{
//         render(<Header/>);
//         expect(screen.getByText(/Countries App/i)).toBeInTheDocument();
//     })


// });

test('El componente existe en el Documento', ()=>{
    render(<Header/>);
        expect(screen.getByText(/Countries App/i)).toBeInTheDocument();
});



//screen --> funcion que nos permite recuperar elementos del componente que estamos renderizando. De JSX a HTML y desde este HTML rescatar los elementos