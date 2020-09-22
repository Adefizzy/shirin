import React from 'react';
import styled from 'styled-components';
import { primaryColor, mutedColor, deepPrimaryColor, device} from '../../GlobalAccets';


export const SectionHeader = (props) => {
    return (
        <StyledSectionName>
          <div style={{display: 'flex', alignItems: 'flex-end'}}>
            <h2>{props.sectionName} <span>{props.companyName}</span></h2>
            {props.children}
          </div>
            <p>{props.sectionMessage} <span>{props.sectionDate}</span></p>
        </StyledSectionName>
    );
};



const StyledSectionName = styled.div`
  & h2{
    font-size: 26px;
    font-weight: bold;
    line-height: 1.38;
    letter-spacing: 0.4px;
    color: #000000;
    margin-bottom: 0px;
    & span{
      color: ${primaryColor};
    }
  }

  & p{
    font-size: 16px;
    letter-spacing: 0.4px;
    color: ${mutedColor};
    & span{
      font-weight: bold;
      color: #b620e0;
    }
  }

  @media ${device.laptop} {
    & h2{
      font-size: 1.8vw;
    }

    & p{
      font-size: 1.2vw
    }
  }
`