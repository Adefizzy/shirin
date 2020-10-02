import React from 'react';
import { OnboardingScaffold } from '../element/OnboardingScaffold';
import companyDetailImage from '../../images/companyDetailImage.png';
import {Input, Col, Button} from 'antd';
import styled from 'styled-components';
import { primaryColor, mutedColor, deepPrimaryColor, device} from './../../GlobalAccets';
import {PrimaryButton} from '../../GlobalComponents/atoms/primaryButton';
import { useParams, useRouteMatch, useHistory, Route, Switch, Link } from 'react-router-dom';
import { ModuleOnboarding } from './ModuleOnboarding';


const { TextArea } = Input;

export const CompanyDetailsOnboarding = (props) => {
    const {path, url} = useRouteMatch();
    const history = useHistory();

    const handleSubmit = () => {

        history.push(`module-onboard`)
    }
    return (
            <OnboardingScaffold
            headerText='Tell us about your business'
            active='company'
            currentPageTitle='Company Details'
            bodyMessage='Now that you have created an account, input your company information to be able to choose your modules (CRM, Finance & HR)'
            image = {companyDetailImage}
            imageWidth='100%'
            childComponent={
                <Col  lg={{span: 18, offset: 3}} sm={{span: 20, offset: 2}}>
                    <InputDiv>
                        <p>Whats the name of your company?</p>
                        <StyledInput size='large'/>
                    </InputDiv>
                    <InputDiv>
                        <p>What does your business do? (Optional)</p>
                        <StyledTextArea rows={2} />
                    </InputDiv>
                    
                    <PrimaryButton text='Let’s get started' onClick={handleSubmit}/>
                </Col>
            }
            />
    );
}


const StyledInput = styled(Input)`
    padding: 10.5px 19px;
    border-radius: 6px;
    font-size: 1.2vw;
    border: solid 1px #aeb3cd;

    &:focus, &:hover{
        border: solid 1px ${primaryColor};
        outline: none;
        box-shadow: none;
    }
`

const StyledTextArea = styled(TextArea)`
    padding: 10.5px 19px;
    border-radius: 6px;
    font-size: 1.2vw;
    border: solid 1px #aeb3cd;
    resize: none;
    margin-bottom: 40px;

    &:focus, &:hover{
        border: solid 1px ${primaryColor};
        outline: none;
        box-shadow: none;
    }
`

const InputDiv = styled.div`
    margin-top: 30px;
    & p{
        margin-bottom: 17px;
        color: ${mutedColor};
        font-size: 1.2vw;
    }
`


