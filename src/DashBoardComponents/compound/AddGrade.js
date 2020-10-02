import React, {useEffect, useState, useRef} from 'react';
import { Layout, Menu, Breadcrumb, Input, Avatar, Badge, Button, Tag, DatePicker, Space, Pagination } from 'antd';
import { mutedColor,  device, primaryColor} from '../../GlobalAccets';
import {SectionHeader} from '../element/SectionHeader';
import styled from 'styled-components';
import { AiOutlineSearch } from "react-icons/ai";
import moment from 'moment';
import {SecondaryButton, DefaultButton, DefaultButtonWhite, GreenButton} from '../../GlobalComponents/atoms/secondaryButton';
import { FiFilter, FiArrowUpRight, FiTrash2, FiEdit } from 'react-icons/fi';
import {TableRow} from '../atom/TableRow';
import {Table } from '../element/Table';
import {data} from '../atom/dealData';
import { ActionBar } from '../element/ActionBar';
import {DealTableRow} from '../element/DealTableRow';
import { BackButton } from '../../GlobalComponents/atoms/backButton';
import { Select, Checkbox,} from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const tableTitle = ['Deal Title', 'Client Name', 'Product', 'Deal Status', 'Contact/Leads', 'Es. Amount', 'Activity', 'Action'];

export const AddGrade = (props) => {
    return (
        <>
            <BackButton
                others='to Employee Grade'
            />
            <StyledContainer>
                <StyledHeader>
                <h5>Add New Grade</h5>
                <p>Create the range of amounts that an employee is paid<br/> at a particular level in an organization or job</p>
                </StyledHeader>
                <hr/>
                <div style={{marginLeft: '26px', marginBottom: '20px'}}>
                <StyledInputWithLabel>
                    <p>Your Full Name</p>
                    <StyledInput />
                </StyledInputWithLabel>
                <StyledInputWithLabel>
                    <p>Internal Code</p>
                    <StyledInput />
                </StyledInputWithLabel>
                <StyledInputWithLabel>
                    <p>Description</p>
                    <StyledInput />
                </StyledInputWithLabel>
                </div>
                <StyledSaveButton>Save</StyledSaveButton>
                <StyledCancelButton>Cancel</StyledCancelButton>
            </StyledContainer>
          
        </>
    );
};


const SelectWithLabel = (props) => {
    return (
        <StyledInputWithLabel>
            <p>{props.label}</p>
            <StyledSelect size='large' defaultValue="lucy" style={{ width: 120 }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
            </StyledSelect>
        </StyledInputWithLabel>
    )
}


const StyledContainer = styled.div`
    border-radius: 6px;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.02);
    background-color: #ffffff;
    max-width: 50%;
    margin-top: 100px;
    padding-bottom: 30px;

    & h5{
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 0.6px;
        color: #000000;
    }

    & p{
        font-size: 12px;
        letter-spacing: 0.3px;
        color: rgba(0, 0, 0, 0.5);
    }
`

const StyledHeader = styled.div`
      padding: 15px 26px;
`
const StyledInputWithLabel = styled.div`
    width: 50%; 
    margin-top: 10px;
    & p{
        opacity: 0.9;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.5);
        margin-bottom: 10px;
    }   

    @media ${device.laptop}{
        & p{
            font-size: 0.9vw;
        }
    }
`

const StyledSelect = styled(Select)`
    width: 100% !important;

    &  .ant-select-selector{
        border-radius: 6px !important;
    }

`
const StyledDatePicker = styled(DatePicker)`
    width: 100% !important;

    & .ant-picker{
        border-radius: 6px !important;
    }

    
`

const StyledInput = styled(Input)`
    padding: 5px 19px;
    border-radius: 6px;
    font-size: 1.2vw;
    border: solid 1px #aeb3cd;
/* 
    &:focus, &:hover{
        border: solid 1px ${primaryColor};
        outline: none;
        box-shadow: none;
    } */
`

const StyledTextArea = styled(TextArea)`
    padding: 10.5px 19px;
    border-radius: 6px;
    font-size: 1.2vw;
    border: solid 1px #aeb3cd;
    resize: none;
    margin-bottom: 30px;

   /*  &:focus, &:hover{
        border: solid 1px ${primaryColor};
        outline: none;
        box-shadow: none;
    } */
`

const StyledSaveButton = styled.button`
    font-size: 14px;
    border: none;
    padding: 6px 30px;
    border-radius: 6px;
    letter-spacing: 0.5px;
    background-color: ${primaryColor};
   /*  border: solid 1px #e02020; */
   margin-left: 26px;
    color: #fff;

    &:focus{
        outline: none;
    }

    @media ${device.laptop}{
        font-size: 1vw;

    }
`

const StyledCancelButton = styled.button`
    font-size: 14px;
    border: none;
    padding: 6px 20px;
    border-radius: 6px;
    letter-spacing: 0.5px;
    background-color: #fff;
    border: solid 1px #e02020;
    color: #e02020;
    margin-left: 20px;

    &:focus{
        outline: none;
    }

    @media ${device.laptop}{
        font-size: 1vw;

    }
`


