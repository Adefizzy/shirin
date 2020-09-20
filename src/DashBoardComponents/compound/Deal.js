import React, {useEffect, useState, useRef} from 'react';
import { Layout, Menu, Breadcrumb, Input, Avatar, Badge, Button, Tag, Table,  DatePicker, Space, Pagination } from 'antd';
import { mutedColor,  device, primaryColor} from '../../GlobalAccets';
import {SectionHeader} from '../element/SectionHeader';
import styled from 'styled-components';
import { AiOutlineSearch } from "react-icons/ai";
import moment from 'moment';
import {SecondaryButton, DefaultButton, DefaultButtonWhite, GreenButton} from '../../GlobalComponents/atoms/secondaryButton';
import { FiFilter, FiArrowUpRight, FiTrash2, FiEdit } from 'react-icons/fi';
import {TableRow} from '../atom/TableRow';

const dateFormat = 'MMM Do YY';


const data = [
    {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'initiated',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'on hold',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
    
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'initiated',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'on hold',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'on hold',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
    
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'initiated',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'on hold',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'initiated',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'on hold',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'on hold',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
    
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'initiated',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'on hold',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'initiated',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'on hold',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
    
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'initiated',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'on hold',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'on hold',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
    
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'initiated',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'on hold',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'initiated',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'on hold',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'on hold',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
    
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'initiated',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
        {
        key: '1',
        dealTitle: 'Nairabox Movie Deal',
        clientName: 'NairaBox',
        product: 'Shirin',
        status: 'on hold',
        contactsLeads: '',
        estAmount: '400,000,000',
        activity: '',
        action: ''
        },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'initiated',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },

    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'initiated',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },

    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'initiated',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'initiated',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },

    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'initiated',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'initiated',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },

    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'initiated',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },

    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'initiated',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'initiated',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },

    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'initiated',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'initiated',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },

    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'initiated',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },

    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'initiated',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'initiated',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },

    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'initiated',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'initiated',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },

    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'initiated',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },

    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'initiated',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'initiated',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },

    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'initiated',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
    {
    key: '1',
    dealTitle: 'Nairabox Movie Deal',
    clientName: 'NairaBox',
    product: 'Shirin',
    status: 'on hold',
    contactsLeads: '',
    estAmount: '400,000,000',
    activity: '',
    action: ''
    },
  ];


