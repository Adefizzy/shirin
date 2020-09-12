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


const modules = [
    {name: 'HR Module', description: '83 Features | N2,000/month', image: hrModule, isActive: false},
    {name: 'Finance Module', description: '83 Features | N2,000/month', image: financeModule, isActive: false },
    {name: 'CRM Module', description: '83 Features | N2,000/month', image: crmModule, isActive: false }
]

export const ModuleOnboarding = (props) => {
    const {path, url} = useRouteMatch();
    const [selectedModule, setModule] = useState('');
    const [moduleState, setModules] = useState(modules);
    const history = useHistory();

    const handleSubmit = () => {
        history.push(`setup`);
    }

    const handleModuleSelection = (name) => {
       let newModuleList = [...moduleState].map(module => {
           if(module.name === name){
               module.isActive = !module.isActive;
               return module;
           }

           return module;
       })

       setModule(newModuleList);
    }

    const moduleList = [...moduleState].map((module, index)=> {
        return <ModuleTypeScaffold
                    key={index}
                    image={module.image}
                    moduleName={module.name}
                    moduleDescription={module.description}
                    active={module.isActive}
                    onClick={() => handleModuleSelection(module.name)}
                />
    });
    return (
        <OnboardingScaffold
        headerText='Welcome, Chopnow'
        active='choose'
        currentPageTitle='Choose preferred modules'
        bodyMessage='You can select the different modules (CRM, HR and Finance) that satisfy your business needs which will afford you amazing features'
        image = {moduleImage}
        imageWidth='80%'
        childComponent={
            <Col  lg={{span: 18, offset: 3}} sm={{span: 20, offset: 2}}>
                <Description>Click to select the services your business needs</Description>
                {moduleList}
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

