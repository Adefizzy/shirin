import  React, {useEffect, useState} from 'react';
import {TableRow} from '../atom/TableRow';
import styled from 'styled-components';
import { FiFilter, FiArrowUpRight, FiTrash2, FiEdit } from 'react-icons/fi';
import { mutedColor,  device, primaryColor} from '../../GlobalAccets';

export const ActivityOwnerTableRow = (props) => {
    
    return (
        <TableRow>
            <td>{props.data.name}</td>
            <td>{props.data.emailAddress}</td>
            <td>{props.data.phoneNumber}</td>
            <td>
                <div style={{display:'flex'}}>
                    <div style={{marginRight: '10px'}}>
                        <p style={{marginBottom: '0px'}}>Admin</p>
                    </div>
                    |
                    <div style={{marginLeft: '10px'}}>
                        <p style={{marginBottom: '0px'}}>User</p>
                    </div>
                </div>

            </td>
            <td>
                <div style={{border: 'solid 0.6px #d5d5d5',minWidth: '84px', maxWidth: '84px',  borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                    <div style={{ flexBasis: '50%', textAlign: "center", paddingTop: '4px',paddingBottom: '4px'}}>
                        <FiEdit/>
                    </div>
                    <div style={{color: '#ef3826', borderLeft: 'solid 0.6px #d5d5d5', flexBasis: '50%', textAlign: "center", paddingTop: '4px',paddingBottom: '4px'}}>
                        <FiTrash2/>
                    </div>
                </div>
            </td>  
        </TableRow>
    );
};