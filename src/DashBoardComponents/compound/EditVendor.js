import React from 'react';
import {AddFormInputsScaffold} from '../element/addFormInputScaffold';



const inpuTitle = [
    {name: 'Vendor Name', type: 'input'},
    {name: 'Vendor Telephone', type: 'input'},
    {name: 'Country', type: 'select'},
    {name: 'Selete State', type: 'select'},
    {name: 'Email', type: 'input'},
    {name: 'T.I.N', type: 'input'},
    {name: 'Address', type: 'textarea'},

];

export const EditVendor= () => <AddFormInputsScaffold isEdit={true} inpuTitle={inpuTitle} title='Vendor'  />