import React from 'react';
import {Row, Col} from 'antd';
import { primaryColor, mutedColor, deepPrimaryColor, device} from './../../GlobalAccets';
import {PrimaryButtonWhite} from '../../GlobalComponents/atoms/primaryButton';
import styled from 'styled-components';
import ShirinLogo from '../../images/logo_w.png';
import SuccessImage from '../../images/successImage.png';

export const onBoardingSuccess = (Props) => {
    return (
        <StyledRow>
            <StyledWelcomeMessage lg={{span: 12}} >
                <StyledInnerDiv>
                    <StyledImage src={ShirinLogo}/>
                    <h1>Your Chopnow team account has been created</h1>
                    <p>You can select the different modules (CRM, HR and Finance) that satisfy your business needs which will afford you amazing features</p>
                    <StyledButton text='Continue to Dashboard'/>
                </StyledInnerDiv>
            </StyledWelcomeMessage>
            <StyledSuccessImage lg={{span: 12}}>
                <img src={SuccessImage}/>
            </StyledSuccessImage>
            
        </StyledRow>
    );
};

const StyledRow = styled(Row)`
    min-height: 100vh;
    background-color: ${primaryColor};

`

const StyledWelcomeMessage = styled(Col)`
    min-height: 100vh;
    display: grid;
    place-items: center;
`

const StyledSuccessImage = styled(Col)`
    min-height:100vh;
    display: none;
    align-items: center;
    justify-content: flex-end;

    & img{
            width: 70%;
        }

    @media ${device.laptop}{
        display: flex;

    }
`
const StyledInnerDiv = styled.div`
    width: 70%;
    text-align: center;
    color: #fff;
    & h1{
        color: #fff;
        font-weight: bolder;
        font-size: 3vw;
        line-height: 1.17;
    }

    & p{
        color: #c7c1db;
        font-size: 1.8vw;
        line-height: 1.5;
    }
`

const StyledImage = styled.img`
    width: 15vw;
    margin-bottom: 47px;
`

const StyledButton = styled(PrimaryButtonWhite)`
    min-width: 70%;
    margin: 0 auto;
`