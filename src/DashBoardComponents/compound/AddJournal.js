import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'From Accoun', type: 'select'},
    {name: 'To Account', type: 'select'},
    {name: 'Amount', type: 'input'},
    {name: 'Date', type: 'date'},
    {name: 'Description', type: 'textarea'}
];

export const AddJournal = () => <AddFormInputsScaffold inpuTitle={inpuTitle}  title='Journal Postings'/>