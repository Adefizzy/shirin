import React from 'react';
import styled from 'styled-components';
import { primaryColor, mutedColor, deepPrimaryColor, device} from '../../GlobalAccets';

export const Bar = (props) => {
    return (
        <StyledBar>
            {props.children}
        </StyledBar>
    );
};


const StyledTitleDiv = styled.div`
    min-width: 100%;
    color: #6F738B;
    background-color: #fff;
    padding: 20px 15px;
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 10px;
    & p{
        margin-bottom: 0px;
    }

    @media ${device.laptop}{
        font-size: 1.1vw;
    }
`


const StyledBar = styled(StyledTitleDiv)`
    display: flex;
    color: #000; 
    font-weight: normal;
    padding: 0px;
    & div{
        border-right: 1px solid #DDDDDD;
        padding: 20px 15px;

        &:last-child{
            border: none;
        }
    }

    &:hover{
        border: 1px solid ${primaryColor};
    }
`