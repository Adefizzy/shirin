import  React, {useEffect, useState} from 'react';
import {TableRow} from '../atom/TableRow';
import styled from 'styled-components';
import { FiFilter, FiArrowUpRight, FiTrash2, FiEdit } from 'react-icons/fi';
import { mutedColor,  device, primaryColor} from '../../GlobalAccets';

export const LocationTableRow = (props) => {
    
    return (
        <TableRow>
            <td>{props.data.sn}</td>
            <td>{props.data.location}</td>
            <td>{props.data.subsidiary}</td>
            <td>{props.data.parentCompany}</td>
            <td><a onClick={props.viewLocation} style={{color: 'blue'}}>view</a></td>
            <td>
                <div style={{border: 'solid 0.6px #d5d5d5',minWidth: '84px', maxWidth: '84px',  borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                    <div onClick={props.onEdit} style={{ flexBasis: '50%', textAlign: "center", paddingTop: '4px',paddingBottom: '4px'}}>
                        <FiEdit/>
                    </div>
                    <div onClick={props.handleDelete} style={{color: '#ef3826', borderLeft: 'solid 0.6px #d5d5d5', flexBasis: '50%', textAlign: "center", paddingTop: '4px',paddingBottom: '4px'}}>
                        <FiTrash2/>
                    </div>
                </div>
            </td>  
        </TableRow>
    );
};


