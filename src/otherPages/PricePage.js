import React from 'react';
import './style.css';
import styled from 'styled-components';
import { primaryColor, mutedColor, deepPrimaryColor, device} from '../GlobalAccets';
import { BackButton } from '../GlobalComponents/atoms/backButton';
import Logo from '../images/logo.png';

export const PricePage = (props) => {
    return (
        <div style={{padding: '0px 10px 10px 99px'}}>
        <div style={{minHeight: '16vh', marginTop: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                <BackButton/>
                <StyleLogo src={Logo}/>
                <HeaderText>Select the Subscription plan</HeaderText>
                <Description>Shirin ERP has 3 major module. CRM, HR and Finance.<br/>
                        You can subscribe to a single Module or the entire 3 modules</Description>
            </div>
            <StyledPricingTable>
                <div class="table-responsive">          
                    <table class="table subscription-table">
                        <thead>
                                <tr>
                                    <th><h4 class="subscription">Subscription</h4></th>
                                    <th><h6>Monthly (NGN)</h6></th>
                                    <th><h6>Annually (NGN)</h6></th>
                                    <th></th>
                                </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p><strong>CRM</strong></p></td>
                                <td><p>2000</p></td>
                                <td><p>2000</p></td>
                                <td><p>Single User</p></td>
                            </tr>
                            <tr>
                                <td><p><strong>HR</strong> (Human Resource)</p></td>
                                <td><p>2000</p></td>
                                <td><p>2000</p></td>
                                <td><p>Single User</p></td>
                            </tr>
                            <tr class="finance">
                                <td><p><strong>Finance</strong></p></td>
                                <td><p>2000</p></td>
                                <td><p>2000</p></td>
                                <td><p>Single User</p></td>
                            </tr>
                            <tr class="all-modules">
                                <td><p><strong>All 3 Modules</strong></p></td>
                                <td><p><strong>3500</strong></p></td>
                                <td><p><strong>3500</strong></p></td>
                                <td><p>Single User</p></td>
                            </tr>
                            <tr>
                                <td><p><strong>Multiple Users</strong></p></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><p class="additional">1 Additional User</p></td>
                                <td><p>500</p></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                            <td>
                                <div>
                                        <p><strong>Dashboard</strong></p>
                                        <p class="subscribers">
                                            Total subscribers
                                            <br/>Number on Free trial
                                            <br/>Number on paid Subscription
                                            <br/>payment on Subscription
                                            <br/>Subscription Due</p>
                                    </div>   
                                </td>
                                <td><button>Select Plan</button></td>
                                <td><button>Select Plan</button></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>  
        </StyledPricingTable>
        </div>
    );
};


const border = 'solid 1px #edebf6';

const StyleLogo = styled.img`
    width: 8vw;
    margin-top: 35px;
    margin-bottom: 15px;
`

const HeaderText = styled.h1`
    color: ${deepPrimaryColor} !important;
   /*  margin-bottom: 0px !important; */
    font-size: 28px;
    font-weight: bolder;

    @media ${device.laptop}{
        font-size: 2vw;
    }
`

const Description = styled.p`
    color: ${mutedColor};
    font-size: 16px;
    margin-bottom: 40px;

    @media ${device.laptop}{
        font-size: 1vw;
    }
`

const StyledPricingTable = styled.div`
    padding: 0px;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;

    @media ${device.laptop}{
        width: 70%;
       
    }
`