import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {EmployeeBonusTableRow} from '../element/EmployeeBonusTableRow';
import {data} from '../atom/employeeBonusData';
import { useHistory,  Route, Switch, useRouteMatch} from 'react-router-dom';
import { AddEmployeeBonus } from './AddEmployeeBonus';
import { DeleteModal } from '../element/DeleteModal';
import { Checkbox } from 'antd';
import styled from 'styled-components';
import { primaryColor, mutedColor, deepPrimaryColor, device, greenColor} from '../../GlobalAccets';


const properties = [
{name: 'Employee Name', isActive: false},
{name: 'Age' , isActive: false},
{name: 'DOB',  isActive: false}, 
{name: 'Department', isActive: false},
{name: 'Gross Salary', isActive: false}, 
{name: 'Phone', isActive: false}, 
{name: 'Designation', isActive: false},
 {name: 'Gender', isActive: false},
 {name: 'Marital Status', isActive: false},
 {name: 'Grade', isActive: false},
{name:'Official Email Address', isActive: false},
 {name: 'Home Address', isActive: false},
 {name: 'Guarantor', isActive: false},
{name: "Guarantor's Phone Number", isActive: false},
 {name: 'Next of kin', isActive: false},
 {name: 'Next of kin phone number', isActive: false},
{name: "Next Of Kin's Relationship", isActive: false},

]

export const EmployeeData = (props) => {
    const [propertiesState, setPropertyState] = useState(properties);
  

    function onSelectAll(e) {
    
        let newObj = [...propertiesState].map(item => {
            item.isActive = e.target.checked;
            return item;
        })

        setPropertyState(newObj);
      }

      const onSelect = (name) => {
          let newObj = [...propertiesState].map(item => {
              if(item.name === name){
                  item.isActive = !item.isActive;
                  return item;
              }

              item.isActive = false;
              return item;
          })

          setPropertyState(newObj);
      }


      const propertiesList = properties.map((property, index) => {
       
        return      <div>
                        <StyledChecked checked={property.isActive} key={index} onChange={() => onSelect(property.name)}>{property.name}</StyledChecked>
                    </div>
          
      })



    return (
        <>
             
            <SectionHeader
                sectionName='Employee Data'
                sectionMessage='As of'
                sectionDate='27 June 2020'
            />
            <TopBar>
                <StyledChecked  onChange={onSelectAll}>Select All</StyledChecked>
            </TopBar>
            <StyledContainter>
                {propertiesList}
            </StyledContainter>
            <TopBar style={{marginTop: '10px'}}>
                <StyledButton>Generate Report</StyledButton>
            </TopBar>
        </>
    );
};


const TopBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const StyledContainter = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    

    & div{
        flex-basis: 33.3%;
        margin-top: 20px;
        font-size: 24px;
    }
`

const StyledChecked = styled(Checkbox)`
     font-size: 16px;

     @media ${device.laptop}{
        font-size: 1.2vw;
    }
`


const StyledButton = styled.button`
    font-size: 16px;
    border: none;
    padding: 8px 60px;
    border-radius: 6px;
    letter-spacing: 0.5px;
    background-color: ${greenColor};
    margin-left: 40px;
    color: #fff;
    &:focus{
        outline: none;
    }

    @media ${device.laptop}{
        font-size: 1vw;

    }
`
