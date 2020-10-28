import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.png';
import { primaryColor, mutedColor, deepPrimaryColor, device} from '../GlobalAccets';
import { PrimaryButton } from '../GlobalComponents/atoms/primaryButton';

export const EmailScaffold = (props) => {
    return (
        <StyledContainer>
            <StyledBody>
            <StyledLogoDiv>
                 <img alt='logo' src={Logo}/>
            </StyledLogoDiv>
            <StyledBanner>
                <img alt='bannerImage' src={props.image}/>
            </StyledBanner>
            <StyledEmailHeader>
                   {props.emailTitle}
            </StyledEmailHeader>
            <StyledEmailBody>
                <StyledP>
                    {props.emailText}
                </StyledP>
                {props.recipientEmail && <p>
                    Email address: <StyledEmailAddress>{props.recipientEmail}</StyledEmailAddress>
                </p> }
               {props.recipientPassword &&  <p>
                    Password: <StyledPassword>{props.recipientPassword}</StyledPassword>
                </p>}
               
            </StyledEmailBody>
            {/* <StyledButtonDiv> */}
                <StyledButton>{props.buttonText}</StyledButton>
           {/*  </StyledButtonDiv> */}
             <StyledNote>
                If you did not make this request,please ignore this email.
             </StyledNote>
            </StyledBody>
            <StyledFooter>
                <StyledHelpNote>Need Help? Please send all requests to: <StyledOfficialEmail>Info@shirinerp.com</StyledOfficialEmail></StyledHelpNote>
                <StyledSignature>ⓒ Powered by Tech Advance - Copyright 2020. All rights Reserved</StyledSignature>
            </StyledFooter>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
   max-width: 100vw;
   display: flex;
   flex-direction: column;
   flex-wrap: nowrap;
   justify-content: space-between;

   @media ${device.laptop}{
       max-width: 50vw;
       margin: 0 auto;
   }
`

const StyledBody = styled.div`
    width: 100%;
    padding: 0 20px 20px 20px;
`

const StyledLogoDiv = styled.div`
    display: grid;
    place-items: center;
    border-bottom: 1px solid #d1d3d5;
    padding: 20px 0px;

    & img{
        width: 40%;
        height: auto;
    }
`

const StyledBanner = styled.div`
  max-width: 100%;
  padding-top: 40px;
  padding-bottom: 56px;
 & img{
     width: 100%;
     height: auto;
 }
`

const StyledEmailHeader = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #07121c;
  margin-bottom: 39px;

  @media ${device.laptop}{
      font-size: 2.2vw;
  }
`

const StyledEmailBody = styled.div`
    min-width: 100%;
    margin-bottom: 30px;

    & p{
        font-size: 18px;
        line-height: 1.45;
        color: #07121c;
        text-align: left;
    }


    @media ${device.laptop}{
        & p{
            font-size: 1.4vw;
        }
    }
`

const StyledP = styled.p`
    margin-bottom: 50px;
`

const StyledEmailAddress = styled.span`
    color: rgba(0, 0, 0, 0.5);
`

const StyledPassword = styled.span`
    color: #aeb3cd;
`

const StyledButtonDiv = styled.div`
    max-width: 40%;
    margin-bottom: 20px;

    @media ${device.laptop}{
        max-width: 30%;
    }
`

const StyledNote = styled.p`
  font-size: 14px;
  line-height: 1.57;
  color: #75818d;
`

const StyledFooter = styled.footer`
    background-color: #f9f8ff;
    padding: 39px 10px;
    text-align: center;
`

const StyledHelpNote = styled.p`
  font-size: 14px;
  line-height: 1.36;
  color: rgba(0, 0, 0, 0.5);

  @media ${device.laptop}{
      font-size: 0.9vw;
  }
`
const StyledOfficialEmail = styled.span`
    color: ${primaryColor};
`

const StyledSignature = styled.p`
  font-size: 14px;
  line-height: 1.36;
  color: #07121c;

  @media ${device.laptop}{
      font-size: 0.9vw;
  }
`

const StyledButton = styled.button`
    font-weight: bolder;
    font-size: 15px;
    border: none;
    padding: 14px 40px;
    border-radius: 6px;
    background-color: ${primaryColor};
    color: #fff;
    margin-bottom: 20px;
    &:focus{
        outline: none;
    }

    @media ${device.laptop}{
        font-size: 1.2vw;
    }
`

