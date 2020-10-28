import React from 'react';
import styled from 'styled-components';
import { primaryColor, mutedColor, deepPrimaryColor, device} from '../GlobalAccets';
import { BackButton } from '../GlobalComponents/atoms/backButton';
import Logo from '../images/logo.png';
import { MdFontDownload } from 'react-icons/md';


export const PricingPage = (props) => {
    return (
        <div>
             <div style={{minHeight: '16vh', marginTop: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                <BackButton/>
                <StyleLogo src={Logo}/>
                <HeaderText>Select the Subscription plan</HeaderText>
                <Description>Shirin ERP has 3 major module. CRM, HR and Finance.<br/>
You can subscribe to a single Module or the entire 3 modules</Description>
            </div>
            <StyledPricingTable>
                <StyledColumn>
                    <StyledHeader>
                        <p>Subscription</p>
                    </StyledHeader>
                    <StyledSubMiddleColumn>

                    </StyledSubMiddleColumn>
                </StyledColumn>
          



            </StyledPricingTable>
    
        </div>
    );
};

const border = 'solid 1px #edebf6';
const StyledTable = styled.table`
    min-width: 100%;
    border-collapse: collapse;
    border: ${border};
`


const regularBoldP = `
font-size: 24px;
font-weight: bold;
color: #13254a;
 @media ${device.laptop}{
    font-size: 1.4vw;
 }
`;

const regularThinP = `
    font-size: 24px;
    color: #13254a;
    font-weight: normal;
    @media ${device.laptop}{
        font-size: 1.4vw;
    }
`

const smallP = `
font-size: 20px;
color: #13254a;
font-weight: normal;
@media ${device.laptop}{
    font-size: 1.2vw;
}
`

const StyleLogo = styled.img`
    width: 8vw;
    margin-top: 35px;
    margin-bottom: 15px;
`

const HeaderText = styled.h1`
    color: ${deepPrimaryColor} !important;
    margin-bottom: 0px !important;
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
    border: ${border};
    padding: 0px;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;

    @media ${device.laptop}{
        width: 70%;
       
    }
`

const StyledColumn = styled.div`
    flex-basis: 30%;
    border-right: ${border};
`

const StyledHeader = styled.div`
    border-bottom: ${border};
    & p{
        font-size: 26px;
        font-weight: bold;
        letter-spacing: -0.27px;
        color: #13254a;
    }

    @media ${device.laptop}{
        & p{
            font-size: 2.2vw;
        }
    }
`

const StyledSubMiddleColumn = styled.div`
    border-bottom: ${border};
    margin-left: 30px;

    & p{
        ${regularBoldP}

        & span{
            ${regularThinP};
        }
    }
`

