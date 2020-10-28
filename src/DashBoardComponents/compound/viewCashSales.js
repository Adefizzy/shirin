import React from 'react';
import { Input} from 'antd';
import {SectionHeader} from '../element/SectionHeader';
import styled from 'styled-components';
import { BackButton } from '../../GlobalComponents/atoms/backButton';


const dataList = [
   {title: 'Customer', value: 'James'},
   {title: 'Date', value: 'Jan 14, 2018'},
   {title: 'Amount', value: '300000.00'},
   {title: 'Payment Method', value: 'Bank'},
   {title: 'Reference', value: '158811840059013711'},
   {title: 'Description', value: 'being sale of earpiece'}
];

export const ViewCashSales = (props) => {

    const data = dataList.map((item, index) => {
        return <LocationData key={index} title={item.title} value={item.value}/>
    })

    return (
        <>
            <BackButton
                others={`to Cash Sales`}
            />
            <SectionHeader
                sectionName='Cash Sales'
            />
            <StyledContainer>
                <StyledHeader>
                <h5>Cash Sales</h5>
                <p>Here’s a detailed overview of your location</p>
                </StyledHeader>
                <hr/>
                <StyledBody>
                   {data}
                </StyledBody>
            </StyledContainer>
          
        </>
    );
};


const LocationData = (props) => {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.value}</p>
        </div>
    );
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

const StyledBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 24px;
    padding-top: 0px;

    & div{
        flex-basis: 50%;
        margin-bottom: 24px;

        & p{
            font-size: 16px;
            line-height: 1.5;
            color: #000000;
            margin-bottom: 0px;


            &:first-child{
                color: rgba(0, 0, 0, 0.5);
            }
        }
    }
`
