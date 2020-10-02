import React, {useState, useEffect} from 'react';
import {SectionHeader} from '../element/SectionHeader';
import {ActionBar} from '../element/ActionBar';
import {Table} from '../element/Table';
import {PayrollDetailTableRow} from '../element/PayrollDetailTableRow';
import {data} from '../atom/payrollDetailData';
import { BackButton } from '../../GlobalComponents/atoms/backButton';
import styled from 'styled-components';
import { primaryColor, mutedColor, redColor, device, greenColor} from '../../GlobalAccets';
import { Modal } from 'antd';
import confirmIcon from '../../images/confirm.png';


const tableTitle = ['Employee', 'Gross Salary (₦)','Overtime (Hours)','Days worked', 'Deductions (₦)', 'Net pay (₦)', 'Breakdown'];    
const accounts = [
    {
        title: 'Total Tax (₦)',
        value: '2,648,009.56',
        color: '#0076d0'
    },
    {
        title: 'Total net (₦)',
        value: '11,583,827.19',
        color: '#05bf70'
    },
    {
        title: 'Total Pension (₦)',
        value: '927,928.98',
        color: '#b620e0'
    },
    {
        title: 'Total NHF (₦)',
        value: '927,928.98',
        color: '#cf5109'
    },
    {
        title: 'Other Deductions (₦)',
        value: '0.00',
        color: '#8e91a4'
    }
]

