import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {SubsidiaryTableRow} from '../element/SubsidiaryTableRow';
import {data} from '../atom/subsidiaryData';
import { useHistory, useRouteMatch, Route, Switch} from 'react-router-dom';
import { EditSubidiary } from './EditSubsidiary';
import { DeleteModal } from '../element/DeleteModal';

const tableTitle = ['Subsidiary', 'Description', 'Address','Website','Logo','Date Added', 'Action']

export const Subsidiary = (props) => {

    const [currentData, setCurrentData] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [start, setStart] = useState(1);
    const history = useHistory();
    const {path, url} = useRouteMatch();
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);


    const handleDeletePayroll = () => {
        setDeleteModalVisible(true)
    } 

    const onDeleteModalCancel = () => {
        setDeleteModalVisible(false);
    }

    const hanleEdit = () => {
        history.push(`${url}/editSubsidiary`)
    }

    useEffect(() => {
        let extractedData = data.slice(0, 11);
        setCurrentData(extractedData);
        setPageSize(10);
        setCurrentPage(1);
    }, [])

    const tableRow = currentData?.map((element, index) => {
        return <SubsidiaryTableRow onEdit={hanleEdit} handleDelete={handleDeletePayroll} data={element} key={index}/>
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

    const addSubsidiary = () => {
        history.push(`addSubsidiary`)
    }



    return (
        <>
            <Switch>
                <Route exact path={path}>
                    <SectionHeader
                        sectionName='Subsidiaries'
                        sectionMessage='As of'
                        sectionDate='27 June 2020'
                    />
                    <ActionBar onClick={addSubsidiary} sectionName='Add Subsidiary'/>
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
                <Route path={`${path}/editSubsidiary`}>
                    <EditSubidiary/>
                </Route>
            </Switch>
        </>
    );
};