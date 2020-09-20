import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import { Layout, Menu, Breadcrumb, Input, Avatar, Badge, Button, Tag, Table} from 'antd';
import { primaryColor, mutedColor, deepPrimaryColor, device} from '../../GlobalAccets';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import{FiBell, FiSettings, FiMoreHorizontal} from 'react-icons/fi';
import { IoIosReturnLeft } from 'react-icons/io';
import {MdArrowDropDown, MdExpandMore, MdCheck, MdClose} from 'react-icons/md';
import { AiOutlineSearch } from "react-icons/ai";

const { Header } = Layout;

export const MainHeader = (props) => {
    const [avatarWidth, setAvatarWidth] = useState(30);


    useEffect(() => {
        window.addEventListener('load', () => {
          if(window.innerWidth * 2.5/100 > 30){
           setAvatarWidth(window.innerWidth * 2.5/100)
          }
          
        })
     
        return () => window.removeEventListener('load', () => {
          if(window.innerWidth * 2.5/100 > 30){
            setAvatarWidth(window.innerWidth * 2.5/100)
           }
        })
      }, [])


    return (
        <StyledHeader className="site-layout-background">
            <StyledAlertDiv>
              <FiSettings style={{fontSize: avatarWidth / 1.5, color: mutedColor }}/>
            </StyledAlertDiv>
            <StyledAlertDiv>
            <Badge style={{backgroundColor: '#44d7b6'}} count={5} offset={[5, -7]}>
              <FiBell style={{fontSize: avatarWidth / 1.5, color: mutedColor }}/>
            </Badge>
            </StyledAlertDiv>
            <StyledUserSummary>
              <Avatar size={avatarWidth} icon={<UserOutlined/>} />
              <div>
                <h6>Stephen Austin</h6>
                <p>Chief manager</p>
              </div>
              <MdArrowDropDown/>
            </StyledUserSummary>
          </StyledHeader>
    );
};

const StyledInput = styled(Input)`
   background-color: #263059;
   border-radius: 4px;

   &.ant-input-affix-wrapper > input.ant-input  {
    color:  #fff;

    &::placeholder{
      color:  #fff;
      opacity: 0.4;
    }
   }
  
`

const StyledAiOutlineSearch = styled(AiOutlineSearch)`
  color: #fff;
  opacity: 0.4;
`

const StyledMenuItem = styled(Menu.Item)`
  display: flex;
  place-items: center;
  background-color: ${props => props.clicked? '#263059 !important' :'#081341'};
  border-left: ${props => props.clicked? '2px solid #a475f6;': 'none'};
  
 &:hover{
    &.ant-menu-item{
      background-color: #263059;
      border-left: 2px solid #a475f6;
  }
 }
 &.ant-menu-item{
  padding-left: 16px !important;
 }
  &.ant-menu-item span{
    font-size: 16px;
   
  }

  @media ${device.laptop}{
    &.ant-menu-item span{
      font-size: 1vw;
    }     
  }
`

const StyledMenuIcon = styled.img`
 width: 24px;
 margin-right: 4px;
 @media ${device.laptop}{
        width: 1.5vw;
    }
`

const StyledHeader = styled(Header)`
  padding: 0;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  padding-left: 10px;
`

const StyledUserSummary = styled.div`
  display: flex;
  place-items: center;
  padding-left: 18px;
  padding-right: 33px;
  border-left: 1px solid #e7e8f2;

  & div{
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    margin-right: 20px;

    & h6{
      font-size: 14px;
    }

    & p{
      margin-bottom: 0px;
      line-height: normal;
      color: ${mutedColor};
      font-size: 12px;
    }
  }

  @media ${device.laptop}{
    & div{
    
    & h6{
      font-size: 0.9vw;
      line-height: normal;
      margin-bottom: 0px;
    }

    &p{
      font-size: 0.7vw;
    }

  }
  }
`

const StyledAlertDiv = styled.div`
  padding-right: 24px;
  padding-left: 24px;
  border-left: 1px solid #e7e8f2;
`