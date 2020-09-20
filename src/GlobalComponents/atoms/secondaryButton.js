import React from 'react';
import styled from 'styled-components';
import { mutedColor,  device} from '../../GlobalAccets';

export const  SecondaryButton = (props)=>  {
    return (
        <StyledButton onClick={props.onClick}>
            {props.text}
        </StyledButton>
    );
}

export const DefaultButton = (props) => {
    return (
        <StyledDefaultButton onClick={props.onClick}>
            {props.icon} {props.text}
        </StyledDefaultButton>
    )
}

export const DefaultButtonWhite = (props) => {
    return (
        <StyledDefaultButtonWhite onClick={props.onClick}>
            {props.icon} {props.text}
        </StyledDefaultButtonWhite>
    )
}

export const GreenButton = (props) => {
    return (
        <StyledGreenButton onClick={props.onClick}>
            {props.icon}   {props.text}
        </StyledGreenButton>
    )
}


export const StyledGreenButton = styled.button`
    display: flex;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    min-width: 127px;
    background-color: #05bf70;
    padding: 5px 10px; 
    color: #fff;
    font-weight: bold;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.04);

    & p{
        margin-right: 20px;
        margin-bottom: 0px;
    }
    &:focus{
        outline: none;
    }

    @media ${device.laptop}{
        font-size: 1.2vw;
    }

    &:hover{
        box-shadow: none;
    }
`
export const StyledDefaultButtonWhite = styled.button`
    font-size: 16px;
    border: none;
    border-radius: 4px;
    min-width: 90px;
    background-color: #fff;
    padding: 5px 10px; 
    color: #535875;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.04);
    &:focus{
        outline: none;
    }

    @media ${device.laptop}{
        font-size: 1.2vw;
    }

    &:hover{
        box-shadow: none;
    }
`

const StyledDefaultButton = styled.button`
    font-size: 16px;
    border: solid 1px #aeb3cd;
    border-radius: 4px;
    min-width: 76px;
    background-color: #fff;
    padding: 5px 10px; 
    color: #535875;
    &:focus{
        outline: none;
    }

    @media ${device.laptop}{
        font-size: 1.2vw;
    }
`

const StyledButton = styled.button`
    min-width: 76px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    background-color: #0364ff;
    padding: 5px; 
    color: #fff;
    &:focus{
        outline: none;
    }

    @media ${device.laptop}{
        font-size: 1.2vw;
    }
`

