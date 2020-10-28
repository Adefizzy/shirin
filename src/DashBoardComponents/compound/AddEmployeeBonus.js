import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Employee', type: 'select'},
    {name: 'Amount', type: 'input'},
    {name: 'Month', type: 'select'},
    {name: 'Year', type: 'select'},
    {name: 'Add to Payroll', type: 'select'},
    {name: 'Description', type: 'textarea'},
];

export const AddEmployeeBonus = () => <AddFormInputsScaffold inpuTitle={inpuTitle} title='Employee Bonus' descriptionTitle='Employee Bonus'/>