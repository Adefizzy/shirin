import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Select Vendor', type: 'select'},
    {name: 'Invoice Date', type: 'date'},
    {name: 'Due Date', type: 'date'},
    {name: 'Invoice Number', type: 'input'},
    {name: 'Order Number', type: 'input'},
    {name: 'Notes', type: 'textarea'},
    {name: 'Make as Recurring payment?', type: 'select'},
    {name: 'Choose Recurring Interval?', type: 'select'},
    {name: 'Insert recurring delivery email address', type: 'select'}
];

export const AddBill = () => <AddFormInputsScaffold inpuTitle={inpuTitle} descriptionTitle='New Bill' title='Bill'/>

  


