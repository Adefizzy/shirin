import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {LocationTableRow} from '../element/locationTableRow';
import {data} from '../atom/locationData';
import { useHistory,  Route, Switch, useRouteMatch} from 'react-router-dom';
import { DeleteModal } from '../element/DeleteModal';
import { EditOfficeLocation } from './EditOfficeLocation';
import { ViewLocation } from './ViewLocation';

const tableTitle = ['S/N', 'Location Name', 'Subsidiary','Parent Company','view', 'Action']

export const Location = (props) => {

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

    const editOfficeLocation = () => {
        history.push(`${url}/editOfficeLocation`)
    }

    const onViewLocation = () => {
        history.push(`${url}/viewOffice`)
    }

    const tableRow = currentData?.map((element, index) => {
        return <LocationTableRow viewLocation={onViewLocation} handleDelete={handleDeletePayroll} onEdit={editOfficeLocation} data={element} key={index}/>
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

    const addOfficeLocation = () => {
        history.push(`addOfficeLocation`)
    }



    return (
        <>
            <Switch>
                <Route exact path={path}>
             <SectionHeader
                sectionName='Office Location'
                sectionMessage='As of'
                sectionDate='27 June 2020'
            />
            <ActionBar onClick={addOfficeLocation} sectionName='Add Office Location'/>
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
            <Route path={`${path}/editOfficeLocation`}>
                <EditOfficeLocation/>
            </Route>
            <Route path={`${path}/viewOffice`}>
                <ViewLocation/>
            </Route>
            </Switch>
        </>
    );
};