import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Select Client', type: 'select'},
    {name: 'Select Date', type: 'date'},
    {name: 'Amount (NGN)', type: 'input'},
    {name: 'Payment Method', type: 'select'},
    {name: 'Bank Accounts', type: 'select'},
    {name: 'Revenue Accounts', type: 'select'},
    {name: 'Description of cash sales', type: 'input'}
];

export const AddCashSales = () => <AddFormInputsScaffold inpuTitle={inpuTitle} title='Cash Sales'/>