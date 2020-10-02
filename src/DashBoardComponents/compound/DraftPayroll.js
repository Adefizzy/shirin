import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {GreenButton} from '../../GlobalComponents/atoms/secondaryButton';
import styled from 'styled-components';
import { primaryColor, mutedColor, deepPrimaryColor, device, greenColor} from '../../GlobalAccets';
import {AccountBar} from '../element/AccountBar';
import {DraftPayrollTableRow} from './../element/draftPayrollTableRow';
import {Table } from '../element/Table';
import {data} from '../atom/draftPayrollData';
import { Select, DatePicker, Checkbox, Pagination} from 'antd';
import emptyTableImg from '../../images/emptyTable.png';
import { ReportGeneratorActionBar } from '../element/ReportGeneratorActionBar';

const { Option } = Select;


const tableTitle = ['Name','Employee', 'Gross Salary (₦)','Overtime (Hours)','Days worked', 'Deductions (₦)', 'Net pay (₦)', 'Breakdown']; 
export const DraftPayroll = (props) => {
    const [isAllTimeSelected, setAllTimeSelect] = useState(false);

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
        return <DraftPayrollTableRow data={element} key={index}/>
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

    const handleAllTimeSelect = (e) => {
        if(e.target.checked){
            setAllTimeSelect(true);
        }else{
            setAllTimeSelect(false);
        }
    }
    return (
        <>
             <SectionHeader
                sectionName='Draft Payroll'
                sectionMessage='As of'
                sectionDate='27 June 2020'
            />
            <ReportGeneratorActionBar
                sectionName='Draft Payroll'
                buttonText='Proceed'
            />
            {/* <Table
                tableRow={tableRow}
                tableTitle={tableTitle}
                data={data}
                handlPaginationChange={handlPaginationChange}
                start={start}
                currentPage={currentPage}
                pageSize={pageSize}
            /> */}
            <EmptyTable/>
        </>
    );
};


const EmptyTable = () => {
    return (
        <>
        <StyledEmptyTableHeader>
        <p>Name</p>
        <p>Employee</p>
         <p>Gross Salary (₦)</p>
         <p>Overtime (Hours)</p>
         <p>Days worked</p> 
         <p>Deductions (₦)</p>
         <p>Net pay (₦)</p>
         <p>Breakdown</p>
        </StyledEmptyTableHeader>
        <StyledEmptyTableDiv>
            <StyledImage src={emptyTableImg}/>
            <h5>No payroll yet</h5>
            <p>All the draft payroll from your company will be visible in this page.<br/> You can generate payroll by yourself</p>
            <StyledButton style={{marginLeft: '0px'}}>Generate</StyledButton>
        </StyledEmptyTableDiv>
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
            <p>Showing 1 to 1 of 1 entries</p>
            <Pagination defaultCurrent={1} total={1} />
        </div>
        </>
    )
}

const StyledEmptyTableDiv = styled.div`
    width: 100%;
    background-color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 49px 0px;
    border-radius: 6px;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.02);


    & h5{
        font-size: 16px;
        font-weight: 600;
        line-height: 1.4;
        text-align: center;
        color: #131523;
    }
`

const StyledImage = styled.img`
    width: 69px;
    height: auto;

    @media ${device.laptop}{
        width: 5vw;
    }
`


const StyledActionBar = styled.div`
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 1px 4px 0 rgba(21, 34, 50, 0.08);
    background-color: #ffffff;
    padding: 25px;

    & h6{
        font-size: 18px;
        line-height: 1.33;
        color: #131523;
        font-weight: bold;
        margin-bottom: 26px;

        & span{
            font-weight: normal;
        }
    }

    @media ${device.laptop}{
        & h6{
            font-weight: 1.3vw;
        }
        
    }
`

const StyledInputsDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
`

const StyledSelect = styled(Select)`
    width: 100% !important;

    &  .ant-select-selector{
        border-radius: 6px !important;
    }
`

const StyledDatePicker = styled(DatePicker)`
    width: 100% !important;

    & .ant-picker{
        border-radius: 6px !important;
    }
`

const StyledCheckbox = styled(Checkbox)`
 margin-left: 60px;
 font-size: 18px;
`

const StyledButton = styled.button`
    font-size: 16px;
    border: none;
    padding: 8px 60px;
    border-radius: 6px;
    letter-spacing: 0.5px;
    background-color: ${greenColor};
    margin-left: 40px;
    color: #fff;
    &:focus{
        outline: none;
    }

    @media ${device.laptop}{
        font-size: 1vw;

    }
`

const StyledInputWithLabel = styled.div`
    flex-basis: 20%;
    & p{
        opacity: 0.9;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.5);
        margin-bottom: 4px;
    }   

    @media ${device.laptop}{
        & p{
            font-size: 0.9vw;
        }
    }
`

const StyledEmptyTableHeader = styled.div`
    background-color: transparent;
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;

    & p{
        opacity: 0.84;
        font-size: 14px;
        color: #535875;
    }
`