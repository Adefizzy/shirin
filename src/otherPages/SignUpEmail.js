import React from 'react';
import { EmailScaffold } from './EmailScaffold';
import SignUpImage from '../images/signUpImage.png';

export const SignUpEmail = () => {
    return (
       <EmailScaffold
        image={SignUpImage}
        emailTitle = 'Thank you for signing up on Shirin!'
        emailText = 'Kindly confirm your email address by clicking the link below. We may need to send you key details about our service and it’s important that we have your accurate email address.'
        buttonText= 'Confirm Email Address'
       />
    );
};



