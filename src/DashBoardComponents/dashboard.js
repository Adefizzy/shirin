import React, {useEffect, useState, useRef} from 'react';
import { Layout, Menu, Breadcrumb, Input, Avatar, Badge, Button, Tag, Table} from 'antd';
import { primaryColor, mutedColor, deepPrimaryColor, device} from './../GlobalAccets';
import {
  FileOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import Logo from  '../images/Logo-real.png';
import { AiOutlineSearch } from "react-icons/ai";
import styled from 'styled-components';
import {DashbaordIcon} from './../images/dashbordIcon';
import {Dashboard} from './compound/Dashboard';
import {MainHeader} from './element/MainHeader';
import{Deal} from './compound/Deal';
import {Products} from './compound/Products';
import { Contacts } from './compound/Contacts';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


export  const SiderDemo =  (props) =>  {
  const [hover, setHover] = useState(false);

  

  /* onCollapse = collapsed => {
    this.setState({ collapsed });
  };
 */

 

  const handleMouseEnter = () => {
    setHover(true);
  }

  const handleMouseLeave = () => {
    setHover(false);
  }



    return (
      <Layout style={{ minHeight: '100vh', minWidth: '1024px' }}>
        <Sider /* collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} */>
            <div style={{backgroundColor: '#081341', paddingTop: '44px', paddingLeft: '22px'}} className='logo'>
                <img src={Logo} style={{width: '50%'}}/>
            </div>
            <div style={{ backgroundColor: '#081341',paddingBottom: '30px', paddingTop: '31px', paddingLeft: '19px', paddingRight: '19px'}}>
            <StyledInput prefix={<StyledAiOutlineSearch/>} bordered={false} placeholder='Search'/>
            </div>
           
          <Menu style={{backgroundColor: '#081341'}}  theme="dark" mode="inline">
            <StyledMenuItem clicked={true} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="1" icon={<DashbaordIcon hover={hover}/>}>
              Option 1
            </StyledMenuItem>
            <Menu.Item key="2" icon={<DashbaordIcon hover={true}/>}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<svg><dashboard style={{fill: 'red'}}/></svg>} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <MainHeader/>
          <Content style={{ padding: '32px', backgroundColor: '#f7f7f7'}}>
            <Contacts/>
          </Content>
        </Layout>
      </Layout>
    );

}



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



























