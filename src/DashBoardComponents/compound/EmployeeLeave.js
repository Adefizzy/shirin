import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {EmployeeLeaveTableRow} from '../element/EmployeeLeaveTableRow';
import {data} from '../atom/employeeLeaveData';
import { DeleteModal } from '../element/DeleteModal';
import { useHistory, useRouteMatch, Route, Switch} from 'react-router-dom';
import { AddLeaveRequest } from './AddLeaveResquest';
import { EditLeaveRequest } from './EditLeaveRequest';

const tableTitle = ['Employee','Leave Type','Start Date', 'End Date','No. of Days','Description','Status', 'Action']

export const EmployeeLeave = (props) => {

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

    const handleDeletePayroll = () => {
        setDeleteModalVisible(true)
    } 

    const onDeleteModalCancel = () => {
        setDeleteModalVisible(false);
    }

   const onEditLeaveRequest= () => {
        history.push(`${path}/editLeaveRequest`);
   }

    const tableRow = currentData?.map((element, index) => {
        return <EmployeeLeaveTableRow onEdit={onEditLeaveRequest}  handleDelete={handleDeletePayroll} data={element} key={index}/>
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

    const addLeaveRequest = () => {
        history.push(`${path}/addLeaveRequest`);
    }


    return (
        <>
            <Switch>
                <Route exact path={path}>
                    <SectionHeader
                        sectionName='Employee Leave'
                        sectionMessage='As of'
                        sectionDate='27 June 2020'
                    />
                    <ActionBar onClick={addLeaveRequest} sectionName='Add Leave Request'/>
                    <Table
                        tableRow={tableRow}
                        tableTitle={tableTitle}
                        data={data}
                        handlPaginationChange={handlPaginationChange}
                        start={start}
                        currentPage={currentPage}
                        pageSize={pageSize}
                    />
                    <DeleteModal
                        deleteModalVisible={deleteModalVisible}
                        onDeleteModalCancel={onDeleteModalCancel}
                    />
                </Route>
                <Route path={`${path}/addLeaveRequest`}>
                    <AddLeaveRequest/>
                </Route>
                <Route path={`${path}/editLeaveRequest`}>
                    <EditLeaveRequest/>
                </Route>
            </Switch>
        </>
    );
};