import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {LeaveTypeTableRow} from '../element/LeaveTypeTableRow';
import {data} from '../atom/leaveTypeData';
import { useHistory,  Route, Switch, useRouteMatch} from 'react-router-dom';
import { DeleteModal } from '../element/DeleteModal';
import {EditLeaveType} from './EditLeaveType';

const tableTitle = ['Leave Title','No. of Leave Days','Grade Level', 'Action']

export const LeaveType = (props) => {

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

    const onEditLeaveType = () => {
        history.push(`${path}/editLeaveType`)
    }

    const tableRow = currentData?.map((element, index) => {
        return <LeaveTypeTableRow handleDelete={handleDeletePayroll} onEdit={onEditLeaveType} data={element} key={index}/>
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

    const addLeaveType = () => {
        history.push(`addLeaveType`)
    }

    return (
        <>
            <Switch>
                <Route exact path={path}>
                    <SectionHeader
                        sectionName='Leave Type'
                        sectionMessage='As of'
                        sectionDate='27 June 2020'
                    />
                    <ActionBar onClick={addLeaveType} sectionName='Add Leave Type'/>
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
                <Route path={`${path}/editLeaveType`}>
                    <EditLeaveType/>
                </Route>
            </Switch>
        </>
    );
};