import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {VendorTableRow} from '../element/VendorTableRow';
import {Switch, Route, useRouteMatch, useHistory} from 'react-router-dom';
import { AddVendor } from './AddVendor';
import { EditVendor } from './EditVendor';


const tableTitle = ['S/N','Name','Email', 'Phone','TIN', 'Address', 'State', 'Country','Action']

const data = [{
    sn: '1',
    name: 'Akeem Ajayi',
    email: 'akeem@techadvance.ng',
    phone: '0909999334989',
    tin: '298728988',
    address: '21c Adewale Way Ikeja Lagostg',
    state: 'Adamawa',
    country: 'Nigeria',
    action: ''
}]

export const Vendor = (props) => {

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


    const onEditVendor = () => {
        history.push(`${url}/editVendor`)
    }

    const tableRow = currentData?.map((element, index) => {
        return <VendorTableRow onEdit={onEditVendor} data={element} key={index}/>
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

    const onAddVendor = () => {
        history.push(`${url}/addVendor`);
    }


    return (
        <>
            <Switch>
                <Route exact path={path}>
             <SectionHeader
                sectionName='Vendor'
                sectionMessage='As of'
                sectionDate='27 June 2020'
            />
            <ActionBar onClick={onAddVendor} sectionName= 'Add New Vendor'/>
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
            <Route path={`${path}/addVendor`}>
                <AddVendor/>
            </Route>
            <Route path={`${path}/editVendor`}>
                <EditVendor/>
            </Route>
            </Switch>
        </>
    );
};