export const PayrollDetail = (props) => {
    const [currentData, setCurrentData] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [start, setStart] = useState(1);
    const [ confirmModalVisible, setConfirmModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [modalWidth, setModalWidth] = useState(200);



    useEffect(() => {
        window.addEventListener('load', () => {
            setModalWidth(window.innerWidth * (30/100));
        })
    })
    


    useEffect(() => {
        let extractedData = data.slice(0, 11);
        setCurrentData(extractedData);
        setPageSize(10);
        setCurrentPage(1);
    }, [])

    const tableRow = currentData?.map((element, index) => {
        return <PayrollDetailTableRow data={element} key={index}/>
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


    const accountList = accounts.map((acct, index) => {
        return <Summary account={acct} key={index}/>
    })


    const onGeneratePayroll = () => {
        setConfirmModalVisible(false);
    }

    const onConfirmModalCancel = () => {
        setConfirmModalVisible(false);
    }

    const handleDisplayConfirmPayroll = () => {
        setConfirmModalVisible(true);
    }


    const onDeleteModalCancel = () => {
        setDeleteModalVisible(false);
    }

    const handleDeletePayroll = () => {
        setDeleteModalVisible(true)
    }

    return (
        <>
            <BackButton/>
            <div style={{height: '10px'}}></div>
             <SectionHeader
                sectionName='Tolu Enterprise Payroll Details'
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
            <StyledAccountSummaryDiv>
                {accountList}
            </StyledAccountSummaryDiv>
            <StyledGrandTotal>
                <p>Grand Total (₦)</p>
                <h4>114,874,726.72</h4>
            </StyledGrandTotal>
            <StyledButtonDiv>
                <StyledButton onClick={handleDisplayConfirmPayroll}>
                    confirm Payroll
                </StyledButton>
                <StyledDeleteButton onClick={handleDeletePayroll}>
                    Delete Payroll
                </StyledDeleteButton>
            </StyledButtonDiv>

            <StyledModal
                title="Basic Modal"
                visible={confirmModalVisible}
                onCancel={onConfirmModalCancel}
                footer={null}
                title={null}
                width={modalWidth}
                centered={true}
            >
                <StyledConfirmModalBody>
                    <StyledImage src={confirmIcon}/>
                    <h5>Payroll confirmed!</h5>
                    <p>To continue with the payroll process, click the button below</p>
                    <StyledButton onClick={onGeneratePayroll}>
                        Continue to Generate Payroll
                    </StyledButton>
                </StyledConfirmModalBody>
            </StyledModal>

            <StyledModal
                title="Basic Modal"
                visible={deleteModalVisible}
                onCancel={onDeleteModalCancel}
                footer={null}
                title={null}
                width={modalWidth}
                centered={true}
            >
                <StyledDeleteModalBody>
                 <h5>Delete Payroll</h5>
                 <p>Are you sure you want to delete Tolu Usman’s Payroll?</p>
                 <StyledDeleteModalButtonDiv>
                     <StyledDeleteCancelButton>Cancel</StyledDeleteCancelButton>
                     <StyledConfirmDeleteButton> Delete </StyledConfirmDeleteButton>
                 </StyledDeleteModalButtonDiv>
                </StyledDeleteModalBody>
            </StyledModal>
        </>
    );
};

const Summary = (props) => {
    return(
        <StyledSummary color={props.account.color}>
            <div>
                <p>{props.account.title}</p>
                <h5>{props.account.value}</h5>
            </div>
        </StyledSummary>
    )
}

const StyledAccountSummaryDiv = styled.div`
    min-width: 100%;
    padding: 15px 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0 1px 4px 0 rgba(21, 34, 50, 0.08);
    background-color: #fff;
    margin-top: 27px;
`

const StyledSummary = styled.div`
    border-right: 1px solid #d7dbec;
    flex-basis: 20%;
    display: flex;
    justify-content: center;



  &:last-child{
    border-right: none;
  }

  & p{
        margin-bottom: 0px;
        font-size: 14px;
        line-height: 1.43;
        letter-spacing: normal;
        color: ${props => props.color};
  }

  & h5{
        font-size: 20px;
        font-weight: bold;
        line-height: 1.4;
        letter-spacing: normal;
        color: #131523;
  }

  @media ${device.laptop}{
      & h5{
          font-size: 1.5vw;
      }
  }
`

const StyledGrandTotal = styled(StyledAccountSummaryDiv)`
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    & p{
        margin-bottom: 0px;
        font-size: 20px;
        line-height: 1.6;
        color: rgba(0, 0, 0, 0.5);
    }

    & h4{
      
        font-size: 28px;
        font-weight: 600;
        line-height: 1.4;
        color: #131523;
    }

    @media ${device.laptop}{
        & p{
            font-size: 1.5vw;
        }


        & h4{
            font-size: 2vw;
        }
    }
`

const StyledButtonDiv = styled.div`
    margin-top: 20px;
`

const StyledButton = styled.button`
    font-size: 16px;
    border: none;
    padding: 8px 30px;
    border-radius: 6px;
    letter-spacing: 0.5px;
    background-color: ${greenColor};
    color: #fff;
    &:focus{
        outline: none;
    }

    @media ${device.laptop}{
        font-size: 1.2vw;

    }
`

const StyledDeleteButton = styled.button`
    font-size: 16px;
    border: none;
    padding: 8px 20px;
    border-radius: 6px;
    letter-spacing: 0.5px;
    background-color: #fff;
    border: solid 1px #e02020;
    color: ${redColor};
    margin-left: 20px;

    &:focus{
        outline: none;
    }

    @media ${device.laptop}{
        font-size: 1.2vw;

    }
`

const StyledModal = styled(Modal)`
   
`

const StyledConfirmModalBody = styled.div`
    text-align: center;
    width: 100%;
    margin: 0 auto;


    & h5{
        font-size: 24px;
        font-weight: 600;
        line-height: 1.17;
        color: #131523;
        margin-top: 10px;
    }

    & p{
        font-size: 16px;
        line-height: 1.5;
        color: rgba(0, 0, 0, 0.5);
    }

    @media ${device.laptop}{
        width: 80%;

        & h5{
            font-size: 1.3vw;
        }

        & p{
            font-size: 1.2vw;
        }
    }

    @media ${device.desktop}{
        width: 60%;
    }
`

const StyledImage = styled.img`
    width: 64px;
    height: auto;


    @media ${device.laptop}{
        width: 3vw;
    }
`

const StyledDeleteModalBody = styled.div`
    width: 100%;
    text-align: left;
    & h5{
        font-size: 20px;
        font-weight: 600;
        line-height: 1.4;
        color: #131523;
    }

    & p{
        font-size: 16px;
        line-height: 1.5;
        color: #131523;
    }
`

const StyledDeleteModalButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;
`

const StyledConfirmDeleteButton = styled(StyledDeleteButton)`
    color: #fff;
    background-color: ${redColor};
`

const StyledDeleteCancelButton = styled(StyledDeleteButton)`
    background-color: #fff;
    border: none;
`