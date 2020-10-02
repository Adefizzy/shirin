import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {  Progress, Avatar } from 'antd';
import {MdArrowDropDown, MdMoreHoriz, MdAdd} from 'react-icons/md';
import { TiAttachment } from 'react-icons/ti';
import { FiCheck, FiPaperclip, FiClock} from 'react-icons/fi';
import { primaryColor, mutedColor, deepPrimaryColor, device} from '../../GlobalAccets';
import {SingleTask} from './../element/SingleTask';
import { useHistory} from 'react-router-dom';


const selectValues = ['All Project', 'A Value', 'Others Values', 'Some other Values']

const InProgress = [
    {
        title: 'Finance App Exploration',
        team: 'Paystack',
        attached: 13,
        taskScore: '4/5',
        percent: 50,
        daysLeft: 14,
    },
    {
        title: 'Illustration',
        team: 'GPAY',
        attached: 2,
        taskScore: '7/8',
        percent: 80,
        daysLeft: 10,
    }, 
  
]

const waiting = [
    {
        title: 'Product Preview & Mock up for…',
        team: 'Nairabox',
        attached: 13,
        taskScore: '4/5',
        percent: 95,
        daysLeft: 2,
    },
    {
        title: 'Square - Social Media Plan ',
        team: 'Nairabox',
        attached: 2,
        taskScore: '7/8',
        percent: 80,
        daysLeft: 8,
    },
    {
        title: 'Product Preview & Mock up for…',
        team: 'Nairabox',
        attached: 13,
        taskScore: '4/5',
        percent: 95,
        daysLeft: 2,
    },
    {
        title: 'Square - Social Media Plan ',
        team: 'Nairabox',
        attached: 2,
        taskScore: '7/8',
        percent: 80,
        daysLeft: 8,
    }
]

const completed = [
    {
        title: 'Product Preview & Mock up for…',
        team: 'Nairabox',
        attached: 13,
        taskScore: '4/5',
        percent: 95,
        daysLeft: 2,
        status: 'completed'
    },
    {
        title: 'Square - Social Media Plan ',
        team: 'Nairabox',
        attached: 2,
        taskScore: '7/8',
        percent: 80,
        daysLeft: 8,
        status: 'completed'
    },
    {
        title: 'Product Preview & Mock up for…',
        team: 'Nairabox',
        attached: 13,
        taskScore: '4/5',
        percent: 95,
        daysLeft: 2,
        status: 'completed'
    },
    {
        title: 'Square - Social Media Plan ',
        team: 'Nairabox',
        attached: 2,
        taskScore: '7/8',
        percent: 80,
        daysLeft: 8,
        status: 'completed'
    }
]

export const Task = (props) => {
    const [selectedValue, setSellectedValue] = useState('All Project');
    const [showDropDown, setShowDropDown] = useState(false);
    const history = useHistory();



    useEffect(() => {
        document.addEventListener('click', (event) => {
            if(!event.target.classList.contains('dropDownValue')){
                setShowDropDown(false);
            }
        })
    }, [])

    const handleChange = () => {

    }

    const handleDropDownSelect = (value) => {
        setSellectedValue(value);
        setShowDropDown(false)
    }

    const dropDOwnValue = selectValues.map((value, index) => {
        return <p className='dropDownValue' onClick={() => handleDropDownSelect(value)}>{value}</p>
    })

    const handleShowDropdown = () => {
        setShowDropDown(true);
    }

    const inprogressTasks = InProgress.map((task, index) => {
        return <SingleTask key={index} task={task}/>
    })


    const waitingTasks = waiting.map((task, index) => {
        return <SingleTask key={index} task={task}/>
    })

    const completedTasks = completed.map((task, index) => {
        return <SingleTask key={index} task={task}/>
    })

    const addTask = () => {
        history.push('addTask');
    }

    return (
        <>
             <SectionHeader
                sectionName='Tasks'
                sectionMessage='As of'
                sectionDate='27 June 2020'>
                    <StyledShowProjectDiv>
                        <p>Show:</p>
                        <StyledSelect>
                            <p className='dropDownValue' onClick={handleShowDropdown}>{selectedValue} <MdArrowDropDown/></p>
                           {showDropDown && <StyledDropDown>
                                {dropDOwnValue}
                            </StyledDropDown>}
                        </StyledSelect>
                    </StyledShowProjectDiv>
                </SectionHeader>
            <ActionBar sectionName='Add Task' onClick={addTask}/>
            <StyledTaskComponent>
                <StyledTaskList>
                    <StyledTaskHeader>
                        <h6>In Progress</h6>
                        <MdMoreHoriz/>
                    </StyledTaskHeader>
                    <div style={{overflow: 'auto', maxHeight: '70vh'}}>
                        {inprogressTasks}
                    </div>
                    <StyledTaskListFooter>
                        <MdAdd/>
                    </StyledTaskListFooter>
                </StyledTaskList>
                <StyledTaskList>
                    <StyledTaskHeader>
                        <h6>Waiting</h6>
                        <MdMoreHoriz/>
                    </StyledTaskHeader>
                    <div style={{overflow: 'auto', maxHeight: '70vh'}}>
                    {waitingTasks}
                    </div>
                    <StyledTaskListFooter onClick={addTask}>
                        <MdAdd/>
                    </StyledTaskListFooter>
                </StyledTaskList>
                <StyledTaskList>
                    <StyledTaskHeader>
                        <h6>Completed</h6>
                        <MdMoreHoriz/>
                    </StyledTaskHeader>
                    <div style={{overflow: 'auto', maxHeight: '70vh'}}>
                    {completedTasks}
                    </div>
                    <StyledTaskListFooter onClick={addTask}>
                        <MdAdd/>
                    </StyledTaskListFooter>
                </StyledTaskList>
                <StyledTaskList>
                    <StyledTaskHeader>
                        <h6>Not Started</h6>
                        <MdMoreHoriz/>
                    </StyledTaskHeader>
                    <StyledTaskListFooter onClick={addTask}>
                        <MdAdd/>
                    </StyledTaskListFooter>
                </StyledTaskList>
            </StyledTaskComponent>
        </>
    );
};


const StyledTaskComponent = styled.div`
    min-width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
`

const StyledTaskList = styled.div`
     border-radius: 6px;
    border: solid 1px #e2e2ea;
    flex-basis: 24%;
    height: 100%
`

const StyledTaskHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    & h6{

        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0.11px;
        color: #696974;
    }


    @media ${device.laptop}{
       & h6{
        font-size: 1.1vw;
    }
    }
`

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

const StyledShowProjectDiv = styled.div`
    display: flex;
    margin-left: 25px;
    align-items: flex-end;

    & p{
        margin-bottom: 0px;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0.1px;
        color: #92929d;
    }

    @media ${device.laptop}{
        & p{
            font-size: 1.3vw;
        }
    }
`

const StyledSelect = styled.div`
    position: relative;
    & p{
        margin-left: 5px;
        color: #44444f;
        cursor: pointer;
        letter-spacing: 0.1px;
    }
`

const StyledDropDown = styled.div`
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.02);
    text-align: left;
    position: absolute;
    min-width: 200px;
    top: 100%;
    z-index: 2;

    & p{
        margin-left: 0px;
        padding-left: 10px;
        padding-right: 20px;
        font-size: 14px;
        
        &:hover{
            background-color: #eae8e8;
        }
    }


    @media ${device.laptop}{
        & p{
            font-size: 1vw;
        }
    }
`

const StyledTaskListFooter = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    border-top: solid 1px #e2e2ea;
    background-color: #ffffff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 5px;
    font-size: 20px;
    color: #92929d;
`