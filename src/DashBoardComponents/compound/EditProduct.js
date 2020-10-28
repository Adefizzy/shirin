import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Product Name', type: 'input'},
    {name: 'Description', type: 'textarea'},
];

export const EditProduct = () => <AddFormInputsScaffold inpuTitle={inpuTitle} title='Product' isEdit={true}/>