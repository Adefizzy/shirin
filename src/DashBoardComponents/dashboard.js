import React, {useEffect, useState, useRef} from 'react';
import { Layout, Menu, Breadcrumb, Input, Avatar, Badge, Button, Tag, Table} from 'antd';
import { primaryColor, mutedColor, deepPrimaryColor, device} from './../GlobalAccets';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Logo from  '../images/Logo-real.png';
import dashboard from '../images/dashboard1.svg';
import {ReactComponent as DasboardImage} from '../images/dashboard1.svg';
import { AiOutlineSearch } from "react-icons/ai";
import{FiBell, FiSettings, FiMoreHorizontal} from 'react-icons/fi';
import { IoIosReturnLeft } from 'react-icons/io';
import {MdArrowDropDown, MdExpandMore, MdCheck, MdClose} from 'react-icons/md';
import styled from 'styled-components';
import {DashbaordIcon} from './../images/dashbordIcon';
import Banner from './../images/banner.png';
import { LineChartt } from './element/LineChart';
import totalIncomeIcon from './../images/totalIncomIcon.png';
import totalExpensesIcon from './../images/totalExpensesIcon.png';
import totalRevenueIcon from './../images/totalRevenueIcon.png';
import totalTransactionIcon from './../images/totalTransactionIcon.png'
import {PrimaryButton} from '../GlobalComponents/atoms/primaryButton';
import {PieChart} from './element/PieChart';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const data = [
  {
    key: '1',
    paymentId: '#4564155',
    dateTime: 'Mar 21, 2019, 3:30pm',
    amount: '+ NGN250,000,000',
    status: 'completed',
  },
  {
    key: '2',
    paymentId: 'Process refund to #00910',
    dateTime: 'Mar 21, 2019, 3:30pm',
    amount: '-$16.50',
    status: 'pending',
  },
  {
    key: '3',
    paymentId: 'Payment from #023328',
    dateTime:'Mar 21, 2019, 3:30pm',
    amount: '+ $250.00',
    status: 'declined',
  },
  {
    key: '4',
    paymentId: 'Payment from #023328',
    dateTime:'Mar 21, 2019, 3:30pm',
    amount: '+ $250.00',
    status: 'completed',
  },
  {
    key: '5',
    paymentId: 'Process refund to #00910',
    dateTime: 'Mar 21, 2019, 3:30pm',
    amount: '-$16.50',
    status: 'pending',
  },
];

const columns = [
  {
    title: 'Payment Id',
    dataIndex: 'paymentId',
    key: 'paymentId',
    render: (text,record) => {
        return (<div style={{display: 'flex', justifyContent: 'left'}}>
                    <div  style={{fontSize: '18px' ,color: '#fff',display: 'flex',alignItems: 'center', justifyContent: 'center', width: '2vw', height: '2vw', borderRadius: '100%',  backgroundColor: record.status === 'completed'? '#00aa84': record.status === 'pending'? '#f7b500': '#fc5a5a', marginRight: '15px'}}>
                      { record.status === 'completed'? <MdCheck/>: record.status === 'pending'? <IoIosReturnLeft/>: <MdClose/>}
                    </div>
                    {text}
                </div>
                )
      
    },
  },
  {
    title: 'Date & Time',
    dataIndex: 'dateTime',
    key: 'dateTime',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: tag => {
          let color = tag === 'completed' ? '#00aa84' : tag === 'pending'?  '#f7b500': '#ffd4d4';
          return (
            <div style={{fontSize: '12px',display: 'flex',justifyContent: 'center', alignItems: 'center', borderRadius: '5px' ,padding: '5px 0px', backgroundColor: color, color: tag === 'declined'? '#e02020': tag === 'pending'? '#000': '#fff'}} key={tag}>
              {tag.toUpperCase()}
            </div>
          );
      },
  },
];


