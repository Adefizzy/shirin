import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Bank Name', type: 'select'},
    {name: 'Account Code', type: 'input'},
    {name: 'Account Number', type: 'input'},
    {name: 'Opening Balance', type: 'input'},
];

export const AddBank = () => <AddFormInputsScaffold inpuTitle={inpuTitle} descriptionTitle ='Bank' title='Bank Accounts'/>

  


