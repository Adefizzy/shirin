import React from 'react';
import styled from 'styled-components';
import { primaryColor, mutedColor, deepPrimaryColor, device} from '../../GlobalAccets';

export const AccountBar = (props) => {

    return (
        <>
            <StyledSubTitleDiv>
               <p>{props.title}</p>
           </StyledSubTitleDiv>
           {props.bars}
        </>
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
const StyledSubTitleDiv = styled(StyledTitleDiv)`
    color: #000; 
    font-weight: normal; 
    background-color: #d9edf7;
`

