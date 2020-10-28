import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';


const tableTitle = [
    {name: 'Your Full Name', type: 'input'},
    {name: 'Internal Code', type: 'input'},
    {name: 'Description', type: 'input'},
];

export const EditGrade = (props) => <AddFormInputsScaffold inpuTitle={tableTitle} title='Employee Grade'  descriptionTitle='Grade' isEdit={true}/> 



