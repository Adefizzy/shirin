import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { FiFilter, FiArrowUpRight, FiTrash2, FiEdit } from 'react-icons/fi';
import { mutedColor,  device, primaryColor} from '../../GlobalAccets';

export const TableRow = (props) => {
   
    return (
        <StyledTableRow>
            {props.children}
        {/* <td>{props.data.dealTitle}</td>
        <td>{props.data.clientName}</td>
        <td>{props.data.product}</td>
        <td>
            <StyledStatus inidicatorColor={statusColors.inidicatorColor} backgroundColor={statusColors.backgroundColor} color={statusColors.color}>
                <div>
                </div>
                 {props.data.status}
            </StyledStatus>
        </td>
        <td>
            <div style={{display: 'flex'}}>
                <a style={{color: '#0091ff', marginRight: '5px'}}>View</a>
                |
                <div style={{backgroundColor: '#e8fcf4',marginLeft: '5px', color: '#05bf70', paddingLeft: '2px',  paddingRight: '3px'}}>
                    + Add
                </div>
            </div>
        </td>
        <td>{props.data.estAmount}</td>
        <td>
            <div style={{display: 'flex'}}>
                <a style={{color: '#0091ff', marginRight: '5px'}}>View</a>
                |
                <div style={{backgroundColor: '#e8fcf4',marginLeft: '5px', color: '#05bf70', paddingLeft: '2px',  paddingRight: '3px'}}>
                    + Add
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
        </td> */}
    </StyledTableRow>
    );
};


const StyledTableRow = styled.tr`
    background-color: #fff;
    padding: 22px;
    border-radius: 6px;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.02);
    margin-top: 12px;
    &:hover{
        td{

            &:first-child{
               border-left: 1px solid ${primaryColor};
            }

            &:last-child{
                border-right: 1px solid ${primaryColor};
            }
            border-top: 1px solid ${primaryColor};
            border-bottom: 1px solid ${primaryColor};
        
        }
    }

    & td{
        font-size: 14px;
        padding: 11px 0px;
        text-align: left;
        &:first-child{
            padding-left: 21px;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child{
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }

    @media ${device.laptop}{
        & td{
            font-size: 0.9vw;
        }
    }
`

