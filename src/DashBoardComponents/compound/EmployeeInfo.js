import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {EmployeeInfoTableRow} from '../element/employeeInfoTableRow';
import {data} from '../atom/employeeInfoData';
import { DeleteModal } from '../element/DeleteModal';
import { useHistory, useRouteMatch, Route, Switch} from 'react-router-dom';
import { AddEmployeeInfo } from './AddEmployeeInfo';
import { ViewEmployeeInfo } from './ViewEmployeeInfo';

const tableTitle = ['Employee ID','Full Name','Designation', 'Subsidiary','Joining Date','Action', 'Invite Staff']

export const EmployeeInfo = (props) => {

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

    const onViewEmployeeInfo = () => {
        history.push(`${path}/viewEmployeeInfo`)
    }

    const tableRow = currentData?.map((element, index) => {
        return <EmployeeInfoTableRow view={onViewEmployeeInfo} data={element} key={index}/>
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


    const onAddEmployeeInfo = () => {
        history.push(`${path}/addEmployeeInfo`);
    }

    return (
        <>
             <Switch>
                <Route exact path={path}>
                <SectionHeader
                    sectionName='Employee Information'
                    sectionMessage='As of'
                    sectionDate='27 June 2020'
                />
                <ActionBar onClick={onAddEmployeeInfo} sectionName='Add New Employee'/>
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
                <Route path={`${path}/addEmployeeInfo`}>
                    <AddEmployeeInfo/>
                </Route>
                <Route path={`${path}/viewEmployeeInfo`}>
                    <ViewEmployeeInfo/>
                </Route>
            </Switch>
        </>
    );
};