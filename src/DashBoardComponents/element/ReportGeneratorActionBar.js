import React, {useState} from 'react';
import styled from 'styled-components';
import { device, greenColor} from '../../GlobalAccets';
import { Select, DatePicker, Checkbox} from 'antd';


const { Option } = Select;


export const ReportGeneratorActionBar = (props) => {
    const [isAllTimeSelected, setAllTimeSelect] = useState(false);


    const handleAllTimeSelect = (e) => {
        if(e.target.checked){
            setAllTimeSelect(true);
        }else{
            setAllTimeSelect(false);
        }
    }
    return (
        <StyledActionBar>
            <h6>Get started <span>- Generate {props.sectionName}</span></h6>
            <StyledInputsDiv>
            <StyledInputWithLabel>
                <p>Select Subsidiary</p>
                <StyledSelect size='large' defaultValue="lucy" style={{ width: 120 }}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                </StyledSelect>
            </StyledInputWithLabel>
            <StyledCheckbox onChange={handleAllTimeSelect}>All time</StyledCheckbox>
            <StyledInputWithLabel>
                <p>Select Year/Month</p>
                <StyledDatePicker disabled={isAllTimeSelected} picker="month" />
            </StyledInputWithLabel>
            <StyledButton>{props.buttonText}</StyledButton>
            </StyledInputsDiv>
        </StyledActionBar>
    );
};


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