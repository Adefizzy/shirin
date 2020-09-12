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
    margin-top: 40px;

    &:focus{
        outline: none;
    }
`

const StyledButton = styled(buttonStyle)`
    background-color: ${primaryColor};
    color: #fff;
    min-width: 100%;
`
const StyledButtonWhite = styled(buttonStyle)`
    background-color: #fff;
    color: ${primaryColor};
    min-width: 70%;
`

