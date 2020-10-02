import React from 'react';
import styled from 'styled-components';
import {useHistory, Link} from 'react-router-dom';
import { primaryColor, mutedColor, deepPrimaryColor, device} from './../../GlobalAccets';
import { FiChevronLeft } from 'react-icons/fi';

export const BackButton = (props) => {
    const history = useHistory();

    const onBackClick = () => {
        history.goBack()
    }

    return (
        <BackNavigator>
            <StyledFiChevronLeft/>
            <p onClick={onBackClick}>Back {props.others}</p>
        </BackNavigator>
    );
};


const StyledFiChevronLeft = styled(FiChevronLeft)`
    color: ${primaryColor};
    font-size: 1vw;
`


const BackNavigator = styled(Link)`
    display: flex;
    align-items: center;
    & p{
        color: ${mutedColor};
        margin-left: 10px;
        font-size: 1vw;
        margin-bottom: 0px;
    }
`