import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { FiFilter, FiArrowUpRight, FiTrash2, FiEdit } from 'react-icons/fi';
import { mutedColor,  device, primaryColor} from '../../GlobalAccets';

export const TableRow = (props) => {
    const [statusColors, setStatusColors] = useState({});
    useEffect(() => {
        let color = props.data.status === 'initiated' ? '#104137' : '#251e0c';
        let backgroundColor = props.data.status === 'initiated'? 'rgba(9, 164, 132, 0.1)': 'rgba(247, 181, 0, 0.1)';
        let inidicatorColor = props.data.status === 'initiated'? '#09a484': '#f7b500';

        setStatusColors({
            color,
            backgroundColor,
            inidicatorColor
        })

    }, [])
    return (
        <StyledTableRow>
        <td>{props.data.dealTitle}</td>
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
        </td>
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

const StyledStatus = styled.div`
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
    padding: 3px 5px;
    background-color:${props => props.backgroundColor};
    color: ${props => props.color};
    text-transform: capitalize;
    width: 79px;

    & div{
        border-radius: 4px;
        background-color: ${props => props.inidicatorColor }; 
        width: 12px; 
        height: 12px;
    }


    @media ${device.laptop}{
        width: 5vw;
        font-size: 0.9vw;
    
        & div{
            width: 0.7vw;
            height: 0.7vw;
        }
    }
`