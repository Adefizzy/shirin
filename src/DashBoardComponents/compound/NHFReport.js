import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {ProductsTableRow} from '../element/ProductsTableRow';
import {data} from '../atom/productsData';
import { ReportGeneratorActionBar } from '../element/ReportGeneratorActionBar';

const tableTitle = ['Product name', 'Product Description', 'Action']

export const NHFReport = (props) => {

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
        return <ProductsTableRow data={element} key={index}/>
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
                sectionName='NHF Report'
                sectionMessage='As of'
                sectionDate='27 June 2020'
            />

            <ReportGeneratorActionBar
                sectionName='NHF Report'
                buttonText='Generate Report'
            />
           
        </>
    );
};