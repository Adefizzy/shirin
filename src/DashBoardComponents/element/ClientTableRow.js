import  React, {useEffect, useState} from 'react';
import {TableRow} from '../atom/TableRow';
import styled from 'styled-components';
import { FiFilter, FiArrowUpRight, FiTrash2, FiEdit } from 'react-icons/fi';
import { mutedColor,  device, primaryColor} from '../../GlobalAccets';

export const ClientTableRow = (props) => {
    
    return (
        <TableRow>
            <td>{props.data.sn}</td>
            <td>{props.data.clientName}</td>
            <td>{props.data.phone}</td>
            <td>{props.data.address}</td>
            <td>{props.data.state}</td>
            <td>{props.data.country}</td>
            <td>{props.data.description}</td>
            <td>{props.data.dateAdded}</td>
            <td><p onClick={props.onEdit} style={{color: 'blue', cursor: 'pointer', margin: '0px'}}>Edit</p></td>  
        </TableRow>
    );
};
