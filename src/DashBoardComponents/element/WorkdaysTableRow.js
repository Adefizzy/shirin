import  React, {useEffect, useState} from 'react';
import {TableRow} from '../atom/TableRow';
import styled from 'styled-components';
import { FiFilter, FiArrowUpRight, FiTrash2, FiEdit } from 'react-icons/fi';
import { mutedColor,  device, primaryColor} from '../../GlobalAccets';

export const WorkDaysTableRow = (props) => {
    
    return (
        <TableRow>
            <td>{props.data.month}</td>
            <td>{props.data.year}</td>
            <td>{props.data.workdays}</td>
            <td>
                <div style={{border: 'solid 0.6px #d5d5d5',minWidth: '84px', maxWidth: '84px',  borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                    {/* <div style={{ flexBasis: '50%', textAlign: "center", paddingTop: '4px',paddingBottom: '4px'}}>
                        <FiEdit/>
                    </div> */}
                    <div onClick={props.handleDelete} style={{color: '#ef3826', borderLeft: 'solid 0.6px #d5d5d5', flexBasis: '100%', textAlign: "center", paddingTop: '4px',paddingBottom: '4px'}}>
                        <FiTrash2/>
                    </div>
                </div>
            </td>  
        </TableRow>
    );
};