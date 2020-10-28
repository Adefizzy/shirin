import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {EmployeeBonusTableRow} from '../element/EmployeeBonusTableRow';
import {data} from '../atom/employeeBonusData';
import { useHistory,  Route, Switch, useRouteMatch} from 'react-router-dom';
import { AddEmployeeBonus } from './AddEmployeeBonus';
import { DeleteModal } from '../element/DeleteModal';
import { Checkbox } from 'antd';
import styled from 'styled-components';
import { primaryColor, mutedColor, deepPrimaryColor, device, greenColor} from '../../GlobalAccets';
import { Input } from 'antd';


export const StatutoryDeduction = (props) => {

    const onSelectAll = (e) => {

    }

    return (
        <>
             
            <SectionHeader
                sectionName='Statutory Deduction'
                sectionMessage='As of'
                sectionDate='27 June 2020'
            />
           
            <StyledContainter>
                <StyledEditableInput>
                    <StyledChecked  onChange={onSelectAll}>Basic Allowance</StyledChecked>
                    <StyledInput placeholder="33" suffix='%' />
                </StyledEditableInput>
                <StyledEditableInput>
                    <StyledChecked  onChange={onSelectAll}>Housing Allowance</StyledChecked>
                    <StyledInput placeholder="33" suffix='%' />
                </StyledEditableInput>
                <StyledEditableInput>
                    <StyledChecked  onChange={onSelectAll}>Transport Allowance</StyledChecked>
                    <StyledInput placeholder="33" suffix='%' />
                </StyledEditableInput>
            </StyledContainter>
            <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end', marginTop: '20px'}}>
                <StyledButton>Update</StyledButton>
            </div>
            
        
        </>
    );
};



const StyledContainter = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & div{
        flex-basis: 30%;
        margin-top: 20px;
        font-size: 24px;
    }
`

const StyledChecked = styled(Checkbox)`
     font-size: 16px;
     width: 40%;
     font-weight: bolder;

     @media ${device.laptop}{
        font-size: 1.2vw;
    }
`


const StyledButton = styled.button`
    font-size: 16px;
    border: none;
    padding: 8px 60px;
    border-radius: 6px;
    letter-spacing: 0.5px;
    background-color: ${primaryColor};
    color: #fff;
    &:focus{
        outline: none;
    }

    @media ${device.laptop}{
        font-size: 1vw;

    }
`

const StyledEditableInput = styled.div`
    display: flex;
    background-color: #dee4f2;
    padding: 20px;
    justify-content: space-between;
`

const StyledInput = styled(Input)`
    width: 40%;
    font-size: 28px;
    font-weight: bold;

    & .ant-input{
        font-size: 18px !important;
         font-weight: bold !important;
    }
`
