import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {WorkDaysTableRow} from '../element/WorkdaysTableRow';
import {data} from '../atom/workdaysData';
import { useHistory} from 'react-router-dom';
import { DeleteModal } from '../element/DeleteModal';

const tableTitle = ['Month', 'Year', 'Work Days','Action']

export const WorkDays = (props) => {

    const [currentData, setCurrentData] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [start, setStart] = useState(1);
    const history = useHistory();
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  

    useEffect(() => {
        let extractedData = data.slice(0, 11);
        setCurrentData(extractedData);
        setPageSize(10);
        setCurrentPage(1);
    }, [])

    const handleDeletePayroll = () => {
        setDeleteModalVisible(true)
    } 

    const onDeleteModalCancel = () => {
        setDeleteModalVisible(false);
    }

    const tableRow = currentData?.map((element, index) => {
        return <WorkDaysTableRow handleDelete={handleDeletePayroll}  data={element} key={index}/>
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

    const addWorkDays = () => {
        history.push(`addWorkDay`)
    }

    return (
        <>
             <SectionHeader
                sectionName='Work Days'
                sectionMessage='As of'
                sectionDate='27 June 2020'
            />
            <ActionBar onClick={addWorkDays} sectionName='Add Work Days'/>
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
        </>
    );
};