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


const StyledButton = styled.button`
    background-color: ${primaryColor};
    min-width: 100%;
    color: #fff;
    font-size: 1.2vw;
    border: none;
    padding: 14px 0px;
    border-radius: 6px;
    margin-top: 40px;
`

