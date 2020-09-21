import React from 'react';
import { Bar } from './Bar';
import { SubBar } from './SubBar';

export const ProfitAndLossBar = (props) => {
    return (
        <Bar>
            <SubBar
                flexBasis='40%'
                text={props.detail.code}
            />
            <SubBar
                flexBasis='30%'
                text={props.detail.name}
            />
            <SubBar
                flexBasis='30%'
                text={props.detail.amount}
            /> 
                     
        </Bar>
    );
};
