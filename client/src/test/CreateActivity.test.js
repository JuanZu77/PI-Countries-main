import React from 'react';
import {render, screen} from '@testing-library/react';

import CreateActivity from '../views/Form/CreateActivity';

test('El componente existe en el Documento', ()=>{
    render(<CreateActivity/>);
       const labelName = screen.getByLabelText(/Activity Name:/i)
       expect(labelName).toBeInTheDocument();
});