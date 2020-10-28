import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'From Account', type: 'select'},
    {name: 'To Accoun', type: 'select'},
    {name: 'Amount', type: 'input'},
    {name: 'Date', type: 'date'},
    {name: 'Description', type: 'textarea'},
];

export const AddBankTransfer = () => <AddFormInputsScaffold inpuTitle={inpuTitle} descriptionTitle ='Bank' title='Bank Accounts'/>

  


