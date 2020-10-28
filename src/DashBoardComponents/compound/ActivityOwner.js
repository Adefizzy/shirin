import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {ActivityOwnerTableRow} from '../element/ActivityOwnerTableRow';
import {data} from '../atom/activityOwnerData';
import { useHistory, Route, Switch, useRouteMatch} from 'react-router-dom';
import { EditActivityOwner } from './EditUser';
import { DeleteModal } from '../element/DeleteModal';

const tableTitle = ['Name', 'Domain','Description','Address', 'Action'];    

export const ActivityOwner = (props) => {

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

    const addUser= () => {
        history.push(`addActivityOwner`)
    }

    const editUser = () => {
        history.push(`${path}/editUser`)
    }

    const handleDeletePayroll = () => {
        setDeleteModalVisible(true)
    } 

    const onDeleteModalCancel = () => {
        setDeleteModalVisible(false);
    }

    const tableRow = currentData?.map((element, index) => {
        return <ActivityOwnerTableRow handleDelete={handleDeletePayroll} onEdit={editUser} data={element} key={index}/>
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
                    sectionName='Activity Owner'
                    sectionMessage='As of'
                    sectionDate='27 June 2020'
                />
                <ActionBar onClick={addUser} sectionName='Add Activity Owner'/>
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
                <Route path={`${path}/editUser`}>
                    <EditActivityOwner/>
                </Route>
            </Switch>
        </>
    );
};