import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {TransactionTableRow} from '../element/TransactionTableRow';
import { useHistory, useRouteMatch, Route, Switch} from 'react-router-dom';

const tableTitle = ['Date','Account','Narrative', 'Amount']
const data = [
    {
        date: 'Apr 01, 2018',
        account: 'Salary',
        narrative: 'Received journal posting of 50,000 from Salary',
        amount: '40,000.00'
    }
]

export const Transaction = (props) => {

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
        return <TransactionTableRow data={element} key={index}/>
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
                sectionName='Transactions'
                sectionMessage='As of'
                sectionDate='27 June 2020'
            />
            <ActionBar/>
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
            </Switch>
        </>
    );
};