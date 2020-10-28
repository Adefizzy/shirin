import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {BankAccountTableRow} from '../element/BankAccountTableRow';
import {data} from '../atom/bankAccountData';
import { useHistory, useRouteMatch, Route, Switch} from 'react-router-dom';
import { AddBank } from './AddBank';
import { EditBank } from './EditBank';

const tableTitle = ['S/N','Bank Name','Account Number', 'Account Code', 'Current Balnce', 'Date Added', 'Action']

export const BankAccount = (props) => {

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

    const onEditBank = () => {
        history.push(`${url}/editBank`);
    }

    const tableRow = currentData?.map((element, index) => {
        return <BankAccountTableRow onEdit={onEditBank} data={element} key={index}/>
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


    const onAddBank = () => {
        history.push(`${url}/addBank`)
    }


    return (
        <>
             <Switch>
                <Route exact path={path}>
                    <SectionHeader
                        sectionName='Banking'
                        sectionMessage='As of'
                        sectionDate='27 June 2020'
                    />
                    <ActionBar onClick={onAddBank} sectionName= 'Add Bank'/>
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
                <Route path={`${path}/addBank`}>
                    <AddBank/>
                </Route>
                <Route path={`${path}/editBank`}>
                    <EditBank/>
                </Route>
            </Switch>
        </>
    );
};