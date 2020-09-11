import  React from 'react';
import { FiCheck } from 'react-icons/fi';
import styled from 'styled-components';

export const CustomCheckBox = (props) => {
    return (
        <CheckBox active={props.active}>
                <FiCheck/>
        </CheckBox>
    );
};



const CheckBox = styled.div`
    border-radius: 8px;
    background-color: ${props => props.active? '#05bf70': '#fff'};
    min-height: 24px;
    min-width: 24px;
    height: 1.5vw;
    width: 1.5vw;
    display: grid;
    place-items: center;
    color: #fff;
    font-weight: bolder;
    font-size: 1.2vw;
`