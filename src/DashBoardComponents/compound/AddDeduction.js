import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Employee', type: 'select'},
    {name: 'Month', type: 'select'},
    {name: 'Year', type: 'select'},
    {name: 'Description', type: 'textarea'},
    {name: 'Duration in Months', type: 'select'},
    {name: 'Interest Rate', type: 'select'},
    {name: 'Deduction Type', type: 'select'},
    {name: 'Amount Deductible per Month', type: 'input'},
];

export const AddDeduction = () => <AddFormInputsScaffold inpuTitle={inpuTitle} title='Employee Deduction'/>