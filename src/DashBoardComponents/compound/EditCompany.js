import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Name', type: 'input'},
    {name: 'Domain or Website', type: 'input'},
    {name: 'Address', type: 'input'},
    {name: 'Description', type: 'textarea'},
];

export const EditCompany = () => <AddFormInputsScaffold inpuTitle={inpuTitle} title='Company' isEdit={true}/>