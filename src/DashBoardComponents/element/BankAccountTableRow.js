import  React, {useEffect, useState} from 'react';
import {TableRow} from '../atom/TableRow';
import styled from 'styled-components';
import { FiFilter, FiArrowUpRight, FiTrash2, FiEdit } from 'react-icons/fi';
import { mutedColor,  device, primaryColor} from '../../GlobalAccets';

export const BankAccountTableRow = (props) => {
    
    return (
        <TableRow>
            <td>{props.data.sn}</td>
            <td>{props.data.bankName}</td>
            <td>{props.data.accountNumber}</td>
            <td>{props.data.accountCode}</td>
            <td>{props.data.currentBalnce}</td>
            <td>{props.data.dateAdded}</td>
            <td><a onClick={props.onEdit} style={{color: 'blue'}}>Edit</a></td>  
        </TableRow>
    );
};


