import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {CashSalesTableRow} from '../element/CashSalesTableRow';
import {data} from '../atom/cashSalesData';
import {Switch, Route, useRouteMatch, useHistory} from 'react-router-dom';
import { AddCashSales } from './AddCashSales';
import { ViewCashSales } from './viewCashSales';

const tableTitle = ['S/N','Date','Amount', 'Client', 'Amount Category', 'Payment Method','Reference', 'Action']

export const CashSales = (props) => {

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


    const onViewCashSales = () => {
        history.push(`${url}/viewCashSales`);
    }

    const tableRow = currentData?.map((element, index) => {
        return <CashSalesTableRow onEdit={onViewCashSales} data={element} key={index}/>
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

    const onAddCashSales = () => {
        history.push(`${url}/addCashSales`);
    }

    return (
        <>
            <Switch>
                <Route exact path={path}>
                    <SectionHeader
                        sectionName='Cash Sales'
                        sectionMessage='As of'
                        sectionDate='27 June 2020'
                    />
                    <ActionBar onClick={onAddCashSales} sectionName= 'Add Cash Sales'/>
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
                 <Route path={`${path}/addCashSales`}>
                     <AddCashSales/>
                 </Route>
                 <Route path={`${path}/viewCashSales`}>
                     <ViewCashSales/>
                 </Route>
            </Switch>
        </>
    );
};