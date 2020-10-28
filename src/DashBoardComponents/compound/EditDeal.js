import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Deal Title', type: 'input'},
    {name: 'Subsidiary (Optional)', type: 'select'},
    {name: 'Client Name', type: 'input'},
    {name: 'Select Product', type: 'select'},
    {name: 'Status', type: 'select'},
    {name: 'Estimated Amount', type: 'input'},
    {name: 'Description', type: 'textarea'},
];

export const EditDeal = () => <AddFormInputsScaffold inpuTitle={inpuTitle} title='Deal' isEdit={true}/>