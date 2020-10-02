import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {BankAccountTableRow} from '../element/BankAccountTableRow';
import {data} from '../atom/bankAccountData';

const tableTitle = ['S/N','Bank Name','Account Number', 'Account Code', 'Current Balnce', 'Date Added', 'Action']

export const BankAccount = (props) => {

    const [currentData, setCurrentData] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [start, setStart] = useState(1);
  

    useEffect(() => {
        let extractedData = data.slice(0, 11);
        setCurrentData(extractedData);
        setPageSize(10);
        setCurrentPage(1);
    }, [])

    const tableRow = currentData?.map((element, index) => {
        return <BankAccountTableRow data={element} key={index}/>
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
             <SectionHeader
                sectionName='Banking'
                sectionMessage='As of'
                sectionDate='27 June 2020'
            />
            <ActionBar sectionName= 'Add Bank'/>
            <Table
                tableRow={tableRow}
                tableTitle={tableTitle}
                data={data}
                handlPaginationChange={handlPaginationChange}
                start={start}
                currentPage={currentPage}
                pageSize={pageSize}
            />
        </>
    );
};