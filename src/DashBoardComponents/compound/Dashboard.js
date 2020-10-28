import React, {useEffect, useState, useRef} from 'react';
import { Layout, Menu, Breadcrumb, Input, Avatar, Badge, Button, Tag, Table} from 'antd';
import { mutedColor,  device} from '../../GlobalAccets';
import { AiOutlineSearch } from "react-icons/ai";
import{FiMoreHorizontal} from 'react-icons/fi';
import { IoIosReturnLeft } from 'react-icons/io';
import {MdArrowDropDown, MdExpandMore, MdCheck, MdClose} from 'react-icons/md';
import styled from 'styled-components';

import Banner from '../../images/banner.png';
import { LineChartt } from '../element/LineChart';
import totalIncomeIcon from '../../images/totalIncomIcon.png';
import totalExpensesIcon from '../../images/totalExpensesIcon.png';
import totalRevenueIcon from '../../images/totalRevenueIcon.png';
import totalTransactionIcon from '../../images/totalTransactionIcon.png'
import {PrimaryButton} from '../../GlobalComponents/atoms/primaryButton';
import {PieChart} from '../element/PieChart';
import {SectionHeader} from '../element/SectionHeader';
const { Header, Content, Footer, Sider } = Layout;



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


export const Dashboard = (props) => {
    const [hover, setHover] = useState(false);
    const [avatarWidth, setAvatarWidth] = useState(30);
    const [analyticWidth, setAnalyticWidth] = useState(900)
    const analyticRef = useRef();





    useEffect(() => {
      if(Object.entries(analyticRef).length !== 0){
        window.addEventListener('load', () => {
          setAnalyticWidth(analyticRef?.current?.getBoundingClientRect()?.width);
        })
      
        return () => window.addEventListener('load', () => {
          setAnalyticWidth(analyticRef?.current?.getBoundingClientRect()?.width);
        })
      }
       }, [])
      
       useEffect(() => {
         console.log(analyticRef.current);
         if(analyticRef.current !== null){
          window.addEventListener('resize', () => {
            setAnalyticWidth(analyticRef?.current?.getBoundingClientRect()?.width);       
          })
        
          return () => window.addEventListener('resize', () => {
            setAnalyticWidth(analyticRef?.current?.getBoundingClientRect()?.width);       
          })
         }
      }, [analyticRef])
      
       useEffect(() => {
         window.addEventListener('load', () => {
           if(window.innerWidth * 2.5/100 > 30){
            setAvatarWidth(window.innerWidth * 2.5/100)
           }
           
         })
      
         return () => window.addEventListener('load', () => {
          if(window.innerWidth * 2.5/100 > 30){
           setAvatarWidth(window.innerWidth * 2.5/100)
          }
          
        })
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
        <>
        <SectionHeader
              sectionName='Dashboard'
              sectionMessage='See your data visualization from'
              sectionDate='27 Feb - 3 Apr'
            />
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
            </>
    );
};



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