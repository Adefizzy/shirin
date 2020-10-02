import React from 'react';
import styled from 'styled-components';
import { primaryColor, mutedColor, deepPrimaryColor, device} from './../../GlobalAccets';
import { FiChevronLeft } from 'react-icons/fi';
import {Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import companyDetailImage from '../../images/companyDetailImage.png';
import {Row, Col, Typography} from 'antd';
import { ProgressStageScaffold } from './../atom/ProgressStage';
import {useHistory} from 'react-router-dom';
import { BackButton } from './../../GlobalComponents/atoms/backButton';

const { Title, Paragraph } = Typography;



export const  OnboardingScaffold = (props) => {
    const history = useHistory();

    const onBackClick = () => {
        history.goBack()
    }
    return (
        <MainComponent>
            <FirstSubSection sm={{span: 24}} lg={{span: 10}}>
                <Row>
                    <Col lg={{span: 18, offset: 3}} sm={{span: 20, offset: 2}}>
                    <div style={{minHeight: '16vh', marginTop: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                    {/* <BackNavigator>
                        <StyledFiChevronLeft/>
                        <p onClick={onBackClick}>Back</p>
                    </BackNavigator> */}
                    <BackButton/>
                    <StyleLogo src={Logo}/>
                         <HeaderText>{props.headerText}</HeaderText>
                    </div>
                    </Col>
                    {props.childComponent}
                </Row>
            </FirstSubSection>
            <SecondSubSection sm={{span: 24}} md={{span: 14}}>
                <Row>
                <ProgressTrackerDiv lg={{span: 20, offset: 4}}>
                <div style={{minHeight: '16vh', marginTop: '30px', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end'}}>
                   
                   <ProgressStageScaffold
                   number={1}
                   name='Company'
                   active={props.active == 'company'}
                   />
                   <ProgressStageScaffold
                   number={2}
                   name='Choose'
                   active={props.active == 'choose'}
                   />
                   <ProgressStageScaffold
                   number={3}
                   name='Setup'
                   active={props.active == 'setup'}
                   />
                </div>
                </ProgressTrackerDiv>
                <Col lg={{span: 20, offset: 4}}>
                    <CurrentPageHeader>{props.currentPageTitle}</CurrentPageHeader>
                </Col>
                <Col lg={{span: 11, offset: 4}}>
                    <CurrentPageBody>
                        {props.bodyMessage}
                    </CurrentPageBody>
                </Col>
                <Col lg={{span: 19, offset: 5}}>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                        <img style={{width: props.imageWidth, marginTop: '5vh', objectFit: 'contain'}} src={props.image}/>
                    </div>
                </Col>
                </Row>
            </SecondSubSection>
        </MainComponent>
    );
}


const MainComponent = styled(Row)`
    display: flex;
`

const FirstSubSection = styled(Col)`
    background-color: #fff;
    min-height: 100vh;
`

const SecondSubSection = styled(Col)`
    display: none;
    min-height: 100vh;
    background-color: ${primaryColor};
    @media ${device.laptop}{
        display: inline-block;
    }
`

const BackNavigator = styled(Link)`
    display: flex;
    align-items: center;
    & p{
        color: ${mutedColor};
        margin-left: 10px;
        font-size: 1vw;
        margin-bottom: 0px;
    }
`

const StyledFiChevronLeft = styled(FiChevronLeft)`
    color: ${primaryColor};
    font-size: 1vw;
    
`

const StyleLogo = styled.img`
    width: 8vw;
    margin-top: 35px;
`

const HeaderText = styled.h1`
    color: ${deepPrimaryColor} !important;
    margin-bottom: 0px !important;
    font-size: 2vw;
    font-weight: bolder;
`

const ProgressTrackerDiv = styled(Col)`
    display: flex;
    align-items: center;
    & div{
        margin-left: 81px;
    }

    & div:first-child{
        margin-left:0px;
    }
`

const CurrentPageHeader = styled.h1`
    color: #fff !important;
    margin-top: 70px;
    font-size: 2vw;
    font-weight: bolder;
`
const CurrentPageBody = styled.p`
    line-height: 1.5;
    color: #c7c1db;
    font-size: 1.2vw;
    margin-top: 10px;
`


