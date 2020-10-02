import  React, {useEffect, useState} from 'react';
import {TableRow} from '../atom/TableRow';
import styled from 'styled-components';
import { FiFilter, FiArrowUpRight, FiTrash2, FiEdit } from 'react-icons/fi';
import { mutedColor,  device, primaryColor} from '../../GlobalAccets';
import {PrimaryButton} from '../../GlobalComponents/atoms/primaryButton';
import emptyTableImg from '../../images/emptyTable.png';

export const DraftPayrollTableRow = (props) => {
 
        return (
            <TableRow>
                <td>{props.data.name}</td>
                <td>{props.data.employee}</td>
                <td>{props.data.grossSalary}</td>
                <td>{props.data.overtime}</td>
                <td>{props.data.daysWorked}</td>
                <td>{props.data.deductions}</td>
                <td>{props.data.netPay}</td>
                <td>{props.data.breakdown}</td> 
            </TableRow>
        );
  
    
};




