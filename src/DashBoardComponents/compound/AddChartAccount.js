import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Account Code', type: 'input'},
    {name: 'Account Name', type: 'input'},
    {name: 'Account Type', type: 'select'},
];

export const AddChartAccount = () => <AddFormInputsScaffold inpuTitle={inpuTitle} descriptionTitle='New Account'  title='Charts of Accounts'/>