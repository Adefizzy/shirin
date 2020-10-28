import React from 'react';
import { CompanyDetailsOnboarding } from './OnboardingComponents/compound/CompanyDetailsOnboarding';
import { Route, Switch } from 'react-router-dom';
import {ModuleOnboarding} from './OnboardingComponents/compound/ModuleOnboarding';
import { SetupOnboarding } from './OnboardingComponents/compound/SetupOnboarding';
import { OnBoardingSuccess } from './OnboardingComponents/compound/onBoardingSuccess';
import { SignUp } from './OnboardingComponents/compound/SignUp';
import { SignIn } from './OnboardingComponents/compound/SignIn';
import { SiderDemo } from './DashBoardComponents/dashboard';
import {InviteEmail} from './otherPages/InviteEmail';
import { SignUpEmail } from './otherPages/SignUpEmail';
import { PricingPage } from './otherPages/PricingPage';
import { PricePage } from './otherPages/PricePage';

const App = ()=>{
  return (
    <Switch>
      <Route exact path='/' component={CompanyDetailsOnboarding}/>
      <Route path='/module-onboard' component = {ModuleOnboarding}/>
      <Route path='/setup' component = {SetupOnboarding}/>
      <Route path='/onboarding-success' component={OnBoardingSuccess}/>
      <Route path='/signup' component={SignUp}/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/dashboard' component={SiderDemo}/>
      <Route path='/inviteemail' component={InviteEmail}/>
      <Route path='/signupemail' component={SignUpEmail}/> 
      <Route path='/pricingPage' component={PricePage}/>  
    </Switch>
  );
}

export default App;