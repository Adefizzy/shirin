import React from 'react';
import styled from 'styled-components';
import {CustomCheckBox} from '../atom/CustomCheckBox';
import { primaryColor, mutedColor, deepPrimaryColor, device} from './../../GlobalAccets';
import {FeatureScaffold} from './../atom/Feature';

export const Features = (props) => {
    return (
        <BasicFeatures>
            <BasicFeaturesHeader>
                <h1>{props.featureType}</h1>
                <p>{props.actionText}</p>
            </BasicFeaturesHeader>
            <BasicFeaturesFooter>
               <FeatureScaffold/>
               <FeatureScaffold/>
               <FeatureScaffold/>
               <FeatureScaffold/>
               <FeatureScaffold/>
               <FeatureScaffold/>
            </BasicFeaturesFooter>
        </BasicFeatures>
    );
};


const BasicFeatures = styled.div`
    min-width: 100%;
    margin-top: 20px;
`
const BasicFeaturesHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    & h1{
        font-size: 1.5vw;
        font-weight: 600;
        color:#000000;
    }

    & p{
        color: ${mutedColor};
        cursor: pointer;
    }
`

const BasicFeaturesFooter = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Feature = styled.div`
    width: 48%;
    border: solid 1px #aeb3cd;
    border-radius: 8px;
    padding: 7px 10px;
    margin-top: 21px;
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