const columns = [
    {
        title: 'Deal Title',
        dataIndex: 'dealTitle',
        key: 'dealTitle',
    },
    {
      title: 'Client Name',
      dataIndex: 'clientName',
      key: 'clientName',
    },
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: tag => {
            let color = tag === 'initiated' ? '#104137' : '#251e0c';
            let backgroundColor = tag === 'initiated'? 'rgba(9, 164, 132, 0.1)': 'rgba(247, 181, 0, 0.1)';
            let inidicatorColor = tag === 'initiated'? '#09a484': '#f7b500';

            return (
              <div style={{
                    fontSize: '14px',
                    display: 'flex',
                    justifyContent: 'space-around', 
                    alignItems: 'center',
                    borderRadius: '5px',
                    padding: '3px 5px', 
                    backgroundColor: backgroundColor, 
                    color: color,
                    textTransform: 'capitalize',
                    width: '79px',
              }} key={tag}>
                <div style={{borderRadius: '4px',backgroundColor: inidicatorColor, width: '14px', height: '14px'}}>
                </div>
                {tag}
              </div>
            );
        },
    },
    {
        title: 'Contacts/Leads',
        dataIndex: 'contactsLeads',
        key: 'contactsLeads',
        render: id => {
            return (
                <div style={{display: 'flex'}}>
                    <a style={{color: '#0091ff', marginRight: '5px'}}>View</a>
                    |
                    <div style={{backgroundColor: '#e8fcf4',marginLeft: '5px', color: '#05bf70', paddingLeft: '2px',  paddingRight: '3px'}}>
                        + Add
                    </div>
                </div>
            )
        }
    },
    {
        title: 'Est. Amount',
        dataIndex: 'estAmount',
        key: 'estAmount',
    },
    {
        title: 'Activity',
        dataIndex: 'activity',
        key: 'activity',
        render: id => {
            return (
                <div style={{display: 'flex'}}>
                    <a style={{color: '#0091ff', marginRight: '5px'}}>View</a>
                    |
                    <div style={{backgroundColor: '#e8fcf4',marginLeft: '5px', color: '#05bf70', paddingLeft: '2px',  paddingRight: '3px'}}>
                        + Add
                    </div>
                </div>
            )
        }
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: id => {
            return (
                <div style={{border: 'solid 0.6px #d5d5d5',minWidth: '84px', maxWidth: '84px',  borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                     <div style={{ flexBasis: '50%', textAlign: "center", paddingTop: '4px',paddingBottom: '4px'}}>
                        <FiEdit/>
                    </div>
                    <div style={{color: '#ef3826', borderLeft: 'solid 0.6px #d5d5d5', flexBasis: '50%', textAlign: "center", paddingTop: '4px',paddingBottom: '4px'}}>
                        <FiTrash2/>
                    </div>
                </div>
            )
        }
    },
  ];



export const Deal = (props) => {
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

    const tableRow = currentData.map((element, index) => {
        return <TableRow data={element} key={index}/>
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
            sectionName='Deals'
            sectionMessage='See your data visualization from'
            sectionDate='27 Feb - 3 Apr'
            />
            <StyledActionBar>
                <StyledInput prefix={<StyledAiOutlineSearch/>} bordered={false} placeholder='Search here..'/>
                <Space align='center' size='middle'>
                    <Space align='center'>
                        <StyledDatePicker defaultValue={moment('2015-06-06', dateFormat)} />
                        <StyledDatePicker defaultValue={moment('2015-06-06', dateFormat)} />
                    </Space>
                    <SecondaryButton text='Go'/>
                </Space>
                <Space align='center'>
                    <DefaultButton text='Filter' icon={<FiFilter/>}/>
                    <DefaultButtonWhite text='Export' icon={<FiArrowUpRight/>}/>
                </Space>
                <GreenButton  text='Add Deal' icon={<p style={{marginRight: '20px', marginBottom: '0px'}}>+</p>}/>
            </StyledActionBar>
            {/* <StyledTable
                columns={columns}
                pagination={true}
                dataSource={data}
            /> */}

            <Styledtable>
                <thead>
                    <tr>
                        <th>Deal Title</th>
                        <th>Client Name</th>
                        <th>Product</th>
                        <th>Deal Status</th>
                        <th>Contact/Leads</th>
                        <th>Es. Amount</th>
                        <th>Activity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRow}
                    {/* <tr>
                        <td>Nairabox Movie Deal</td>
                        <td>NairaBox</td>
                        <td>Shirin</td>
                        <td>
                            <div style={{
                                    fontSize: '14px',
                                    display: 'flex',
                                    justifyContent: 'space-around', 
                                    alignItems: 'center',
                                    borderRadius: '5px',
                                    padding: '3px 5px', 
                                    backgroundColor: 'rgba(9, 164, 132, 0.1)', 
                                    color: '#104137',
                                    textTransform: 'capitalize',
                                    width: '79px',
                            }}>
                                <div style={{borderRadius: '4px',backgroundColor: '#09a484', width: '14px', height: '14px'}}>
                                </div>
                                 Initiated
                            </div>
                        </td>
                        <td>
                            <div style={{display: 'flex'}}>
                                <a style={{color: '#0091ff', marginRight: '5px'}}>View</a>
                                |
                                <div style={{backgroundColor: '#e8fcf4',marginLeft: '5px', color: '#05bf70', paddingLeft: '2px',  paddingRight: '3px'}}>
                                    + Add
                                </div>
                            </div>
                        </td>
                        <td>400,000,000</td>
                        <td>
                            <div style={{display: 'flex'}}>
                                <a style={{color: '#0091ff', marginRight: '5px'}}>View</a>
                                |
                                <div style={{fontSize: '14px',backgroundColor: '#e8fcf4',marginLeft: '5px', color: '#05bf70', paddingLeft: '2px',  paddingRight: '3px'}}>
                                    + Add
                                </div>
                            </div>
                        </td>
                        <td>
                            <div style={{border: 'solid 0.6px #d5d5d5',minWidth: '84px', maxWidth: '84px',  borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                                <div style={{ flexBasis: '50%', textAlign: "center", paddingTop: '4px',paddingBottom: '4px'}}>
                                    <FiEdit/>
                                </div>
                                <div style={{color: '#ef3826', borderLeft: 'solid 0.6px #d5d5d5', flexBasis: '50%', textAlign: "center", paddingTop: '4px',paddingBottom: '4px'}}>
                                    <FiTrash2/>
                                </div>
                            </div>
                        </td>
                    </tr> */}
                </tbody>
            </Styledtable>
            <StyledFooter>
                <p>{`${start}-${currentPage * pageSize} of ${data.length} items`}</p>
                <Pagination onChange={handlPaginationChange} pageSize={pageSize} current={currentPage} defaultCurrent={1} total={data.length} />
            </StyledFooter>
        </>
    );
};


const StyledContainter = styled.div`
    width: 100%;
`

const StyledActionBar = styled(StyledContainter)`
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

const StyledInput = styled(Input)`
    background-color: #fff;
    border-radius: 4px;
    border: solid 1px #aeb3cd;
    width: 25%;

    &:hover{
        border: solid 1px #b620e0;
        background-color: #fff;
    }

    &.ant-input-affix-wrapper > input.ant-input  {
        color:  #535875;
        font-size: 16px;
        &::placeholder{
            color:  #535875;
            opacity: 0.4;
        }
    }

    @media ${device.laptop}{
        &.ant-input-affix-wrapper > input.ant-input  {
            font-size: 1.2vw;
        }
    }
`

const StyledAiOutlineSearch = styled(AiOutlineSearch)`
    color: #535875;
    opacity: 0.4;
    font-size: 24px;
    @media ${device.laptop}{
        font-size: 1.6vw;
    }
`

const StyleDateDiv = styled.div`
    width: 30%;
`
const StyledDatePicker = styled(DatePicker)`

    &:hover{
        border: solid 1px #b620e0;
    }

    &.ant-picker-focused{
        border: solid 1px #b620e0;
        box-shadow: none;
    }
`

const StyledButton = styled(Button)`
    background-color: #0364ff;
    color: #fff;
`

/* const StyledTable = styled(Table)`
    & tbody{
        & tr{
          margin-top: 12px !important;
          border: 1px solid ${primaryColor} !important;
    
          &:hover{
              border: 1px solid ${primaryColor} !important;
          }
        }

        & .ant-table-row{
            margin-top: 200px !important;
            border: 1px solid ${primaryColor} !important;
        }
    }    
` */
const Styledtable = styled.table`
    min-width: 100%;
    margin-top: 40px;
    border-collapse: separate;
    border-spacing: 0 15px;

    & thead{
        & tr th{
            font-size: 14px;
            text-align: left;
            color: #535875;
            font-weight: normal;
            padding: 21px 0px;
            &:first-child{
                    padding-left: 21px;
            }
        }
    }


    /* & tbody{
        & tr {
            background-color: #fff;
            padding: 22px;
            &:hover{
                border: 1px solid ${primaryColor};
            }
            td{
                font-size: 14px;
                padding: 11px 0px;
                text-align: left;
                &:first-child{
                    padding-left: 21px;
                }
            }
        }
    } */




    @media ${device.laptop}{
        & thead{
            & tr th{
                font-size: 1vw;
            }
        }

    }
`

const StyledFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & p{
        margin-bottom: 0px;
    }
`