import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Bank Name', type: 'select'},
    {name: 'Account Code', type: 'input'},
    {name: 'Account Number', type: 'input'},
    {name: 'Opening Balance', type: 'input'},
];

export const EditBank = () => <AddFormInputsScaffold inpuTitle={inpuTitle} isEdit={true} descriptionTitle ='Bank' title='Bank Accounts'/>

  


