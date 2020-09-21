import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {GreenButton} from '../../GlobalComponents/atoms/secondaryButton';
import styled from 'styled-components';
import { primaryColor, mutedColor, deepPrimaryColor, device} from '../../GlobalAccets';
import {AccountBar} from '../element/AccountBar';
import {ProfitAndLossBar} from './../atom/ProfitAndLossBar';
import {ActionBar} from '../element/ActionBar';
import { Bar } from './../atom/Bar';
import { SubBar } from './../atom/SubBar';


const revenue = {
    title: 'Revenue',
    details: [
        {code: '4001', name: 'Furniture and Fitting', amount: '50,000'},
        {code: '4002', name: 'Furniture and Fitting', amount: '50,000'},
        {code: '4002', name: 'Furniture and Fitting', amount: '50,000'}
    ]
}

const currentAsset = {
    title: 'Cost of Sales',
    details: [
        {code: '4001', name: 'Bank', amount: '50,000'},
        {code: '4002', name: 'Cash', amount: '50,000'},
        {code: '4002', name: 'Furniture and Fitting', amount: '50,000'}
    ]
}

export const ProfitAndLost = (props) => {

    const bars = revenue.details.map((detail, index) => {
        return <ProfitAndLossBar detail={detail} key={index}/>
    })

    const assetBar = currentAsset.details.map((detail, index) => {
        return <ProfitAndLossBar detail={detail} key={index}/>
    })

    return (
        <>
             <SectionHeader
                sectionName='Profit And Loss Report for'
                sectionMessage='As of'
                sectionDate='27 June 2020'
                companyName = 'TechAdvance'
            />
           <ActionBar/>
           <div style={{height: '30px'}}></div>
           <Bar>
            <SubBar
                flexBasis='80%'
                text='Profit &amp; Loss as at Jul 14, 2020'
            />
            <SubBar
                flexBasis='20%'
                text='Balance (NGN)'
            />
                  
        </Bar>
           <AccountBar
            title={revenue.title}
            bars={bars}
           />
           <Bar>
               <div style={{flexBasis: '40%'}}>
                   <p>Total Revenue</p>
               </div>
               <div style={{flexBasis: '60%', textAlign: 'right'}}>
                   <p>150,000</p>
               </div>
           </Bar>
           <AccountBar
            title={currentAsset.title}
            bars={assetBar}
           />
           <Bar>
               <div style={{flexBasis: '40%'}}>
                   <p>Total Cost of Sales</p>
               </div>
               <div style={{flexBasis: '60%', textAlign: 'right'}}>
                   <p>150,000</p>
               </div>
           </Bar>
           <Bar>
               <div style={{flexBasis: '40%', fontSize: '30px'}}>
                   <p>Gross Profit/Loss</p>
               </div>
               <div style={{flexBasis: '60%', textAlign: 'right', fontSize: '30px'}}>
                   <p>000.000</p>
               </div>
           </Bar>
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
