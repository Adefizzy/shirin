import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Name', type: 'input'},
    {name: 'Rate', type: 'input'},
];

export const AddTaxRate = () => <AddFormInputsScaffold inpuTitle={inpuTitle} title='Tax Rate'/>