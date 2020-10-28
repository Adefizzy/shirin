import React from 'react';
import { Input} from 'antd';
import {SectionHeader} from '../element/SectionHeader';
import styled from 'styled-components';
import { BackButton } from '../../GlobalComponents/atoms/backButton';
import { primaryColor, mutedColor, deepPrimaryColor, device} from '../../GlobalAccets';


const dataList = [
    {title: 'First Name', value: 'Tope'},
    {title: 'Last Name', value: 'Odun'},
    {title: 'Middle Name', value: 'Eshin'},
   {title: 'Age', value: '30'},
   {title: 'Race', value: 'White'},
   {title: 'Gender', value: 'Female'},
   {title: 'RNationality', value: 'Nagari'},
   {title: 'State of Origin', value: 'Lagos'},
   {title: 'Phone Number', value: '08080808087'},
   {title: 'Location/Home Address', value: '21 Adeola Odeku, VI'}
];

export const ViewEmployeeInfo = (props) => {

    const data = dataList.map((item, index) => {
        return <LocationData key={index} title={item.title} value={item.value}/>
    })

    return (
        <>
            <BackButton
                others={` to Employee Information`}
            />
            <SectionHeader
                sectionName='Employee'
            />
            <StyledLeftSide>
                <StyledContainer>
                    <StyledHeader>
                    <h5>Employee Details</h5>
                    <p>Here’s a detailed overview of your location</p>
                    </StyledHeader>
                    <hr/>
                    <StyledSubHeader>
                        <h6>Bio Information</h6>
                        <StyledSubHeaderAction>
                            <p>Employee Cv</p>
                            <p>Update Employee Data</p>
                        </StyledSubHeaderAction>
                    </StyledSubHeader>
                    <StyledBody>
                    {data}
                    </StyledBody>
                </StyledContainer>
                <StyledSubHeader>
                    <h6>Department</h6>
                    <StyledSubHeaderAction>
                        <p>All Department</p>
                    </StyledSubHeaderAction>
                </StyledSubHeader>
                <StyledFooterHeader>
                        <p>Name</p>
                        <div>
                        <p>Remarks</p>
                        <p>Start Date</p>
                        </div>
                    </StyledFooterHeader>
                <StyledOtherContainer>
                    <StyledAccountInfo>
                        <p>Finance and Accounting</p>
                        <p>Mar 31, 2020</p>
                    </StyledAccountInfo>
                </StyledOtherContainer>
            </StyledLeftSide>
    
        </>
    );
};


const LocationData = (props) => {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.value}</p>
        </div>
    );
}






const StyledContainer = styled.div`
    border-radius: 6px;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.02);
    background-color: #ffffff;
    width: 100%;
    padding-bottom: 30px;

    & h5{
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 0.6px;
        color: #000000;
    }

    & p{
        font-size: 12px;
        letter-spacing: 0.3px;
        color: rgba(0, 0, 0, 0.5);
    }
`

const StyledHeader = styled.div`
      padding: 15px 26px;
`

const StyledBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 24px;
    padding-top: 0px;

    & div{
        flex-basis: 50%;
        margin-bottom: 24px;

        & p{
            font-size: 16px;
            line-height: 1.5;
            color: #000000;
            margin-bottom: 0px;


            &:first-child{
                color: rgba(0, 0, 0, 0.5);
            }
        }
    }
`
const StyledSubHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 24px 20px 24px;
    & h6{
        font-weight: bold;
    }
`

const StyledSubHeaderAction = styled.div`
display: flex;
    & p{
        color: #05bf70;
        font-size: 12px;
        cursor: pointer;
        margin-left: 10px;
    }
`

const StyledLeftSide = styled.div`
    max-width: 50%;
    margin-top: 100px;
`


const StyledFooterHeader = styled.div`
 display: flex;
 justify-content: space-between;
 padding: 0px 24px 5px 24px;

 & p{
    opacity: 0.84;
    color: #535875;
    font-size: 14px;
 }

 & div{
     display: flex;
     
     & p{
         margin-right: 30px;
     }
 }
`

const StyledAccountInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 54px 20px 24px;
    height: 100%;
    align-items: center;

    & p{
        margin-bottom: 0px; 
        color: #000; 
        font-size: 14px;
    }
`

const StyledOtherContainer = styled(StyledContainer)`
    padding-bottom: 0px;
`
