import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Select Client', type: 'select'},
    {name: 'Select Year/Month', type: 'date'},
    {name: 'Amount (NGN)', type: 'input'},
    {name: 'Payment Method', type: 'select'},
    {name: 'Bank Accounts', type: 'select'},
    {name: 'Revenue Account', type: 'select'},
    {name: 'Description of cash sales', type: 'textarea'},
];

export const AddCash = () => <AddFormInputsScaffold inpuTitle={inpuTitle} title='Cash Sales'/>

  


