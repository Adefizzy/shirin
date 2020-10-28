import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Select Client', type: 'select'},
    {name: 'Invoice Date', type: 'date'},
    {name: 'Due Date', type: 'date'},
    {name: 'Invoice Number', type: 'input'},
    {name: 'Order Number', type: 'input'},
    {name: 'Invoice Type', type: 'select'},
    {name: 'Notes', type: 'select'}
];

export const AddCreditSales = () => <AddFormInputsScaffold inpuTitle={inpuTitle} title='Credit Sales'/>