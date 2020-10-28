import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';


const tableTitle = [
    {name: 'Gross Fee', type: 'input'},
];

export const EditGross = (props) => <AddFormInputsScaffold inpuTitle={tableTitle} title='Employee Remunerations'  descriptionTitle="Tope Odun's Gross Fee" isEdit={true}/> 



