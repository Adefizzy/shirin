import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {CompanyTableRow} from '../element/CompanyTableRow';
import {data} from '../atom/companyData';
import { useHistory,  Route, Switch, useRouteMatch} from 'react-router-dom';
import { DeleteModal } from '../element/DeleteModal';
import { EditCompany } from './EditCompany';

const tableTitle = ['Name', 'Domain','Description','Address', 'Action'];    

export const Company = (props) => {

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

    const addCompany = () => {
        history.push(`addCompany`)
    }


    const editCompany = () => {
        history.push(`${url}/editCompany`)
    }
    const handleDeletePayroll = () => {
        setDeleteModalVisible(true)
    } 

    const onDeleteModalCancel = () => {
        setDeleteModalVisible(false);
    }

    const tableRow = currentData?.map((element, index) => {
        return <CompanyTableRow onEdit={editCompany} handleDelete={handleDeletePayroll} data={element} key={index}/>
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
                    sectionName='Company'
                    sectionMessage='As of'
                    sectionDate='27 June 2020'
                />
                <ActionBar onClick={addCompany} sectionName='Add Company'/>
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
                <Route path={`${path}/editCompany`}>
                    <EditCompany/>
                </Route>   
             </Switch>
        </>
    );
};