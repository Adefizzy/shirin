import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { primaryColor, mutedColor, redColor, device, greenColor} from '../../GlobalAccets';
import { Modal } from 'antd';



export const DeleteModal = (props) => {
    const [modalWidth, setModalWidth] = useState(500);



    useEffect(() => {
        window.addEventListener('load', () => {
            setModalWidth(window.innerWidth * (30/100));
        })
    }, [])

    return (
        <StyledModal
        title="Basic Modal"
        visible={props.deleteModalVisible}
        onCancel={props.onDeleteModalCancel}
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
    );
};



const StyledModal = styled(Modal)`
   
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
