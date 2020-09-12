import React from 'react';
import styled from 'styled-components';
import {CustomCheckBox} from './CustomCheckBox';
import { primaryColor, mutedColor, deepPrimaryColor, device} from './../../GlobalAccets';


export const FeatureScaffold = (props) => {
    return (
        <Feature active={props.active} onClick={props.onClick}>
            <CustomCheckBox active={props.active}/>
            <p>{props.featureName}</p>
        </Feature>
    );
};

const Feature = styled.div`
    width: 48%;
    border: solid 1px #aeb3cd;
    border-radius: 8px;
    padding: 7px 10px;
    display: flex;
    align-items: center;
    margin-top: 21px;
    & p{
        color: ${mutedColor};
        font-size: 1.2vw;
        margin-bottom: 0px;
        margin-left: 12px;
    }

    &:hover{
        cursor: pointer;
        div{
            border:  1px solid ${props => !props.active? '#d2d5e1': 'none'};
        }
    }
`