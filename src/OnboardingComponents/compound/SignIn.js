import React, {useEffect} from 'react';
import styled from 'styled-components';
import { primaryColor, mutedColor, deepPrimaryColor, device} from '../../GlobalAccets';
import { FiChevronLeft } from 'react-icons/fi';
import {Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import signupImage from '../../images/onBoarding2.png';
import companyDetailImage from '../../images/companyDetailImage.png';
import {Row, Col, Typography, Form, Input} from 'antd';
import { ProgressStageScaffold } from '../atom/ProgressStage';
import {useHistory} from 'react-router-dom';
import {PrimaryButton} from '../../GlobalComponents/atoms/primaryButton'

const { Title, Paragraph } = Typography;
const {Password, Email} = Input;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };



export const  SignIn = (props) => {
    const history = useHistory();

    useEffect(() => {

    }, [])

    const gotoSignUp = () => {
        history.push('signup');
    }

    const onFinish = values => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

    return (
      <StyledRow>
          <Col sm={{span: 24}} lg={{span: 10}}>
              <div style={{width: '60%', margin: '0 auto'}}>
            <StyleLogo src={Logo}/>
            <HeaderText>Login to your account</HeaderText>
            <Form
            layout="vertical"
            name="basic"
            initialValues={{

            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <Form.Item
                label= {<StyledLabel>Email</StyledLabel>}
                name="email"
                rules={[
                {
                    message: 'Please input your email!',
                    type: 'email'
                },
                ]}
            >
                <StyledInput />
            </Form.Item>

            <Form.Item
                label={<StyledLabel>Password</StyledLabel>}
                name="password"
                rules={[
                {
                    message: 'Please input your password!',
                },
                ]}
            >
                <StyledPassword />
            </Form.Item>
            <PrimaryButton text='SIGN IN'/>
            </Form>
            <StyledFooterMessage>Forgot password? <span>click here</span></StyledFooterMessage>
            <StyledSwitchMessage>Don't have am account? <span onClick={gotoSignUp}>Sign Up.</span></StyledSwitchMessage>
            </div>
          </Col>
          <StyledSecondDiv lg={{span: 14}}>
              <img style={{minWidth: '100%', maxHeight: '100%', objectFit: 'cover'}} src={signupImage}/>
              <StyledInto>
                  <h1>Connect and manage with your team!</h1>
                  <p>Aziest Jordan is one of the biggest superstars to have immerged from the<br/> professional designer in world.</p>

              </StyledInto>
          </StyledSecondDiv>
      </StyledRow>
    );
}

const StyledRow = styled(Row)`
    display: flex;
`
const StyleLogo = styled.img`
    width: 8vw;
    margin-top: 35px;
`
const StyledSecondDiv = styled(Col)`
    max-height: 100vh;
    overflow: hidden;
    height: 100vh;
    display: none;
    background-color: #081441;
    position: relative;
    @media ${device.laptop}{
            display: inline-block;
    }
`

const StyledPassword = styled(Password)`
    padding: 10.5px 19px;
    border-radius: 6px;
    font-size: 1.2vw;
    border: solid 1px #aeb3cd;

    &:focus, &:active, &:hover{
        border: solid 1px ${primaryColor};
        outline: none;
        box-shadow: none;
    }
`

const StyledInput = styled(Input)`
    padding: 10.5px 19px;
    border-radius: 6px;
    font-size: 1.2vw;
    border: solid 1px #aeb3cd;

    &:focus, &:active, &:hover{
        border: solid 1px ${primaryColor};
        outline: none;
        box-shadow: none;
    }
`

const StyledLabel = styled.p`
    margin-bottom: 0px;
    color: ${mutedColor};
    font-size: 1vw;

`

const HeaderText = styled.h1`
    color: ${deepPrimaryColor} !important;
    font-size: 2vw;
    font-weight: bolder;
    margin-top: 30px;
    margin-bottom: 21px;
`

const StyledFooterMessage = styled.p`
   color: #242f57;
   line-height: 1.5;
   margin-top: 10px;

   & span{
       color: ${primaryColor};

       &:hover{
           cursor: pointer;
       }
   }
`

const StyledSwitchMessage = styled(StyledFooterMessage)`
 margin-top: 50px;
`

const StyledInto = styled.div`
    position: absolute;
    bottom: 0;
    height: 30%;
    width: 100%;
    text-align: center;
    & h1{
        font-size: 1.8vw;
        font-weight: bold;
        line-height: 1.38;
        letter-spacing: 0.5px;
        color: #ffffff;
    }

    & p{
        font-size: 0.8vw;
        line-height: 1.71;
        letter-spacing: 0.5px;
        color: #ffffff;
    }
`


