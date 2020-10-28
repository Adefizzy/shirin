import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {EmployeeInfoTableRow} from '../element/employeeInfoTableRow';
import { useHistory, useRouteMatch, Route, Switch} from 'react-router-dom';
import { ViewEmployeeInfo } from './ViewEmployeeInfo';

const data = [
    {
        employeeId: '7990500',
        fullName: '	Tope Odun',
        designation: 'Executive',
        subsidiary: 'Tolu Ent',
        joiningDate: 'Mar 31, 2020'
    }
]

const tableTitle = ['Employee ID','Full Name','Designation', 'Subsidiary','Joining Date','Action']

export const ExitedEmployee = (props) => {

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

    const onViewEmployeeInfo = () => {
        history.push(`${path}/viewEmployeeInfo`)
    }

    const tableRow = currentData?.map((element, index) => {
        return <EmployeeInfoTableRow view={onViewEmployeeInfo}  showView={true} data={element} key={index}/>
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
                sectionName='Exited Employee'
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
            <Route path={`${path}/viewEmployeeInfo`}>
                    <ViewEmployeeInfo/>
            </Route>
        </Switch>
        </>
    );
};