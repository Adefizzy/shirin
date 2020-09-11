import React from 'react';
import { Button } from 'antd';

export const  SecondaryButton = (props)=>  {
    return (
        <StyledButton>
            {props.text}
        </StyledButton>
    );
}


const StyledButton = styled(Button)`
    min-width: 100%;
    background-color: #05bf70;
    color: #fff;
    font-size: 1vw;
    padding: 11px 0px;
`

