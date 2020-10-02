import React from 'react';
import styled from 'styled-components';
import { FiFilter, FiArrowUpRight } from 'react-icons/fi';
import { mutedColor,  device, primaryColor} from '../../GlobalAccets';
import { Layout, Menu, Breadcrumb, Input, Avatar, Badge, Button, Tag, DatePicker, Space, Pagination } from 'antd';
import {SecondaryButton, DefaultButton, DefaultButtonWhite, GreenButton} from '../../GlobalComponents/atoms/secondaryButton';
import moment from 'moment';
import { AiOutlineSearch } from "react-icons/ai";


const dateFormat = 'MMM Do YY';

export const ActionBar = (props) => {
    return (
        <StyledActionBar>
        <StyledInput prefix={<StyledAiOutlineSearch/>} bordered={false} placeholder='Search here..'/>
        <Space align='center' size='middle'>
            <Space align='center'>
                <StyledDatePicker defaultValue={moment('2015-06-06', dateFormat)} />
                <StyledDatePicker defaultValue={moment('2015-06-06', dateFormat)} />
            </Space>
            <SecondaryButton text='Go'/>
        </Space>
        <Space align='center'>
            <DefaultButton text='Filter' icon={<FiFilter/>}/>
            <DefaultButtonWhite text='Export' icon={<FiArrowUpRight/>}/>
        </Space>
        {props.sectionName && <GreenButton onClick={props.onClick} text={props.sectionName} icon={<p style={{marginRight: '20px', marginBottom: '0px'}}>+</p>}/>}
    </StyledActionBar>
    );
};


const StyledContainter = styled.div`
    width: 100%;
`

const StyledActionBar = styled(StyledContainter)`
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

const StyledInput = styled(Input)`
    background-color: #fff;
    border-radius: 4px;
    border: solid 1px #aeb3cd;
    width: 25%;

    &:hover{
        border: solid 1px #b620e0;
        background-color: #fff;
    }

    &.ant-input-affix-wrapper > input.ant-input  {
        color:  #535875;
        font-size: 16px;
        &::placeholder{
            color:  #535875;
            opacity: 0.4;
        }
    }

    @media ${device.laptop}{
        &.ant-input-affix-wrapper > input.ant-input  {
            font-size: 1.2vw;
        }
    }
`

const StyledAiOutlineSearch = styled(AiOutlineSearch)`
    color: #535875;
    opacity: 0.4;
    font-size: 24px;
    @media ${device.laptop}{
        font-size: 1.6vw;
    }
`

const StyleDateDiv = styled.div`
    width: 30%;
`
const StyledDatePicker = styled(DatePicker)`

    &:hover{
        border: solid 1px #b620e0;
    }

    &.ant-picker-focused{
        border: solid 1px #b620e0;
        box-shadow: none;
    }
`