import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {EmployeeRemunerationTableRow} from '../element/EmployeeRemunerationTableRow';
import {data} from '../atom/employeeRemunerationData';
import { useHistory,  Route, Switch, useRouteMatch} from 'react-router-dom';
import { EditGross } from './EditGross';

const tableTitle = ['Employee','Subsidiary','Gross Salary', 'Breakdown','Edit Gross Fee']

export const EmployeeRemuneration = (props) => {

    const [currentData, setCurrentData] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [start, setStart] = useState(1);
    const {path, url} = useRouteMatch();

    const history = useHistory();

    useEffect(() => {
        let extractedData = data.slice(0, 11);
        setCurrentData(extractedData);
        setPageSize(10);
        setCurrentPage(1);
    }, [])

    const handleEdit = () => {
        history.push(`${url}/editGross`)
    }

    const tableRow = currentData?.map((element, index) => {
        return <EmployeeRemunerationTableRow onEdit={handleEdit} data={element} key={index}/>
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
                sectionName='Employee Remuneration'
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
            <Route path={`${path}/editGross`}>
                <EditGross/>
            </Route>
            </Switch>
        </>
    );
};