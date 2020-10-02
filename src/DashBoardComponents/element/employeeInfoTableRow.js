import  React, {useEffect, useState} from 'react';
import {TableRow} from '../atom/TableRow';
import styled from 'styled-components';
import { FiFilter, FiArrowUpRight, FiTrash2, FiEdit } from 'react-icons/fi';
import { mutedColor,  device, primaryColor} from '../../GlobalAccets';

export const EmployeeInfoTableRow = (props) => {
    
    return (
        <TableRow>
            <td>{props.data.employeeId}</td>
            <td>{props.data.fullName}</td>
            <td>{props.data.designation}</td>
            <td>{props.data.subsidiary}</td>
            <td>{props.data.joiningDate}</td>
            <td>
                <a href='#'>View</a>
            </td> 
            <td>
                <a href='#'>Invite</a>
            </td> 
        </TableRow>
    );
};


