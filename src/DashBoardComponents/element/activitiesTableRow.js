import  React, {useEffect, useState} from 'react';
import {TableRow} from '../atom/TableRow';
import styled from 'styled-components';
import { FiFilter, FiArrowUpRight, FiTrash2, FiEdit } from 'react-icons/fi';
import { mutedColor,  device, primaryColor} from '../../GlobalAccets';

export const ActivitiesTableRow = (props) => {
    
    return (
        <TableRow>
            <td>{props.data.date}</td>
            <td>{props.data.description}</td>
            <td>{props.data.activityOwner}</td>   
        </TableRow>
    );
};
