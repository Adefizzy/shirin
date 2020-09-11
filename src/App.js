import React from 'react';
import { CompanyDetailsOnboarding } from './OnboardingComponents/compound/CompanyDetailsOnboarding';
import { Route, Switch } from 'react-router-dom';
import {ModuleOnboarding} from './OnboardingComponents/compound/ModuleOnboarding';
import { SetupOnboarding } from './OnboardingComponents/compound/SetupOnboarding';

const App = ()=>{
  return (
    <Switch>
      <Route exact path='/' component={CompanyDetailsOnboarding}/>
      <Route path='/module-onboard' component = {ModuleOnboarding}/>
      <Route path='/setup' component = {SetupOnboarding}/>
    </Switch>
  );
}

export default App;