import React from 'react';
import { CompanyDetailsOnboarding } from './OnboardingComponents/compound/CompanyDetailsOnboarding';
import { Route, Switch } from 'react-router-dom';
import {ModuleOnboarding} from './OnboardingComponents/compound/ModuleOnboarding';
import { SetupOnboarding } from './OnboardingComponents/compound/SetupOnboarding';
import { onBoardingSuccess } from './OnboardingComponents/compound/onBoardingSuccess';

const App = ()=>{
  return (
    <Switch>
      <Route exact path='/' component={CompanyDetailsOnboarding}/>
      <Route path='/module-onboard' component = {ModuleOnboarding}/>
      <Route path='/setup' component = {SetupOnboarding}/>
      <Route path='/onboarding-success' component={onBoardingSuccess}/>
    </Switch>
  );
}

export default App;