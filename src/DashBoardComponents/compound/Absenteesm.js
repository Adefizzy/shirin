import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {AbsentTableRow} from '../element/AbsentTableRow';
import { DeleteModal } from '../element/DeleteModal';
import { useHistory,  Route, Switch, useRouteMatch} from 'react-router-dom';
import { AddAbsent } from './AddAbsentiseem';
import { EditAbsent } from './EditAbsent';


const tableTitle = ['Employee Name','Days Absent','Month', 'Year','Date','Actions'];
const data = [{
    name: 'Tope Odun',
    daysAbsent: 3,
    month: 'May',
    year:'2016',
    date: 'Aug 21, 2019',
    actions: ''
}]

export const Absenteesm = (props) => {

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

    const onEditAbsent = () => {
        history.push(`${url}/editAbsent`);
    }

    const tableRow = currentData?.map((element, index) => {
        return <AbsentTableRow onEdit={onEditAbsent} handleDelete={handleDeletePayroll} data={element} key={index}/>
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

    const onAddAbsent = () => {
        history.push(`${url}/addAbsent`);
    }

    return (
        <>
             <Switch>
                <Route exact path={path}>
                    <SectionHeader
                        sectionName='Employee Absence'
                        sectionMessage='As of'
                        sectionDate='27 June 2020'
                    />
                    <ActionBar onClick={onAddAbsent} sectionName = 'Add Employee Absence'/>
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
            <Route path={`${path}/editAbsent`}>
                <EditAbsent/>
            </Route>
            <Route path={`${path}/addAbsent`}>
                <AddAbsent/>
            </Route>
          </Switch>
        </>
    );
};