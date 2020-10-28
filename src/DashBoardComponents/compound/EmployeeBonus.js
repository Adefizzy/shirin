import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {EmployeeBonusTableRow} from '../element/EmployeeBonusTableRow';
import {data} from '../atom/employeeBonusData';
import { useHistory,  Route, Switch, useRouteMatch} from 'react-router-dom';
import { AddEmployeeBonus } from './AddEmployeeBonus';
import { DeleteModal } from '../element/DeleteModal';

const tableTitle = ['Employee Name','Amount','Description', 'Month','Year', 'Action']

export const EmployeeBonus = (props) => {

    const [currentData, setCurrentData] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [start, setStart] = useState(1);
    const {path, url} = useRouteMatch();
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);

    const history = useHistory();
  

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

    const tableRow = currentData?.map((element, index) => {
        return <EmployeeBonusTableRow handleDelete={handleDeletePayroll} data={element} key={index}/>
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

    const onAddBonus = () => {
        history.push(`${path}/addbonus`)
    }


    return (
        <>
             <Switch>
                <Route exact path={path}>
                    <SectionHeader
                        sectionName='Employee Bonus'
                        sectionMessage='As of'
                        sectionDate='27 June 2020'
                    />
                    <ActionBar onClick={onAddBonus} sectionName='Add Employee Bonus'/>
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
                <Route path={`${path}/addbonus`}>
                    <AddEmployeeBonus/>
                </Route>
            </Switch>
        </>
    );
};