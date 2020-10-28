import  React, {useEffect, useState} from 'react';
import {TableRow} from '../atom/TableRow';
import styled from 'styled-components';
import { FiFilter, FiArrowUpRight, FiTrash2, FiEdit } from 'react-icons/fi';
import { mutedColor,  device, primaryColor} from '../../GlobalAccets';

export const EmployeeRemunerationTableRow = (props) => {
    
    return (
        <TableRow>
            <td>{props.data.employee}</td>
            <td>{props.data.subsidiary}</td>
            <td>{props.data.grossSalary}</td>
            <td>
                <a href='#'>BreakDown</a>
            </td>  
            <td>
                <div onClick={props.onEdit} style={{border: 'solid 0.6px #d5d5d5',minWidth: '84px', maxWidth: '84px',  borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                    <div style={{ flexBasis: '100%', textAlign: "center", paddingTop: '4px',paddingBottom: '4px'}}>
                        <FiEdit/>
                    </div>
                </div>
            </td>
        </TableRow>
    );
};


