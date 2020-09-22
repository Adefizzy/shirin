import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {GreenButton} from '../../GlobalComponents/atoms/secondaryButton';
import styled from 'styled-components';
import { primaryColor, mutedColor, deepPrimaryColor, device} from '../../GlobalAccets';
import {AccountBar} from '../element/AccountBar';
import {ChartAccountBar} from './../atom/ChartAccountBar';


const revenue = {
    title: 'Revenue',
    details: [
        {code: '1001', name: 'Income'},
        {code: '1002', name: 'Sales'}
    ]
}

export const ChartAccount = (props) => {

    const bars = revenue.details.map((detail, index) => {
        return <ChartAccountBar code={detail.code} name={detail.name} key={index}/>
    })

    return (
        <>
             <SectionHeader
                sectionName='Chart of Account'
                sectionMessage='As of'
                sectionDate='27 June 2020'
            />
           <StyledButtonDiv>
           <GreenButton  text='Add Account' icon={<p style={{marginRight: '20px', marginBottom: '0px'}}>+</p>}/>
           </StyledButtonDiv>
           <StyledTitleDiv>
               <p>Chart of Account as at Jun 27, 2020</p>
           </StyledTitleDiv>
           <AccountBar
            title={revenue.title}
            bars={bars}
           />
        </>
    );
};

const StyledButtonDiv = styled.div`
   display: flex;
   justify-content: flex-end; 
   min-width: 100%;
   margin-bottom: 10px;
   `

const StyledTitleDiv = styled.div`
    min-width: 100%;
    color: #6F738B;
    background-color: #fff;
    padding: 20px 15px;
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 10px;
    & p{
        margin-bottom: 0px;
    }

    @media ${device.laptop}{
        font-size: 1.1vw;
    }
`