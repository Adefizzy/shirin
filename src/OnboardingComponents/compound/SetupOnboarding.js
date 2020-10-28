import React, {useState} from 'react';
import { OnboardingScaffold } from '../element/OnboardingScaffold';
import styled from 'styled-components';
import setupImage from './../../images/setup.png';
import { Col, Tabs } from 'antd';
import { primaryColor, mutedColor, deepPrimaryColor, device} from './../../GlobalAccets';
import {FeaturesScaffold} from './../element/Features';
import { FeatureScaffold } from './../atom/Feature';
import { PrimaryButton } from '../../GlobalComponents/atoms/primaryButton';
import {useHistory} from 'react-router-dom';

const { TabPane } = Tabs;

const basicFeatures = [
    {name: 'HR Basic', isActive: false },
    {name :'Employee Leave',isActive: false}, 
    {name: 'Payslips', isActive: false},
    {name:'CRM module', isActive: false}
];
const advanceFeatures = [
        {name: 'HR Basic', isActive: false },
        {name :'Employee Leave',isActive: false}, 
        {name: 'Payslips', isActive: false}, 
        {name:'CRM module', isActive: false}, 
        {name: 'Attendance',isActive: false}, 
        {name: 'Staff Management', isActive: false}
    ];

export const SetupOnboarding = (props) => {
    const [advanceFeatureState, setAdvanceFeatureState] = useState(advanceFeatures);
    const [advanceText, setAdvanceText] = useState('Select all');
    const [basicFeatureState, setBasicFeatureState] = useState(basicFeatures);
    const [basicText, setBasicText] = useState('Select all');
    const history = useHistory();

    const onFeatureSelect = (name) => {
        let newFeatures = [...advanceFeatureState].map(feature => {
            if(name === feature.name){
                feature.isActive = !feature.isActive;
                return feature;
            }

            return feature;
        });

        setAdvanceFeatureState(newFeatures)
    }

    const onBasicSelect = (name) => {
        let newFeatures = [...basicFeatureState].map(feature => {
            if(name === feature.name){
                feature.isActive = !feature.isActive;
                return feature;
            }

            return feature;
        });

        setBasicFeatureState(newFeatures)
    }

    const onSelectAllBasicFeatures = () => {
        if(basicText === 'Select all'){
            let newFeatures = basicFeatureState.map(feature => {
                        feature.isActive = true;
                        return feature;
            });
            setBasicFeatureState(newFeatures);
            setBasicText('Uncheck all');
         }else{
            let newFeatures = basicFeatureState.map(feature => {
                feature.isActive = false;
                return feature;
            });
            setBasicFeatureState(newFeatures);
            setBasicText('Select all');
         }
    }

    const onSelectAllAdvanceFeatures = () => {
        if(advanceText === 'Select all'){
            let newFeatures = advanceFeatures.map(feature => {
                        feature.isActive = true;
                        return feature;
            });
            setAdvanceFeatureState(newFeatures);
            setAdvanceText('Uncheck all');
         }else{
            let newFeatures = advanceFeatures.map(feature => {
                feature.isActive = false;
                return feature;
            });
            setAdvanceFeatureState(newFeatures);
            setAdvanceText('Select all');
         }
    }

    const advanceFeatureList = advanceFeatureState.map((feature, index) => {
        return <FeatureScaffold 
                    key={index}
                    featureName={feature.name} 
                    active={feature.isActive} 
                    onClick={() => onFeatureSelect(feature.name)}
                />
    });

    const basicFeatureList = basicFeatureState.map((feature, index) => {
        return <FeatureScaffold 
                    key={index}
                    featureName={feature.name} 
                    active={feature.isActive} 
                    onClick={() => onBasicSelect(feature.name)}
                />
    });

    const onSubmit = () => {
        history.push('onboarding-success')
    }

    const onTabChange = () => {

    }

    return (
        <OnboardingScaffold
        headerText='Final Steps…'
        active='setup'
        currentPageTitle='Setup features you need'
        bodyMessage='You can select the different modules (CRM, HR and Finance) that satisfy your business needs which will afford you amazing features'
        image = {setupImage}
        imageWidth='60%'
        childComponent={
            <Col  lg={{span: 18, offset: 3}} sm={{span: 20, offset: 2}}>
                <StyledTabs tabBarUnderlineStyle={{color: 'red', }} tabBarStyle={{color: '#aeb3cd', activeborderBottom: '1px solid red'}} defaultActiveKey="1" onChange={onTabChange}>
                    <StyledTabPane tab="HR Module" key="1">
                    <FeaturesScaffold
                        featureType= 'Basic Features'
                        actionText={basicText}
                        onSelectAll={onSelectAllBasicFeatures}
                        features={basicFeatureList}
                        />
                        <FeaturesScaffold
                        featureType= 'Advance Features'
                        actionText={advanceText}
                        onSelectAll={onSelectAllAdvanceFeatures}
                        features={advanceFeatureList}
                    />
                    </StyledTabPane>
                    <TabPane tab="Finance Module" key="2">
                    <FeaturesScaffold
                        featureType= 'Basic Features'
                        actionText={basicText}
                        onSelectAll={onSelectAllBasicFeatures}
                        features={basicFeatureList}
                        />
                        <FeaturesScaffold
                        featureType= 'Advance Features'
                        actionText={advanceText}
                        onSelectAll={onSelectAllAdvanceFeatures}
                        features={advanceFeatureList}
                    />
                    </TabPane>
                    <TabPane tab="CRM Module" key="3">
                    <FeaturesScaffold
                        featureType= 'Basic Features'
                        actionText={basicText}
                        onSelectAll={onSelectAllBasicFeatures}
                        features={basicFeatureList}
                        />
                        <FeaturesScaffold
                        featureType= 'Advance Features'
                        actionText={advanceText}
                        onSelectAll={onSelectAllAdvanceFeatures}
                        features={advanceFeatureList}
                    />
                    </TabPane>
                </StyledTabs>
                <div style={{ marginBottom: '40px'}}></div>
                <PrimaryButton text='Continue to Finance Module' onClick={onSubmit}/>
            </Col>
        }
        />
    );
}


const StyledTabs = styled(Tabs)`
    margin-top: 30px;

    &.ant-tabs-tab-btn:focus, .ant-tabs-tab-remove:focus, .ant-tabs-tab-btn:active, .ant-tabs-tab-remove:active{
        color: ${primaryColor} !important;
        border-bottom-color: red;
    }

    &.ant-tabs-tab:hover{
        color: ${primaryColor} !important;
        border-bottom-color: red;
    }
  

    & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
        color: ${primaryColor} !important;
        border-bottom-color: red !important;
        &:focus{
            color: ${primaryColor} !important;
        }
    
    }

    & .ant-tabs-nav::before:active{
        color: ${primaryColor};
        border-bottom-color: red;
  
        &:focus{
            color: ${primaryColor} !important;
        }
    }

    &:focus{
            color: ${primaryColor} !important;
        }
`

const StyledTabPane = styled(TabPane)`
  border-bottom-color: red;
`