const statistics = [
  {
    image: totalIncomeIcon,
    title: 'Total Income',
    amount: 'N553,000,000',
    color: '#f3f0ff'
  },
  {
    image: totalExpensesIcon,
    title: 'Total Expenses',
    amount: 'N34,029,000',
    color: '#fff5d8'
  },
  {
    image: totalTransactionIcon,
    title: 'Total Transaction',
    amount: 'N553,000,000',
    color: '#d0f2ff'
  },
  {
    image: totalRevenueIcon,
    title: 'Total Revenue',
    amount: 'N33,000',
    color: '#d6fff6'
  }
]


export  const SiderDemo =  (props) =>  {
  const [hover, setHover] = useState(false);
  const [avatarWidth, setAvatarWidth] = useState(30);
  const [analyticWidth, setAnalyticWidth] = useState(900)
  const analyticRef = useRef();
  

  /* onCollapse = collapsed => {
    this.setState({ collapsed });
  };
 */
 useEffect(() => {
  window.addEventListener('load', () => {
    setAnalyticWidth(analyticRef.current.getBoundingClientRect().width);
    console.log(analyticRef.current.getBoundingClientRect().width);
    
  })

  return () => window.removeEventListener()
 }, [])

 useEffect(() => {
  window.addEventListener('resize', () => {
    setAnalyticWidth(analyticRef.current.getBoundingClientRect().width);
    console.log(analyticRef.current.getBoundingClientRect().width);
    
  })

  return () => window.removeEventListener()
}, [])

 useEffect(() => {
   window.addEventListener('load', () => {
     if(window.innerWidth * 2.5/100 > 30){
      setAvatarWidth(window.innerWidth * 2.5/100)
     }
     
   })

   return () => window.removeEventListener()
 }, [])
  const handleMouseEnter = () => {
    setHover(true);
  }

  const handleMouseLeave = () => {
    setHover(false);
  }


  const statList = statistics.map((stat, index )=>{
    return <StatComponent color={stat.color} icon={stat.image} title={stat.title} amount={stat.amount} key={index}/>
  } )

    return (
      <Layout style={{ minHeight: '100vh' }}>
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
          <Content style={{ padding: '32px', backgroundColor: '#f7f7f7'}}>
            <StyledSectionName>
              <h2>Dashboard</h2>
              <p>See your data visualization from <span>27 Feb - 3 Apr</span></p>
            </StyledSectionName>
            <StyledContainer>
              <StyledStatDiv>
                {statList}
                <div style={{height: '50px'}}></div>
                <PrimaryButton text='+ Download Reports'/>  
              </StyledStatDiv>
              <StyledBody>
                <img style={{width: '100%'}} src={Banner}/>
                <StyledAnalyticDiv ref={analyticRef}>
                  <StyledAnalyticHeader>
                    <StyledAnalyticNameDiv>
                      <h2>Monthly Financial Transactions</h2>
                      <p>See your financial trends</p>
                    </StyledAnalyticNameDiv>
                    <StyledButton> <StyledColor></StyledColor> Download <MdExpandMore/> </StyledButton>
                  </StyledAnalyticHeader>
                  <LineChartt width={analyticWidth}/>
                </StyledAnalyticDiv>
              </StyledBody>
            </StyledContainer>
            <StyledContainer style={{marginTop: '0px'}}>
              <StyledStatDiv style={{paddingTop: '0px', marginTop: '22px'}}>
              <StyledPieChartDiv>
                  <StyledPieChartName>
                    <h2>Employee Structure</h2>
                    <p>All Times</p>
                  </StyledPieChartName>
                  <PieChart/>
                </StyledPieChartDiv> 
              </StyledStatDiv>
              <StyledBody>
              <StyledTableDiv>
                  <StyledTableName>
                      <h2>Transaction History</h2>
                      <FiMoreHorizontal/>
                  </StyledTableName>
                  <Table
                    columns={columns}
                    pagination={false}
                    dataSource={data}
                  />
                  <StyledAllTransactionDiv>
                    <p>View All transactions</p>
                  </StyledAllTransactionDiv>
                </StyledTableDiv>

              </StyledBody>

            </StyledContainer>
          </Content>
        </Layout>
      </Layout>
    );

}


