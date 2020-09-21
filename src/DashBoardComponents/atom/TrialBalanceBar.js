import React from 'react';
import { Bar } from './Bar';
import { SubBar } from './SubBar';

export const TrialBalanceBar = (props) => {
    return (
        <Bar>
            <SubBar
                flexBasis='10%'
                text={props.detail.code}
            />
            <SubBar
                flexBasis='40%'
                text={props.detail.name}
            />
            <SubBar
                flexBasis='25%'
                text={props.detail.dr}
            /> 
             <SubBar
                flexBasis='25%'
                text={props.detail.cr}
            />           
        </Bar>
    );
};
