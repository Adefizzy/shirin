import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {EmployeeDepartmentTableRow} from '../element/EmployeeDepartmentTableRow';
import {data} from '../atom/employeeDeptData';
import { useHistory, Route, Switch, useRouteMatch} from 'react-router-dom';
import { DeleteModal } from '../element/DeleteModal';
import { EditDepartment } from './EditDept';


const tableTitle = ['Code', 'Department', 'Head of Department','Parent Company','Subsidiary','Action']

export const EmployeeDepartment = (props) => {

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

    const onEditDept = () => {
        history.push(`${url}/editDept`)
    }

    const tableRow = currentData?.map((element, index) => {
        return <EmployeeDepartmentTableRow handleDelete={handleDeletePayroll} onEdit={onEditDept} data={element} key={index}/>
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

    const addDept = () => {
        history.push(`addDepartment`)
    }

    return (
        <>
            <Switch>
                <Route exact path={path}>
                    <SectionHeader
                        sectionName='Employee Department'
                        sectionMessage='As of'
                        sectionDate='27 June 2020'
                    />
                    <ActionBar onClick={addDept} sectionName='Add Department'/>
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
                <Route path={`${path}/editDept`}>
                    <EditDepartment/>
                </Route>
            </Switch>
        </>
    );
};