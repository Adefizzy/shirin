import React from 'react';
import { OnboardingScaffold } from '../element/OnboardingScaffold';
import styled from 'styled-components';
import setupImage from './../../images/setup.png';
import { Col } from 'antd';
import { primaryColor, mutedColor, deepPrimaryColor, device} from './../../GlobalAccets';
import {Features} from './../element/Features';

export const SetupOnboarding = (props) => {
    return (
        <OnboardingScaffold
        headerText='Final Steps…'
        active='setup'
        currentPageTitle='Setup features you need'
        bodyMessage='You can select the different modules (CRM, HR and Finance) that satisfy your business needs which will afford you amazing features'
        image = {setupImage}
        imageWidth='60%'
        childComponent={
            <Col  lg={{span: 16, offset: 4}} sm={{span: 20, offset: 2}}>
                <Features
                featureType= 'Basic Features'
                actionText='Select All'
                />
                <Features
                featureType= 'Advance Features'
                actionText='Check all'
                />
            </Col>
        }
        />
    );
};

