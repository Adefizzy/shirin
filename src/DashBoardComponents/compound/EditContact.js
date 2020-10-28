import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Name', type: 'input'},
    {name: 'Email', type: 'input'},
    {name: 'Phone', type: 'input'},

];

export const EditContact = () => <AddFormInputsScaffold inpuTitle={inpuTitle} title='Contact' isEdit={true}/>