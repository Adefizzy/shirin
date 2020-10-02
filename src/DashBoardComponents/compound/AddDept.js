import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Task Title', type: 'input'},
    {name: 'Type (Optional)', type: 'select'},
    {name: 'Associated With Deal: (Optional)', type: 'select'},
    {name: 'Type to search', type: 'input'},
    {name: 'Assigned To: (Optional)', type: 'select'},
    {name: 'Due Date : (Optional)', type: 'date'},
    {name: 'Note', type: 'textarea'},
];

export const AddDepartment = () => <AddFormInputsScaffold inpuTitle={inpuTitle} title='Employee Department'/>