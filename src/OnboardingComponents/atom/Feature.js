import * as React from 'react';
import styled from 'styled-components';
import {CustomCheckBox} from './CustomCheckBox';
import { primaryColor, mutedColor, deepPrimaryColor, device} from './../../GlobalAccets';


export const FeatureScaffold = (props) => {
    return (
        <Feature>
            <CustomCheckBox/>
            <p>Employee Leave</p>
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
    & div{
            border: 1px solid #d2d5e1;
    }

    & p{
        color: ${mutedColor};
        font-size: 1.2vw;
        margin-bottom: 0px;
        margin-left: 12px;
    }

`