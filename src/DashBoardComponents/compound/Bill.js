import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import { BillTableRow } from '../element/BillTableRow';
import {Switch, Route, useRouteMatch, useHistory} from 'react-router-dom';
import { AddBill } from './AddBill';


const tableTitle = ['S/N','Vendor','Issued', 'Amount', 'Due', 'Balance','Status','Action']
const data = [
    
]

export const Bill = (props) => {

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
        return <BillTableRow data={element} key={index}/>
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


    const onAddBill = () => {
        history.push(`${url}/addBill`)
    }


    return (
        <>
             <Switch>
                <Route exact path={path}>
                    <SectionHeader
                        sectionName='Bill'
                        sectionMessage='As of'
                        sectionDate='27 June 2020'
                    />
                    <ActionBar onClick={onAddBill} sectionName= 'Add New Bill'/>
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
                <Route path={`${path}/addBill`}>
                    <AddBill/>
                </Route>
            </Switch>
        </>
    );
};