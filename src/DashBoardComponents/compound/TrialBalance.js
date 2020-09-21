import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {GreenButton} from '../../GlobalComponents/atoms/secondaryButton';
import styled from 'styled-components';
import { primaryColor, mutedColor, deepPrimaryColor, device} from '../../GlobalAccets';
import {AccountBar} from '../element/AccountBar';
import {TrialBalanceBar} from './../atom/TrialBalanceBar';
import {ActionBar} from '../element/ActionBar';
import { Bar } from './../atom/Bar';
import { SubBar } from './../atom/SubBar';


const revenue = {
    title: 'Fixed / No Current Asset',
    details: [
        {code: '4001', name: 'Furniture and Fitting', dr: '50,000'},
        {code: '4002', name: 'Furniture and Fitting', cr: '50,000'},
        {code: '4002', name: 'Furniture and Fitting', cr: '50,000'}
    ]
}

const currentAsset = {
    title: 'Current Asset',
    details: [
        {code: '4001', name: 'Bank', dr: '50,000'},
        {code: '4002', name: 'Cash', cr: '50,000'},
        {code: '4002', name: 'Furniture and Fitting', cr: '50,000'}
    ]
}

export const TrialBalance = (props) => {

    const bars = revenue.details.map((detail, index) => {
        return <TrialBalanceBar detail={detail} key={index}/>
    })

    const assetBar = currentAsset.details.map((detail, index) => {
        return <TrialBalanceBar detail={detail} key={index}/>
    })

    return (
        <>
             <SectionHeader
                sectionName='Trial Balance Report for'
                sectionMessage='As of'
                sectionDate='27 June 2020'
                companyName = 'TechAdvance'
            />
           <ActionBar/>
           <StyledTitleDiv>
               <p>Trial balance  as at Jun 27, 2020</p>
           </StyledTitleDiv>
           <Bar>
            <SubBar
                flexBasis='50%'
                text='Chart of Accounts'
            />
            <SubBar
                flexBasis='25%'
                text='Dr'
            />
            <SubBar
                flexBasis='25%'
                text='Cr'
            />           
        </Bar>
           <AccountBar
            title={revenue.title}
            bars={bars}
           />
           <AccountBar
            title={currentAsset.title}
            bars={assetBar}
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
    margin-top: 30px;
    & p{
        margin-bottom: 0px;
    }

    @media ${device.laptop}{
        font-size: 1.1vw;
    }
`