import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'First Name', type: 'input'},
    {name: 'Last Name', type: 'input'},
    {name: 'Middle Name', type: 'input'},
    {name: 'Date of Birth', type: 'date'},
    {name: 'Gender', type: 'select'},
    {name: 'Age', type: 'input'},
    {name: 'Subsidiary', type: 'select'},
    {name: 'Location', type: 'select'},
    {name: 'District', type: 'select'},
    {name: 'Department', type: 'select'},
    {name: 'Designation', type: 'input'},
    {name: 'Grade', type: 'select'},
];

export const AddEmployeeInfo = () => <AddFormInputsScaffold inpuTitle={inpuTitle} title=' Employee Information' descriptionTitle='New Employee'/>