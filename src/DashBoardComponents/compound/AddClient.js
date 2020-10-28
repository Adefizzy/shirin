import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Select Company', type: 'select'},
    {name: 'Client Name', type: 'input'},
    {name: 'Client Telephone', type: 'input'},
    {name: 'Client Address', type: 'input'},
    {name: 'Country', type: 'select'},
    {name: 'Selete State', type: 'select'},
    {name: 'Select City', type: 'select'},
    {name: 'Description', type: 'textarea'}
];

export const AddClient = () => <AddFormInputsScaffold inpuTitle={inpuTitle} title='Cash Sales'/>