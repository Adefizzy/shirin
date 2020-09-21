import React from 'react';
import { Bar } from './Bar';
import { SubBar } from './SubBar';

export const ChartAccountBar = (props) => {
    return (
        <Bar>
            <SubBar
                flexBasis='25%'
                text={props.code}
            />
            <SubBar
                flexBasis='25%'
                text={props.name}
            />           
        </Bar>
    );
};


