import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {  Progress, Avatar } from 'antd';
import {MdArrowDropDown, MdMoreHoriz} from 'react-icons/md';
import { TiAttachment } from 'react-icons/ti';
import { FiCheck, FiPaperclip, FiClock} from 'react-icons/fi';
import { primaryColor, mutedColor, deepPrimaryColor, device} from '../../GlobalAccets';

export const SingleTask = (props) => {
    const [daysLeftBackground, setDaysLeftBackground] = useState('');
    const [daysLeftColor, setDaysLeftColor] = useState('');


    useEffect(() => {
        if(props.task.daysLeft >= 10){
            setDaysLeftBackground('#f1f1f5');
            setDaysLeftColor('#92929d')
        }else if(props.task.daysLeft >= 5){
            setDaysLeftBackground('#FFF4EC');
            setDaysLeftColor('#ff974a')
        } else {
            setDaysLeftBackground('#FEEEEE');
            setDaysLeftColor('#fc5a5a');

            
        }
    }, [props.task.daysLeft])



    return (
        <StyledTask>
            <p style={{textDecoration: props.task.status === 'completed'? 'line-through': 'none'}}>{props.task.title}</p>
            <p>{props.task.team} Team</p>
            <StyledTaskTagRow>
            <StyledTaskTag>
                <FiPaperclip/>
                <p>{props.task.attached}</p>
            </StyledTaskTag>
            <StyledTaskTag>
                <StyledFiCheck/>
                <p>{props.task.taskScore}</p>
            </StyledTaskTag>
           {
                props.task.status !== 'completed' && 
                <StyledDaysLeft style={{backgroundColor: daysLeftBackground , color: daysLeftColor}}>
                    <FiClock/>
                    <p style={{color: daysLeftColor}}>{props.task.daysLeft} days left</p>
                </StyledDaysLeft>
            }
            </StyledTaskTagRow>
            <StyledPercentage>{props.task.percent}%</StyledPercentage>
            <Progress strokeColor='#3dd598' strokeWidth={4} percent={props.task.percent} showInfo={false} />
            <Avatar style={{ color: '#fff', backgroundColor: '#fde3cf' }}>UL</Avatar>
            <Avatar style={{ color: '#fff', backgroundColor: '#50b5ff', marginLeft: '10px' }}>AF</Avatar>
            <Avatar style={{ color: '#696974', backgroundColor: '#fff', marginLeft: '10px', border: '1px solid #e2e2ea' }}>+3</Avatar>
        </StyledTask>
    );
};



const StyledTask = styled.div`
    border-radius: 6px;
    background-color: #ffffff;
    padding: 10px;
    margin: 10px;
    & p:first-child{
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.1px;
        color: #171725;
        margin-bottom: 7px;
    }

    & p:nth-child(2){
        font-size: 14px;
        letter-spacing: 0.1px;
        color: #696974;
    }

    @media ${device.laptop}{
       & p{
        font-size: 1vw;
       
     }
    }
`

const StyledTaskTagRow = styled.div`
    min-width: 100%;
    display: flex;
`

const StyledTaskTag = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    letter-spacing: 0.1px;
    color: #92929d;
    margin-left: 20px;

    &:first-child{
        margin-left: 5px;
    }

    & p{
        margin-bottom: 0px;
        margin-left:1px;
    }

    @media ${device.laptop}{
        font-size: 1.1vw;
    }
`

const StyledFiCheck = styled(FiCheck)`
    border: 1px solid #92929d;
    border-radius: 5px;
    font-size: 12px;
    padding: 1px;
    margin-right: 2px;


    @media ${device.laptop}{
        font-size: 0.9vw;
    }
`

const StyledDaysLeft = styled(StyledTaskTag)`
   padding: 0 4px;
   border-radius: 5px;
`

const StyledPercentage = styled.p`
    font-size: 12px;
    text-align: right;
    color: #696974;
    margin-bottom: 0px;
    line-height: 0px;
    margin-top: 20px;

    @media ${device.laptop}{
        font-size: 0.8vw;
    }
`