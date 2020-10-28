import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Name', type: 'input'},
    {name: 'Rate', type: 'input'},
];

export const EditTaxRate = () => <AddFormInputsScaffold isEdit={true} inpuTitle={inpuTitle} title='Tax Rate'/>