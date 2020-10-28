import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Employee', type: 'select'},
    {name: 'Days Absent', type: 'input'},
    {name: 'Description', type: 'textarea'},
    {name: 'Month of Absence', type: 'select'},
    {name: 'Year of Absence', type: 'select'},
];

export const AddAbsent = () => <AddFormInputsScaffold inpuTitle={inpuTitle} title='Absenteeism' descriptionTitle='Employee Absence'/>