const StatComponent = (props) => {
  return (
    <StyledSingleStat>
        <StyledSingleStatImageDiv style={{backgroundColor: props.color}}>
          <img style={{width: '50%'}} src={props.icon}/>
        </StyledSingleStatImageDiv>
        <StyledStatFigure>
          <p>{props.title}</p>
          <h1>{props.amount}</h1>
        </StyledStatFigure>
    </StyledSingleStat>
  )
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

const StyledSectionName = styled.div`
  & h2{
    font-size: 26px;
    font-weight: bold;
    line-height: 1.38;
    letter-spacing: 0.4px;
    color: #000000;
    margin-bottom: 0px;
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

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
`

const StyledStatDiv = styled.div`
  min-width: 20%;
  padding-top:61px;
`

const StyledSingleStat = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 16px;
  width: 100%;
`

const StyledBody = styled.div`
  min-width: 80%;
  padding-left: 31px;
`

const StyledAnalyticDiv = styled.div`
  width: 100%;
  min-height: 486px;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(28, 41, 90, 0.04);
  border: solid 1px #eaedf7;
  background-color: #ffffff;
  margin-top: 22px;
  padding: 23px;
`

const StyledAnalyticHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledAnalyticNameDiv = styled.div`
  & h2{
    font-size: 20px;
    font-weight: 600;
    line-height: 1.43;
    letter-spacing: 0.4px;
    color: #000000;
  }

  & p{
  font-size: 15.2px;
  line-height: 1.63;
  letter-spacing: 0.48px;
  color: #636e95;
  }



  @media ${device.laptop} {
    & h2{
      font-size: 1.3vw;
    }
  }

  & p{
    font-size: 1.15
  }
`

const StyledColor = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 3.8px;
  background-color: #a475f6;
`
const StyledButton = styled.div`
  width: 154px;
  height: 40px;
  border-radius: 6px;
  border: solid 1px #d2d5e1;
  background-color: #fafcfe;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const StyledTableDiv = styled(StyledAnalyticDiv)`
  min-height: 480px;
`

const StyledTableName = styled(StyledAnalyticHeader)`
    margin-bottom: 10px;
  & h2{
    font-size: 16px;
    font-weight: 600;
    line-height: 1.43;
    letter-spacing: 0.4px;
    color: #000000;
  }




  @media ${device.laptop} {
    & h2{
      font-size: 1.2vw;
    }
  }
`

const StyledAllTransactionDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;


  & p{
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 0.76px;
    color: #0062ff;
    margin-bottom: 0px;
    cursor: pointer;
  }

  @media ${device.laptop}{
    font-size: 0.9vw;
  }
`

const StyledStatFigure = styled.div`
  & h1{
  font-size: 24px;
  font-weight: bold;
  line-height: 1.17;
  letter-spacing: 0.38px;
  
  color: #000000;
  }

& p{
  font-size: 14px;
  line-height: 1.86;
  letter-spacing: normal;
  color: ${mutedColor};
  margin-bottom: 0px;
}
`

const StyledSingleStatImageDiv = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 11px;
  width: 48px;
  height: 48px;
  margin-right: 12px;
`

const StyledPieChartDiv = styled.div`
  height: 480px;
  min-height: 50vh;
  border-radius: 7.2px;
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.04);
  border: solid 0.8px #e8e6f1;
  background-color: #feffff;
  padding: 20px;
`

const StyledPieChartName = styled(StyledTableName)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;

  & p{
  font-size: 11.2px;
  color: rgba(0, 0, 0, 0.5);
  }

  @media ${device.laptop}{
    & p{
      font-size: 0.8vw;
    }
  }
`
