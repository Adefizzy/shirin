import React from 'react';
import { FiCheck } from 'react-icons/fi';
import styled from 'styled-components';
import {CustomCheckBox} from '../atom/CustomCheckBox';


export const ModuleTypeScaffold = (props) => {
    return (
        <ModuleType active={props.active} onClick={props.onClick}>
            <ModuleImageDiv>
                <img style={{width: '70%', height: 'auto'}}  src={props.image}/>
            </ModuleImageDiv>
            <ModuleBody>
                <h3>{props.moduleName}</h3>
                <p>{props.moduleDescription}</p>
            </ModuleBody>
            <CustomCheckBox active={props.active}/>
               
        </ModuleType>
    );
};


const ModuleType = styled.div`
    width: 100%;
    border-radius: 6px;
    display: flex;
    align-items: flex-start;
    border: solid 1px ${props => props.active? '#05bf70' : '#dbdce1'};
    border-radius: 10px;
    padding: 11px;
    margin-top: 21px;
    cursor: pointer;

    &:hover{
        div:nth-child(3){
            border: 1px solid ${props => !props.active? '#d2d5e1': 'none'};
        }
    }
`


const ModuleImageDiv = styled.div`
    flex-basis: 30%;
`

const ModuleBody = styled.div`
    flex-basis: 70%;

    & h3{
        font-weight: bold;
        color: #000000;
        font-size: 1.4vw;
    }

    & p{
       color: #aeb3cd;
       font-size: 1vw;
    }
`

/* const CheckBox = styled.div`
    border-radius: 8px;
    background-color: ${props => props.active? '#05bf70': '#fff'};
    min-height: 24px;
    min-width: 24px;
    height: 2vw;
    width: 2vw;
    display: grid;
    place-items: center;
    color: #fff;
    font-weight: bolder;
    font-size: 1.2vw;
` */