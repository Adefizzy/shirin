import  React, {useEffect, useState} from 'react';
import {TableRow} from '../atom/TableRow';
import styled from 'styled-components';
import { FiFilter, FiArrowUpRight, FiTrash2, FiEdit } from 'react-icons/fi';
import { mutedColor,  device, primaryColor} from '../../GlobalAccets';

export const CashSalesTableRow = (props) => {
    
    return (
        <TableRow>
            <td>{props.data.sn}</td>
            <td>{props.data.date}</td>
            <td>{props.data.amount}</td>
            <td>{props.data.client}</td>
            <td>{props.data.amountCategory}</td>
            <td>{props.data.paymentMethod}</td>
            <td>{props.data.reference}</td>
            <td><a href='#'>Edit</a></td>  
        </TableRow>
    );
};
