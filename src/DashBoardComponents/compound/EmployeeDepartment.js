import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {EmployeeDepartmentTableRow} from '../element/EmployeeDepartmentTableRow';
import {data} from '../atom/employeeDeptData';
import { useHistory} from 'react-router-dom';

const tableTitle = ['Code', 'Department', 'Head of Department','Parent Company','Subsidiary','Action']

export const EmployeeDepartment = (props) => {

    const [currentData, setCurrentData] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [start, setStart] = useState(1);
    const history = useHistory();
  

    useEffect(() => {
        let extractedData = data.slice(0, 11);
        setCurrentData(extractedData);
        setPageSize(10);
        setCurrentPage(1);
    }, [])

    const tableRow = currentData?.map((element, index) => {
        return <EmployeeDepartmentTableRow data={element} key={index}/>
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

    const addDept = () => {
        history.push(`addDepartment`)
    }

    return (
        <>
             <SectionHeader
                sectionName='Employee Department'
                sectionMessage='As of'
                sectionDate='27 June 2020'
            />
            <ActionBar onClick={addDept} sectionName='Add Department'/>
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