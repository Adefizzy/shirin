import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Select Subsidiary', type: 'select'},
    {name: 'Name', type: 'input'},
    {name: 'Registration Number', type: 'input'},
    {name: 'Email Address', type: 'input'},
    {name: 'Phone', type: 'input'},
    {name: 'Website', type: 'input'},
    {name: 'Address', type: 'input'},
    {name: 'Description', type: 'textarea'},
];


export const EditSubidiary= () => <AddFormInputsScaffold inpuTitle={inpuTitle} isEdit={true} title='Organization Subsidiary'  descriptionTitle='Subsidiary'/>