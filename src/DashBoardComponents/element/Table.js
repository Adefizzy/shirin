import  React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {data} from '../atom/dealData';
import {TableRow} from '../atom/TableRow';
import { Pagination } from 'antd';
import { mutedColor,  device, primaryColor} from '../../GlobalAccets';

export const Table = (props) => {
    const tableHead = props.tableTitle.map((data, index) => {
        return <th key={index}>{data}</th>
    })
    return (
        <>
            <Styledtable>
                <thead>
                    <tr>
                        {tableHead}
                    </tr>
                </thead>
                <tbody>
                    {props.tableRow}
                </tbody>
            </Styledtable>
            <StyledFooter>
                <p>{`${props.start}-${props.currentPage * props.pageSize} of ${props.data?.length} items`}</p>
                <Pagination onChange={props.handlPaginationChange} pageSize={props.pageSize} current={props.currentPage} defaultCurrent={1} total={props.data?.length} />
            </StyledFooter>
        </>
    );
};




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