import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Product Name', type: 'input'},
    {name: 'Description', type: 'textarea'},
];

export const AddProduct = () => <AddFormInputsScaffold inpuTitle={inpuTitle} title='Product'/>