import React from 'react';
import styled from 'styled-components';
import { primaryColor, mutedColor, deepPrimaryColor, device} from './../../GlobalAccets';

export const  PrimaryButton = (props)=>  {
    return (
        <StyledButton onClick={props.onClick}>
           {props.text}
        </StyledButton>
    );
}

export const  PrimaryButtonWhite = (props)=>  {
    return (
        <StyledButtonWhite onClick={props.onClick}>
           {props.text}
        </StyledButtonWhite>
    );
}

const buttonStyle = styled.button`
    font-size: 1.2vw;
    border: none;
    padding: 14px 0px;
    border-radius: 6px;
   

    &:focus{
        outline: none;
    }
`

const StyledButton = styled.button`
    font-weight: bolder;
    font-size: 1.2vw;
    border: none;
    padding: 14px 0px;
    border-radius: 6px;
    background-color: ${primaryColor};
    color: #fff;
    min-width: 100%;
    &:focus{
        outline: none;
    }
`
const StyledButtonWhite = styled.button`
    background-color: #fff;
    color: ${primaryColor};
    min-width: 70%;
    margin-top: 40px;
    font-size: 1.2vw;
    border: none;
    padding: 14px 0px;
    border-radius: 6px;
   

    &:focus{
        outline: none;
    }
`

