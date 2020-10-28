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
import { FiX } from 'react-icons/fi';


export const PayrollBreakDown = (props) => {
    const [properties, setProperties] = useState([]);
    const [inputValue, setValue] = useState('');
    const onSelectAll = (e) => {

    }

    const onDelete = (id) => {
        let newProps = [...properties].filter(item => item.id !== id);

        setProperties(newProps);
    }

    const addProperties = () => {
        let newProp = [...properties, {name: inputValue, id: properties.length}];
    
        setProperties(newProp);
    }

    const onChange = (e) => {
        setValue(e.target.value);
    }


    const list = properties.map((item, index) => {
        return  <StyledEditableInput key={index} style={{backgroundColor: 'transparent'}}>
                    <div style={{marginTop: '0px', display: 'flex', alignItems: 'flex-start', height: '100%'}}>
                        <FiX onClick={() => onDelete(item.id)} style={{color: 'red', marginTop: '5px'}}/>
                        <p style={{margin: '0px', margin:'0px' }}>{item.name}</p>
                    </div>
                    <StyledInput placeholder="33" suffix='%' />
                </StyledEditableInput>
    });
    return (
        <>
             
            <SectionHeader
                sectionName='Payroll BreakDown'
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
                {list}
            </StyledContainter>
            <div style={{width: '100%', marginTop: '20px'}}>
                <p style={{margin: '0px', color: mutedColor}}>Parameter</p>
                <StyledInput onChange={onChange} size='large'/>
                <StyledButton onClick={addProperties}>Add Parameter</StyledButton>
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
    display: block;
    margin-top: 10px;
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
