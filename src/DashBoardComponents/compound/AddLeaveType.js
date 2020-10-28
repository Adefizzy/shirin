import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Leave Title', type: 'input'},
    {name: 'No. of Leave Days', type: 'select'},
    {name: 'Grade Level', type: 'select'},
];

export const AddLeaveType = () => <AddFormInputsScaffold inpuTitle={inpuTitle} title='Leave Type'/>