import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Date', type: 'date'},
    {name: 'Activity owner', type: 'select'},
    {name: 'Description', type: 'textarea'},

];

export const AddNewActivity= () => <AddFormInputsScaffold inpuTitle={inpuTitle} title='Deal'  descriptionTitle='New Activity'/>