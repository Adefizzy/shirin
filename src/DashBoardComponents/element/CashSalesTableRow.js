import  React from 'react';
import {TableRow} from '../atom/TableRow';

export const CashSalesTableRow = (props) => {
    
    return (
        <TableRow>
            <td>{props.data.sn}</td>
            <td>{props.data.date}</td>
            <td>{props.data.amount}</td>
            <td>{props.data.client}</td>
            <td>{props.data.amountCategory}</td>
            <td>{props.data.paymentMethod}</td>
            <td>{props.data.reference}</td>
            <td><p onClick={props.onEdit} style={{color: 'blue', margin: '0px', cursor: 'pointer'}}>View</p></td>  
        </TableRow>
    );
};
