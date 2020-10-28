import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {JournalPostingTableRow} from '../element/JournalPostingTableRow';
import {data} from '../atom/journalPostingData';
import { useHistory, useRouteMatch, Route, Switch} from 'react-router-dom';
import { AddBankTransfer } from './AddBankTransfer';

const tableTitle = ['Date','From Account','To Account', 'Amount', 'Description']

export const BankTransfer = (props) => {

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

    const tableRow = currentData?.map((element, index) => {
        return <JournalPostingTableRow data={element} key={index}/>
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

    const onAddBankTransfer = () => {
        history.push(`${url}/addBankTransfer`)
    }


    return (
        <>
               <Switch>
                <Route exact path={path}>
                    <SectionHeader
                        sectionName='Bank Transfer'
                        sectionMessage='As of'
                        sectionDate='27 June 2020'
                    />
                    <ActionBar onClick={onAddBankTransfer} sectionName= 'Add Transfer'/>
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
                <Route path={`${path}/addBankTransfer`}>
                    <AddBankTransfer/>
                </Route>
            </Switch>
        </>
    );
};