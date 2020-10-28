import  React from 'react';
import {TableRow} from '../atom/TableRow';


export const VendorTableRow = (props) => {
 
        return (
            <TableRow>
                <td>{props.data.sn}</td>
                <td>{props.data.name}</td>
                <td>{props.data.email}</td>
                <td>{props.data.phone}</td>
                <td>{props.data.tin}</td>
                <td>{props.data.address}</td>
                <td>{props.data.state}</td>
                <td>{props.data.country}</td>
                <td><p onClick={props.onEdit} style={{margin: '0px' ,cursor: 'pointer', color: 'blue'}}>edit</p></td>
            </TableRow>
        );
  
    
};




