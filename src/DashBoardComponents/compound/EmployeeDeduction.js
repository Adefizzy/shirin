import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {EmployeeDeductionTableRow} from '../element/EmployeeDeductionTableRow';
import { DeleteModal } from '../element/DeleteModal';
import { useHistory,  Route, Switch, useRouteMatch} from 'react-router-dom';
import { AddDeduction } from './AddDeduction';


const tableTitle = ['Name','Deduction Type','Description', 'Amount','Month', 'Year', 'Action']
const data = [{
    name: 'Tope Odun',
    deductionType: 'Loan',
    description: 'this is the description of the loan.',
    amount: '₦3,000.00',
    month: 'March',
    year: '2017'
}]

export const EmployeeDeduction = (props) => {

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
        return <EmployeeDeductionTableRow handleDelete={handleDeletePayroll} data={element} key={index}/>
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


    const onDeduction = () => {
        history.push(`${path}/addDeduction`)
    }
    return (
        <>
            <Switch>
            <Route exact path={path}>
             <SectionHeader
                sectionName='Employee Deduction'
                sectionMessage='As of'
                sectionDate='27 June 2020'
            />
            <ActionBar onClick={onDeduction} sectionName='Add Employee Deduction'/>
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
            <Route path={`${path}/addDeduction`}>
                <AddDeduction/>
            </Route>
         </Switch>
        </>
    );
};