import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Name', type: 'input'},
    {name: 'Email', type: 'input'},
    {name: 'Phone Number', type: 'input'},

];

export const AddNewLead= () => <AddFormInputsScaffold inpuTitle={inpuTitle} title='Deal'  descriptionTitle='New Lead'/>