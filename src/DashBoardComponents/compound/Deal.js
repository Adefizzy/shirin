import React, {useEffect, useState, useRef} from 'react';
import { Layout, Menu, Breadcrumb, Input, Avatar, Badge, Button, Tag, DatePicker, Space, Pagination } from 'antd';
import { mutedColor,  device, primaryColor} from '../../GlobalAccets';
import {SectionHeader} from '../element/SectionHeader';
import styled from 'styled-components';
import { AiOutlineSearch } from "react-icons/ai";
import moment from 'moment';
import {SecondaryButton, DefaultButton, DefaultButtonWhite, GreenButton} from '../../GlobalComponents/atoms/secondaryButton';
import { FiFilter, FiArrowUpRight, FiTrash2, FiEdit } from 'react-icons/fi';
import {TableRow} from '../atom/TableRow';
import {Table } from '../element/Table';
import {data} from '../atom/dealData';
import { ActionBar } from '../element/ActionBar';
import {DealTableRow} from '../element/DealTableRow';
import { useHistory, Route, Switch, useRouteMatch} from 'react-router-dom';
import { AddActivityOwner } from './AddUser';
import { AddNewActivity } from './AddNewActivity';
import {AddNewLead } from './AddNewLead';
import { Activities } from './activities';
import { DeleteModal } from '../element/DeleteModal';
import { EditDeal } from './EditDeal';
const dateFormat = 'MMM Do YY';

const tableTitle = ['Deal Title', 'Client Name', 'Product', 'Deal Status', 'Contact/Leads', 'Es. Amount', 'Activity', 'Action'];

export const Deal = (props) => {
    const [currentData, setCurrentData] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [start, setStart] = useState(1);
    const history = useHistory();
    const {path, url} = useRouteMatch();
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
   
  

    useEffect(() => {
        let extractedData = data.slice(0, 11);
        setCurrentData(extractedData);
        setPageSize(10);
        setCurrentPage(1);
    }, [])

    const onAddNewActivity = () => {
        history.push(`${url}/addNewActivity`);
    }

    const onAddNewLead = () => {
        history.push(`${url}/addNewLead`);
    }

    const onGotoActivities = () => {
        history.push(`${url}/activities`);
    }

    const onViewContacts = () => {
        history.push('contacts')
    }


    const addDeal = () => {
        history.push(`addDeal`)
    }

    const editDeal = () => {
        history.push(`${path}/editDeal`)
    }

    const onDeleteModalCancel = () => {
        setDeleteModalVisible(false);
    }

    const handleDeletePayroll = () => {
        setDeleteModalVisible(true)
    }   


    const tableRow = currentData?.map((element, index) => {
        return <DealTableRow  
            addNewLead={onAddNewLead} 
            gotoActivities={onGotoActivities}
            addNewActivity={onAddNewActivity} 
            data={element} 
            key={index}
            onEdit={editDeal}
            viewContacts={onViewContacts}
            deleteEntry = {handleDeletePayroll}
        />
    })

    const handlPaginationChange = (page, pageSize) => { 
        let end = (page * pageSize) + 1;
        let start = ((page - 1) * pageSize ) + 1;
        let extractedData = data.slice(start, end);
        setCurrentData(extractedData);
        setPageSize(pageSize);
        setCurrentPage(page);
        setStart(start);
    }


    return (
        <>
             <Switch>
                 <Route exact path={path}>
                    <SectionHeader
                        sectionName='Deals'
                        sectionMessage='See your data visualization from'
                        sectionDate='27 Feb - 3 Apr'
                    />
                    <ActionBar sectionName='Add Deal' onClick={addDeal}/>
                    <Table
                        tableRow={tableRow}
                        tableTitle={tableTitle}
                        data={data}
                        handlPaginationChange={handlPaginationChange}
                        start={start}
                        currentPage={currentPage}
                        pageSize={pageSize}
                    />
                </Route>
                <Route path={`${path}/addNewActivity`}>
                    <AddNewActivity/>
                </Route>
                <Route path={`${path}/addNewLead`}>
                    <AddNewLead/>
                </Route>
                <Route path={`${path}/activities`}>
                    <Activities/>
                </Route>
                <Route path={`${path}/editDeal`}>
                    <EditDeal/>
                </Route>
            </Switch>
            <DeleteModal
                  deleteModalVisible={deleteModalVisible}
                  onDeleteModalCancel={onDeleteModalCancel}
            />
        </>
    );
};


const StyledContainter = styled.div`
    width: 100%;
`

const StyledActionBar = styled(StyledContainter)`
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

const StyledInput = styled(Input)`
    background-color: #fff;
    border-radius: 4px;
    border: solid 1px #aeb3cd;
    width: 25%;

    &:hover{
        border: solid 1px #b620e0;
        background-color: #fff;
    }

    &.ant-input-affix-wrapper > input.ant-input  {
        color:  #535875;
        font-size: 16px;
        &::placeholder{
            color:  #535875;
            opacity: 0.4;
        }
    }

    @media ${device.laptop}{
        &.ant-input-affix-wrapper > input.ant-input  {
            font-size: 1.2vw;
        }
    }
`

const StyledAiOutlineSearch = styled(AiOutlineSearch)`
    color: #535875;
    opacity: 0.4;
    font-size: 24px;
    @media ${device.laptop}{
        font-size: 1.6vw;
    }
`

const StyleDateDiv = styled.div`
    width: 30%;
`
const StyledDatePicker = styled(DatePicker)`

    &:hover{
        border: solid 1px #b620e0;
    }

    &.ant-picker-focused{
        border: solid 1px #b620e0;
        box-shadow: none;
    }
`

const StyledButton = styled(Button)`
    background-color: #0364ff;
    color: #fff;
`
const Styledtable = styled.table`
    min-width: 100%;
    margin-top: 40px;
    border-collapse: separate;
    border-spacing: 0 15px;

    & thead{
        & tr th{
            font-size: 14px;
            text-align: left;
            color: #535875;
            font-weight: normal;
            padding: 21px 0px;
            &:first-child{
                    padding-left: 21px;
            }
        }
    }

    @media ${device.laptop}{
        & thead{
            & tr th{
                font-size: 1vw;
            }
        }

    }
`

const StyledFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & p{
        margin-bottom: 0px;
    }
`