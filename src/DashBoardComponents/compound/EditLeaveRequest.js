import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Employee', type: 'select'},
    {name: 'Leave Type', type: 'select'},
    {name: 'Leave Eligibility', type: 'input'},
    {name: 'Start Date', type: 'date'},
    {name: 'End Date', type: 'date'},
    {name: 'Number of Leave Days', type: 'input'},
    {name: 'Description', type: 'textarea'},
   
];

export const EditLeaveRequest = () => <AddFormInputsScaffold inpuTitle={inpuTitle} isEdit={true} title='Leave Management' descriptionTitle='Leave Request'/>