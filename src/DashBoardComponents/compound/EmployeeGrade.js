import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {EmployeeGradeTableRow} from '../element/EmployeeGradeTableRow';
import {data} from '../atom/employeeGradeData';
import { useHistory, Route, Switch, useRouteMatch} from 'react-router-dom';
import { DeleteModal } from '../element/DeleteModal';
import { EditGrade } from './EditGrade';

const tableTitle = ['S/N','Name','Code', 'Description', 'Action']

export const EmployeeGrade = (props) => {

    const [currentData, setCurrentData] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [start, setStart] = useState(1);
    const history = useHistory();
    const {url, path} = useRouteMatch();
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

    const editGrade = () => {
        history.push(`${url}/editGrade`)
    }

    const tableRow = currentData?.map((element, index) => {
        return <EmployeeGradeTableRow handleDelete={handleDeletePayroll} onEdit={editGrade} data={element} key={index}/>
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

    const addGrade= () => {
        history.push(`addGrade`)
    }


    return (
        <>
            <Switch>
                <Route exact path={path}>
                <SectionHeader
                    sectionName='Employee Grade'
                    sectionMessage='As of'
                    sectionDate='27 June 2020'
                />
                <ActionBar onClick={addGrade} sectionName='Add Grade'/>
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
                <Route path={`${path}/editGrade`}>
                    <EditGrade/>
                </Route>
            </Switch>
        </>
    );
};