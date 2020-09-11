import React from 'react';
import styled from 'styled-components';
import { primaryColor, mutedColor, deepPrimaryColor, device} from './../../GlobalAccets';

export const ProgressStageScaffold = (props) => {
    return (
        <ProgressStage active={props.active}>
            <ProgressNumber active={props.active}>
                <p>{props.number}</p>
            </ProgressNumber>
            <ProgressStageName>{props.name}</ProgressStageName>
        </ProgressStage>
    );
}



const ProgressStage = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 color: ${props => props.active? '#fff': '#aeb3cd'};
 font-weight: ${props => props.active? '600':'500'};
`


const ProgressNumber = styled.div`
    border-radius: 50%;
    border: 1px solid ${props => props.active? '#fff': '#aeb3cd'};
    height: 1.9vw;
    width: 1.9vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.active? '#fff': 'transparent'};

    & p{
        font-size: 1.2vw;
        font-weight: 500;
        color:  ${props => props.active? primaryColor: '#fff'};
        margin-bottom: 0px;
        font-weight:  ${props => props.active? 'bolder': 'normal'};
    }
`

const ProgressStageName = styled.p`
    margin-left: 8px;
    font-size: 1.2vw;
    letter-spacing: 0.5px;
    margin-bottom: 0px;
`