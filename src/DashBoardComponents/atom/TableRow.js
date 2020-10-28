import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { FiFilter, FiArrowUpRight, FiTrash2, FiEdit } from 'react-icons/fi';
import { mutedColor,  device, primaryColor} from '../../GlobalAccets';

export const TableRow = (props) => {
   
    return (
        <StyledTableRow>
            {props.children}
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

