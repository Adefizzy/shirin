import  React, {useEffect, useState} from 'react';
import {TableRow} from '../atom/TableRow';
import styled from 'styled-components';
import { FiFilter, FiArrowUpRight, FiTrash2, FiEdit } from 'react-icons/fi';
import { mutedColor,  device, primaryColor} from '../../GlobalAccets';
import { useHistory} from 'react-router-dom';

export const GeneratePayrollTableRow = (props) => {
    const history = useHistory();


    const addOfficeLocation = () => {
        history.push(`payrolldetail`)
    }

    return (
        <TableRow>
            <td>{props.data.sn}</td>
            <td>{props.data.subsidiary}</td>
            <td>{props.data.month}</td>
            <td>{props.data.year}</td>
            <td>
                <a style={{color: 'blue'}}onClick={addOfficeLocation}>Proceed</a>
            </td>  
        </TableRow>
    );
};


