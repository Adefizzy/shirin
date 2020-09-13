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



export const  SignUp = (props) => {
    const history = useHistory();

    useEffect(() => {

    }, [])

    const onBackClick = () => {
        history.goBack();
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
            <HeaderText>Create new account</HeaderText>
            <Form
            layout="vertical"
            name="basic"
            initialValues={{

            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <Form.Item
                label= {<StyledLabel>Your Full Name</StyledLabel>}
                name="fullname"
                rules={[
                {
                    message: 'Please input your full name!',
                },
                ]}
            >
                <StyledInput />
            </Form.Item>
            <Form.Item
                label=  {<StyledLabel>Your workspace (recomended: company name)</StyledLabel>}
                name="companyName"
                rules={[
                {
                    message: 'Please input your company name!',
                },
                ]}
            >
                <StyledInput />
            </Form.Item>
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
            <PrimaryButton text='SIGN UP'/>
            </Form>
            <StyledFooterMessage>By clicking Sign Up, you agree to our <span>Terms, Data Policy</span> and <span>Cookie Policy.</span></StyledFooterMessage>
            <StyledSwitchMessage>Already have account? <span>Sign In.</span></StyledSwitchMessage>
            </div>
          </Col>
          <StyledSecondDiv lg={{span: 14}}>
              <img style={{minWidth: '100%', maxHeight: '100%', objectFit: 'cover'}} src={signupImage}/>
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


