import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {TaxRateTableRow} from '../element/TaxRateTableRow';

import { useHistory,  Route, Switch, useRouteMatch} from 'react-router-dom';
import { DeleteModal } from '../element/DeleteModal';
import { EditTaxRate } from './EditTaxRate';
import { AddTaxRate } from './AddTaxRate';

const tableTitle = ['Name', 'Rate', 'Action'];    

const data = [{
    name: 'Akeem Ajayi',
    rate: '20',
    action: ''
}]

export const TaxRate = (props) => {

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




    const onEditTaxRate = () => {
        history.push(`${url}/editTaxRate`)
    }
    const handleDeletePayroll = () => {
        setDeleteModalVisible(true)
    } 

    const onDeleteModalCancel = () => {
        setDeleteModalVisible(false);
    }

    const tableRow = currentData?.map((element, index) => {
        return <TaxRateTableRow onEdit={onEditTaxRate} handleDelete={handleDeletePayroll} data={element} key={index}/>
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

   const onAddTaxRate = () => {
       history.push(`${url}/addTaxRate`)
   }

    return (
        <>
            <Switch>
                <Route exact path={path}>
                <SectionHeader
                    sectionName='Tax Rate'
                    sectionMessage='As of'
                    sectionDate='27 June 2020'
                />
                <ActionBar onClick={onAddTaxRate} sectionName='Add Tax Rate'/>
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
                <Route path={`${path}/addTaxRate`}>
                    <AddTaxRate/>
                </Route>
                <Route path={`${path}/editTaxRate`}>
                    <EditTaxRate/>
                </Route>   
             </Switch>
        </>
    );
};