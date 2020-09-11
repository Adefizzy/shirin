import React, {useState} from 'react';
import moduleImage from '../../images/module.png';
import hrModule from '../../images/hr-module.png';
import crmModule from '../../images/crm-module.png';
import financeModule from '../../images/finance-module.png'
import { OnboardingScaffold } from '../element/OnboardingScaffold';
import styled from 'styled-components';
import {Col} from 'antd';
import { primaryColor, mutedColor, deepPrimaryColor, device} from './../../GlobalAccets';
import { FiCheck } from 'react-icons/fi';
import { ModuleTypeScaffold } from '../element/ModuleType';
import {PrimaryButton} from '../../GlobalComponents/atoms/primaryButton';
import { useParams, useRouteMatch, useHistory, Route, Switch, Link } from 'react-router-dom';

export const ModuleOnboarding = (props) => {
    const {path, url} = useRouteMatch();
    const [selectedModule, setModule] = useState('');
    const history = useHistory();

    const handleSubmit = () => {
        history.push(`setup`);
    }

    const handleModuleSelection = (module) => {
        setModule(module)
    }
    return (
        <OnboardingScaffold
        headerText='Welcome, Chopnow'
        active='choose'
        currentPageTitle='Choose preferred modules'
        bodyMessage='You can select the different modules (CRM, HR and Finance) that satisfy your business needs which will afford you amazing features'
        image = {moduleImage}
        imageWidth='80%'
        childComponent={
            <Col  lg={{span: 16, offset: 4}} sm={{span: 20, offset: 2}}>
                <Description>Click to select the services your business needs</Description>
                <ModuleTypeScaffold
                    image={hrModule}
                    moduleName='HR Module'
                    moduleDescription='83 Features | N2,000/month'
                    active={selectedModule === 'hr'}
                    onClick={() => handleModuleSelection('hr')}
                />
                <ModuleTypeScaffold
                    image={financeModule}
                    moduleName='Finance Module'
                    moduleDescription='83 Features | N2,000/month'
                    active={selectedModule === 'finance'}
                    onClick={() => handleModuleSelection('finance')}
                />
                <ModuleTypeScaffold
                    image={crmModule}
                    moduleName='CRM Module'
                    moduleDescription='83 Features | N2,000/month'
                    active={selectedModule === 'crm'}
                    onClick={() => handleModuleSelection('crm')}
                />
                <PrimaryButton text='Continue' onClick={handleSubmit}/>
            </Col>
        }
        />
    );
};


const Description = styled.p`
    color: ${mutedColor};
    font-size: 1vw;
    margin-bottom: 40px;
`

