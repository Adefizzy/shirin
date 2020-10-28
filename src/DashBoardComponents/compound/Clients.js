import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {ClientTableRow} from '../element/ClientTableRow';
import {data} from '../atom/clientsData';
import {Switch, Route, useRouteMatch, useHistory} from 'react-router-dom';
import { AddClient } from './AddClient';
import { EditClient } from './EditClient';

const tableTitle = ['S/N','Client Name','Phone', 'Address', 'State', 'Country','Description','Date Added','Action']

export const Clients = (props) => {

    const [currentData, setCurrentData] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [start, setStart] = useState(1);
    const history = useHistory();
    const {path, url} = useRouteMatch();
  

    useEffect(() => {
        let extractedData = data.slice(0, 11);
        setCurrentData(extractedData);
        setPageSize(10);
        setCurrentPage(1);
    }, [])

    const onEditClient = () => {
        history.push(`${url}/editClient`)
    }
    const tableRow = currentData?.map((element, index) => {
        return <ClientTableRow onEdit={onEditClient} data={element} key={index}/>
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

    const onAddClient = () => {
        history.push(`${url}/addClient`)
    }


    return (
        <>
            <Switch>
                <Route exact path={path}>
                    <SectionHeader
                        sectionName='Clients'
                        sectionMessage='As of'
                        sectionDate='27 June 2020'
                    />
                    <ActionBar onClick={onAddClient} sectionName= 'Add Clients'/>
                    <Table
                        tableRow={tableRow}
                        tableTitle={tableTitle}
                        data={data}
                        handlPaginationChange={handlPaginationChange}
                        start={start}
                        currentPage={currentPage}
                        pageSize={pageSize}
                    />
                </Route>
                <Route path={`${path}/addClient`}>
                    <AddClient/>
                </Route>
                <Route path={`${path}/editClient`}>
                    <EditClient/>
                </Route>
            </Switch>
        </>
    );
};