import  React, {useEffect, useState} from 'react';
import {TableRow} from '../atom/TableRow';
import styled from 'styled-components';
import { FiFilter, FiArrowUpRight, FiTrash2, FiEdit } from 'react-icons/fi';
import { mutedColor,  device, primaryColor} from '../../GlobalAccets';
import {PrimaryButton} from '../../GlobalComponents/atoms/primaryButton';

export const PayrollDetailTableRow = (props) => {
    
    return (
        <TableRow>
            <td>{props.data.employee}</td>
            <td>{props.data.grossSalary}</td>
            <td>{props.data.overtime}</td>
            <td>{props.data.daysWorked}</td>
            <td>{props.data.deductions}</td>
            <td>{props.data.netPay}</td>
            <td>
                <StyledButton>View here</StyledButton>
            </td> 
        </TableRow>
    );
};


const StyledButton = styled.button`
    font-weight: bolder;
    font-size: 12px;
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
    background-color: ${primaryColor};
    color: #fff;
    &:focus{
        outline: none;
    }

    @media ${device.laptop}{
        font-size: 0.8vw;

    }
`