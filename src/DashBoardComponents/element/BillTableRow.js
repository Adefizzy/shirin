import  React from 'react';
import {TableRow} from '../atom/TableRow';


export const BillTableRow = (props) => {
    
    return (
        <TableRow>
            <td>{props.data.sn}</td>
            <td>{props.data.vendor}</td>
            <td>{props.data.issued}</td>
            <td>{props.data.amount}</td>
            <td>{props.data.due}</td>
            <td>{props.data.balance}</td>
            <td>{props.data.status}</td>
            <td>{props.data.action}</td>  
        </TableRow>
    );
};