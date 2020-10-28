import React from 'react';
import { EmailScaffold } from './EmailScaffold';
import inviteEmailImg from '../images/inviteEmail.png';

export const InviteEmail = () => {
    return (
       <EmailScaffold
        image={inviteEmailImg}
        emailTitle = 'Dear Nurudeen Ajayi'
        emailText = 'Your team; Techadvance has invitd you to her ERP platform. To get started, click the get started button to access the platform using your credentials below:'
        recipientEmail='nurudeen@techadvance.ng'
        recipientPassword = '84ejdajdfj'
        buttonText='Get started'
       />
    );
};



