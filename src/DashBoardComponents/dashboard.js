import React, {useEffect, useState} from 'react';
import { Layout, Menu, Input} from 'antd';
import { mutedColor, device} from './../GlobalAccets';
import Logo from  '../images/Logo-real.png';
import { AiOutlineSearch } from "react-icons/ai";
import styled from 'styled-components';
import {DashbaordIcon} from './../images/dashbordIcon';
import {
  DealsIcon,
  TasksIcon,
  ProductIcon,
  ContactIcon, 
  CompanyIcon, 
  ActivityOwnerIcon,
  ParameterIcon,
  EmployeeIcon,
  CompensationIcon,
  PayrollIcon,
  ReportIcon,
  SettingIcon,
  AccountIcon,
  BankIcon,
  ExpenseTrackerIcon,
  IncomeTrackerIcon
} from './../images/sidebar/dynamicIcons';
import {Dashboard} from './compound/Dashboard';
import {MainHeader} from './element/MainHeader';
import{Deal} from './compound/Deal';
import {Products} from './compound/Products';
import { Contacts } from './compound/Contacts';
import { Company } from './compound/Company';
import { ActivityOwner } from './compound/ActivityOwner';
import { ChartAccount } from './compound/ChartAccount';
import { TrialBalance } from './compound/TrialBalance';
import { ProfitAndLost } from './compound/ProfitAndLost';
import { BalanceSheet } from './compound/BalanceSheet';
import { Task } from './compound/Task';
import { PayrollDetail } from './compound/PayrollDetail';
import { Route, Switch, useRouteMatch, Link} from 'react-router-dom';
import {DraftPayroll} from './compound/DraftPayroll';
import { AddCash } from './compound/AddCash';
import { AddGrade } from './compound/AddGrade';
import { EmployeeGrade } from './compound/EmployeeGrade';
import { EmployeeDepartment } from './compound/EmployeeDepartment';
import { WorkDays } from './compound/WorkDays';
import { LeaveType } from './compound/LeaveType';
import { Location } from './compound/OfficeLocation';
import { Subsidiary } from './compound/Subsidiary';
import { EmployeeLeave } from './compound/EmployeeLeave';
import { EmployeeInfo } from './compound/EmployeeInfo';
import {ExitedEmployee} from './compound/ExitedEmployee';
import { Absenteesm } from './compound/Absenteesm';
import { EmployeeRemuneration } from './compound/EmployeeRemuneration';
import { EmployeeBonus } from './compound/EmployeeBonus';
import { EmployeeDeduction } from './compound/EmployeeDeduction';
import { GeneratePayroll } from './compound/GeneratePayroll';
import { PayrollArchive } from './compound/PayrollArchive';
import { JournalPosting } from './compound/JournalPosting';
import { Transaction } from './compound/Transaction';
import { BankTransfer } from './compound/BankTransfer';
import { BankAccount } from './compound/BankAccount';
import { CashSales } from './compound/CashSales';
import { CreditSales } from './compound/CreditSales';
import {Clients} from './compound/Clients';
import { Bill } from './compound/Bill';
import { Vendor } from './compound/Vendor';
import { PaySlip } from './compound/PaySlip';
import { TaxReport } from './compound/TaxReport';
import { SinglePensionReport } from './compound/SinglePensionReport';
import { EmployeePensionReport } from './compound/EmployeePenstion';
import {NHFReport } from './compound/NHFReport';
import { AddDeal } from './compound/AddDeal';
import { AddTask } from './compound/AddTask';
import { AddProduct } from './compound/AddProduct';
import { AddContact } from './compound/AddContact';
import { AddCompany } from './compound/AddCompany';
import { AddActivityOwner } from './compound/AddUser';
import { AddDepartment } from './compound/AddDept';
import { AddWorkDay } from './compound/AddWorkDay';
import { AddLeaveType } from './compound/AddLeaveType';
import { AddOfficeLocation } from './compound/AddOfficeLocation';
import { AddSubsidiary } from './compound/AddSubsidiary';
import { EmployeeData } from './compound/EmployeeData';
import { StatutoryDeduction } from './compound/StatutoryDeduction';
import { PayrollBreakDown } from './compound/PayrollBreakDown';
import { TaxRate } from './compound/TaxRate';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;


export  const SiderDemo =  () =>  {
  const [hover, setHover] = useState(1);
  const [selectedNav, setSelectedNav] = useState(1);
  const [sideBarWith, setSideBarWidth] = useState(230);
  const [selectedSubMenu, setSelectedSubMenu] = useState('');
  let { path } = useRouteMatch();


  

  /* onCollapse = collapsed => {
    this.setState({ collapsed });
  };
 */


 useEffect(() => {
   window.addEventListener('load', () => {
     setSideBarWidth(window.innerWidth * 17/100)
   })

   return () =>  window.addEventListener('load', () => {
      setSideBarWidth(window.innerWidth * 17/100)
    })
 }, [])

 useEffect(() => {
  window.addEventListener('resize', () => {
    setSideBarWidth(window.innerWidth * 18/100)
  })

  return () =>  window.addEventListener('resize', () => {
    setSideBarWidth(window.innerWidth * 18/100)
  })
}, [])
 

  const handleMouseEnter = (e) => {
    setHover(e.key);
  }

  const handleMouseLeave = () => {
    setHover(false);
  }

  const handleClick = (e) => {
    setSelectedSubMenu('');
    setSelectedNav(e.key);
  }

  const onSelectSubMenu = (key) => {
    setSelectedSubMenu(key);
  }



    return (
      <Layout style={{ Height: '100vh', minWidth: '1024px' }}>
        <Sider style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        backgroundColor: '#081341',
        left: 0,
      }} width={sideBarWith} /* collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} */>
  
            <div style={{backgroundColor: '#081341', paddingTop: '44px', paddingLeft: '22px'}} className='logo'>
                <img src={Logo} style={{width: '50%'}}/>
            </div>
            <div style={{ backgroundColor: '#081341',paddingBottom: '30px', paddingTop: '31px', paddingLeft: '19px', paddingRight: '19px'}}>
            <StyledInput prefix={<StyledAiOutlineSearch/>} bordered={false} placeholder='Search'/>
            </div>
           
          <Menu  onClick={handleClick} style={{backgroundColor: '#081341'}}  theme="dark" mode="inline">
            <StyledMenuItem clicked={selectedNav == 1} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="1" icon={<DashbaordIcon click={selectedNav == 1} hover={hover == 1}/>}>
              <StyledLink to='/dashboard'>Dashboard</StyledLink>
            </StyledMenuItem>
            <hr style={{borderTop: '2px solid #28315A', marginRight: `${sideBarWith * 20/100}px`}}/>
            <StyledModuleTitle>CRM</StyledModuleTitle>
            <StyledMenuItem clicked={selectedNav == 2} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="2" icon={<DealsIcon click={selectedNav == 2} hover={hover==2}/>}>
              <StyledLink to={`${path}/deals`}>Deals</StyledLink>
            </StyledMenuItem>
            <StyledMenuItem clicked={selectedNav == 3} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="3" icon={<TasksIcon click={selectedNav == 3}  hover={hover == 3}/>}>
            <StyledLink to={`${path}/task`}>Tasks</StyledLink>
            </StyledMenuItem>
            <StyledMenuItem clicked={selectedNav == 4} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="4" icon={<ProductIcon click={selectedNav == 4}  hover={hover == 4}/>}>
            <StyledLink to={`${path}/products`}>Products</StyledLink>
            </StyledMenuItem>
            <StyledMenuItem clicked={selectedNav == 5} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="5" icon={<ContactIcon click={selectedNav == 5} hover={hover == 5}/>}>
            <StyledLink to={`${path}/contacts`}>Contact</StyledLink>
            </StyledMenuItem>
            <StyledMenuItem clicked={selectedNav == 6} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="6" icon={<CompanyIcon click={selectedNav == 6}  hover={hover == 6}/>}>
            <StyledLink to={`${path}/company`}>Company</StyledLink>
            </StyledMenuItem>
            <StyledMenuItem clicked={selectedNav == 7} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="7" icon={<ActivityOwnerIcon click={selectedNav == 7} hover={hover == 7}/>}>
            <StyledLink to={`${path}/activityOwner`}>Activity Owner</StyledLink>
            </StyledMenuItem>
            <hr style={{borderTop: '2px solid #28315A', marginRight: `${sideBarWith * 20/100}px`}}/>
            <StyledModuleTitle>HUMAN RESOURCES</StyledModuleTitle>
            <StyledSubMenu onMouseDown={() => onSelectSubMenu("sub1")}  key="sub1" clicked={selectedNav == "sub1"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} icon={<ParameterIcon click={selectedSubMenu == "sub1"} hover={hover == "sub1" }/>}  title="Parameter Settings">
              <StyledSubMenuItem clicked={selectedNav == "8"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="8"><StyledLink to={`${path}/employeegrade`}>Employee Grade</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "9"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="9"><StyledLink to={`${path}/employeedepartment`}>Employee Department</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "10"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="10"><StyledLink to={`${path}/workdays`}>Work Days</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "11"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="11"><StyledLink to={`${path}/leavetype`}>Leave Type</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "12"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="12"><StyledLink to={`${path}/officelocation`}>Location</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "13"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="13"><StyledLink to={`${path}/subsidiary`}>Organization Subsidiary</StyledLink></StyledSubMenuItem>
            </StyledSubMenu>
            <StyledSubMenu onMouseDown = {() => onSelectSubMenu("sub2")}   key="sub2" clicked={selectedNav == "sub2"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} icon={<EmployeeIcon click={selectedSubMenu == "sub2"} hover={hover == "sub2" }/>}  title="Employee">
              <StyledSubMenuItem clicked={selectedNav == "14"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="14"><StyledLink to={`${path}/employeeleave`}>Leave Management</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "15"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="15"><StyledLink to={`${path}/employeInfo`}>Employee Information</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "16"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="16"><StyledLink to={`${path}/exitedemployee`}>Exited Employee</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "17"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="17"><StyledLink to={`${path}/absenteesm`}>Absenteesm</StyledLink></StyledSubMenuItem>
            </StyledSubMenu>
            <StyledSubMenu onMouseDown = {() => onSelectSubMenu("sub3")}   key="sub3" clicked={selectedNav == "sub3"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} icon={<CompensationIcon click={selectedSubMenu == "sub3"} hover={hover == "sub3" }/>}  title="Compensation/Benefit">
              <StyledSubMenuItem clicked={selectedNav == "18"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="18"><StyledLink to={`${path}/employeeremuneration`}>Employee Remuneration</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "19"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="19"><StyledLink to={`${path}/employeeBonus`}>Employee Bonus</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "20"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="20"><StyledLink to={`${path}/employeeDeduction`}>Employee Deduction</StyledLink></StyledSubMenuItem>
            </StyledSubMenu>
            <StyledSubMenu onMouseDown = {() => onSelectSubMenu("sub4")}   key="sub4" clicked={selectedNav == "sub4"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} icon={<PayrollIcon click={selectedSubMenu == "sub4"} hover={hover == "sub4" }/>}  title="Payroll">
              <StyledSubMenuItem clicked={selectedNav == "21"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="21"><StyledLink to={`${path}/draftPayroll`}>Draft Payroll</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "22"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="22"><StyledLink to={`${path}/generateRoll`}>Generate Payroll</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "23"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="23"><StyledLink to={`${path}/payrollArchive`}>Payroll Archive</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "24"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="24"><StyledLink to={`${path}/payslip`}>Payslip</StyledLink></StyledSubMenuItem>
            </StyledSubMenu>
            <StyledSubMenu onMouseDown = {() => onSelectSubMenu("sub5")}   key="sub5" clicked={selectedNav == "sub5"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} icon={<ReportIcon click={selectedSubMenu == "sub5"} hover={hover == "sub5" }/>}  title="Reports">
              <StyledSubMenuItem clicked={selectedNav == "25"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="25"><StyledLink to={`${path}/employeeData`}>Employee Data</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "26"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="26"><StyledLink to={`${path}/taxReport`}>Tax Report</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "27"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="27"><StyledLink to={`${path}/pensionReport`}>Single Employee Pension Report</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "28"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="28"><StyledLink to={`${path}/employeePensionReport`}>Employee Pension Report</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "29"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="29"><StyledLink to={`${path}/nhfReport`}>NHF Report</StyledLink></StyledSubMenuItem>
            </StyledSubMenu>
            <StyledSubMenu onMouseDown = {() => onSelectSubMenu("sub6")}  key="sub6" clicked={selectedNav == "sub6"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} icon={<SettingIcon click={selectedSubMenu == "sub6"} hover={hover == "sub6" }/>}  title="Settings">
              <StyledSubMenuItem clicked={selectedNav == "30"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="30"><StyledLink to={`${path}/statutoryDeduction`}>Statutory Deductions</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "31"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="31"><StyledLink to={`${path}/payrollBreakDown`}>Payroll Breakdown</StyledLink></StyledSubMenuItem>
            </StyledSubMenu>
            <hr style={{borderTop: '2px solid #28315A', marginRight: `${sideBarWith * 20/100}px`}}/>
            <StyledModuleTitle>FINANCE</StyledModuleTitle>
            <StyledSubMenu onMouseDown = {() => onSelectSubMenu("sub7")}   key="sub7" clicked={selectedNav == "sub7"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} icon={<AccountIcon click={selectedSubMenu == "sub7"} hover={hover == "sub7" }/>}  title="Account">
              <StyledSubMenuItem clicked={selectedNav == "32"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="32"><StyledLink to={`${path}/chartAccount`}>Chart of Accounts</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "33"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="33"><StyledLink to={`${path}/journalPosting`}>Journal Postings</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "34"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="34"><StyledLink to={`${path}/transaction`}>Transactions</StyledLink></StyledSubMenuItem>
            </StyledSubMenu>
            <StyledSubMenu  onMouseDown = {() => onSelectSubMenu("sub8")}  key="sub8" clicked={selectedNav == "sub8"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} icon={<BankIcon click={selectedSubMenu == "sub8"} hover={hover == "sub8" }/>}  title="Banking">
              <StyledSubMenuItem clicked={selectedNav == "35"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="35"><StyledLink to={`${path}/bankAccount`}>Bank Accounts</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "36"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="36"><StyledLink to={`${path}/bankTransfer`}>Bank Transfer</StyledLink></StyledSubMenuItem>
            </StyledSubMenu>
            <StyledSubMenu onMouseDown = {() => onSelectSubMenu("sub9")}  key="sub9" clicked={selectedNav == "sub9"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} icon={<IncomeTrackerIcon click={selectedSubMenu == "sub9"} hover={hover == "sub9" }/>}  title="Income Tracker">
              <StyledSubMenuItem clicked={selectedNav == "37"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="37"><StyledLink to={`${path}/creditSales`}>Credit Sales</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "38"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="38"><StyledLink to={`${path}/cashSales`}>Cash Sales </StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "39"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="39"><StyledLink to={`${path}/clients`}>Client</StyledLink></StyledSubMenuItem>
            </StyledSubMenu>
            <StyledSubMenu onMouseDown = {() => onSelectSubMenu("sub10")}  key="sub10" clicked={selectedNav == "sub10"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} icon={<ExpenseTrackerIcon click={selectedSubMenu == "sub10"} hover={hover == "sub10" }/>}  title="Expense Tracker">
              <StyledSubMenuItem clicked={selectedNav == "40"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="40"><StyledLink to={`${path}/bill`}>Bill</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "41"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="41"><StyledLink to={`${path}/vendor`}>Vendor</StyledLink></StyledSubMenuItem>
            </StyledSubMenu>
            <StyledSubMenu onMouseDown = {() => onSelectSubMenu("sub11")}  key="sub11" clicked={selectedNav == "sub11"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} icon={<ReportIcon click={selectedSubMenu == "sub11"} hover={hover == "sub11" }/>}  title="Reports">
              <StyledSubMenuItem clicked={selectedNav == "42"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="42"><StyledLink to={`${path}/trialBalance`}>Trial Balance</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "43"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="43"><StyledLink to={`${path}/profitandlost`}>Profit &amp; Loss</StyledLink></StyledSubMenuItem>
              <StyledSubMenuItem clicked={selectedNav == "44"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="44"><StyledLink  to={`${path}/balancesheet`}>Balance Sheet</StyledLink></StyledSubMenuItem>
            </StyledSubMenu>
            <StyledSubMenu onMouseDown = {() => onSelectSubMenu("sub12")}  key="sub12" clicked={selectedNav == "sub12"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} icon={<SettingIcon click={selectedSubMenu == "sub12"} hover={hover == "sub12" }/>}  title="Settings">
              <StyledSubMenuItem clicked={selectedNav == "45"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key="45"><StyledLink  to={`${path}/taxRate`}>Tax Rates</StyledLink></StyledSubMenuItem>
            </StyledSubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: sideBarWith }}>
          <MainHeader/>
          <Content style={{ padding: '32px', backgroundColor: '#f7f7f7'}}>
            <Switch>
              <Route exact  path={`${path}`}>
                <Dashboard/>
              </Route>
              <Route path={`${path}/deals`}>
                <Deal/>
              </Route>
              <Route path={`${path}/products`}>
                <Products/>
              </Route>
              <Route path={`${path}/contacts`}>
                <Contacts/>
              </Route>
              <Route path={`${path}/company`}>
                <Company/>
              </Route>
              <Route path={`${path}/activityOwner`}>
                <ActivityOwner/>
              </Route>
              <Route path={`${path}/chartAccount`}>
                <ChartAccount/>
              </Route>
              <Route path={`${path}/trialBalance`}>
                <TrialBalance/>
              </Route>
              <Route path={`${path}/profitandlost`}>
                <ProfitAndLost/>
              </Route>
              <Route path={`${path}/balancesheet`}>
                <BalanceSheet/>
              </Route>
              <Route path={`${path}/task`}>
                <Task/>
              </Route>
              <Route path={`${path}/payrolldetail`}>
                  <PayrollDetail/>
              </Route>
              <Route path={`${path}/draftPayroll`}>
                <DraftPayroll/>
              </Route>
              <Route path={`${path}/addCash`}>
                <AddCash/>
              </Route>
              <Route path={`${path}/addDeal`}>
                <AddDeal/>
              </Route>
              <Route path={`${path}/addGrade`}>
                <AddGrade/>
              </Route>
              <Route path={`${path}/addTask`}>
                <AddTask/>
              </Route>
              <Route path={`${path}/addProduct`}>
                <AddProduct/>
              </Route>
              <Route path={`${path}/addContact`}>
                <AddContact/>
              </Route>
              <Route path={`${path}/addCompany`}>
                <AddCompany/>
              </Route>
              <Route path={`${path}/addActivityOwner`}>
                <AddActivityOwner/>
              </Route>
              <Route path={`${path}/addDepartment`}>
                <AddDepartment/>
              </Route>
              <Route path={`${path}/addWorkDay`}>
                <AddWorkDay/>
              </Route>
              <Route path={`${path}/addLeaveType`}>
                <AddLeaveType/>
              </Route>
              <Route path={`${path}/addOfficeLocation`}>
                <AddOfficeLocation/>
              </Route>
              <Route path={`${path}/addSubsidiary`}>
                <AddSubsidiary/>
              </Route>
              <Route path={`${path}/employeegrade`}>
                <EmployeeGrade/>
              </Route>
              <Route path={`${path}/employeedepartment`}>
                <EmployeeDepartment/>
              </Route>
              <Route path={`${path}/workdays`}>
                <WorkDays/>
              </Route>
              <Route path={`${path}/leavetype`}>
                <LeaveType/>
              </Route>
              <Route path={`${path}/officelocation`}>
                <Location/>
              </Route>
              <Route path={`${path}/subsidiary`}>
                <Subsidiary/>
              </Route>
              <Route path={`${path}/employeeleave`}>
                <EmployeeLeave/>
              </Route>
              <Route path={`${path}/employeInfo`}>
                <EmployeeInfo/>
              </Route>
              <Route path={`${path}/exitedemployee`}>
                <ExitedEmployee/>
              </Route>
              <Route path={`${path}/absenteesm`}>
                <Absenteesm/>
              </Route>
              <Route path={`${path}/employeeremuneration`}>
                  <EmployeeRemuneration/>
              </Route>
              <Route path={`${path}/employeeBonus`}>
                <EmployeeBonus/>
              </Route>
              <Route path={`${path}/employeeDeduction`}>
                <EmployeeDeduction/>
              </Route>
              <Route path={`${path}/generateRoll`}>
                <GeneratePayroll/>
              </Route>
              <Route path={`${path}/payrollArchive`}>
                <PayrollArchive/>
              </Route>
              <Route path={`${path}/journalPosting`}>
                <JournalPosting/>
              </Route>
              <Route path={`${path}/transaction`}>
                <Transaction/>
              </Route>
              <Route path={`${path}/bankTransfer`}>
                <BankTransfer/>
              </Route>
              <Route path={`${path}/bankAccount`}>
                <BankAccount/>
              </Route>
              <Route path={`${path}/cashSales`}>
                  <CashSales/>
              </Route>
              <Route path={`${path}/creditSales`}>
                <CreditSales/>
              </Route>
              <Route path={`${path}/clients`}>
                <Clients/>
              </Route>
              <Route path={`${path}/bill`}>
                <Bill/>
              </Route>
              <Route  path={`${path}/vendor`}>
                <Vendor/>
              </Route>
              <Route path={`${path}/payslip`}>
                <PaySlip/>
              </Route>
              <Route path={`${path}/taxReport`}>
                <TaxReport/>
              </Route>
              <Route path={`${path}/pensionReport`}>
                <SinglePensionReport/>
              </Route>
              <Route path={`${path}/employeePensionReport`}>
                <EmployeePensionReport/>
              </Route>
              <Route path={`${path}/nhfReport`}>
                <NHFReport/>
              </Route>
              <Route path={`${path}/employeeData`}>
                <EmployeeData/>
              </Route>
              <Route path={`${path}/statutoryDeduction`}>
                <StatutoryDeduction/>
              </Route>
              <Route path={`${path}/payrollBreakDown`}>
                <PayrollBreakDown/>
              </Route>
              <Route path={`${path}/taxRate`}>
                <TaxRate/>
              </Route>
              
            </Switch>
            
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
  align-items: center;
  justify-content: left;
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
    margin-left: 10px;
  }

  @media ${device.laptop}{
    &.ant-menu-item span{
      font-size: 1vw;
    }     
  }
`





const StyledSubMenu = styled(SubMenu)`
 background-color: ${props => props.clicked? '#263059 !important' :'#081341'};
  border-left: ${props => props.clicked? '2px solid #a475f6;': 'none'};
 margin-left: 0px !important;
/*  padding: 0px 10px 0px 13px !important; */
& .ant-menu-submenu-title{
  margin-left: 0px !important;
  padding-left: 20px !important;
}
  
  & .ant-menu-submenu-title span{
    margin-left: 10px !important;
  }


  & .ant-menu-dark .ant-menu-inline.ant-menu-sub{
    background-color: #081341 !important;
  }


  &:hover{
    & .ant-menu-submenu-title{
     font-weight: bold;
    }
 }
`

const StyledSubMenuItem = styled(Menu.Item)`
   
  background-color: ${props => props.clicked? '#263059 !important' :'#081341'};
  border-left: ${props => props.clicked? '2px solid #a475f6;': 'none'};
  
 &:hover{
    &.ant-menu-item{
      background-color: #263059;
      border-left: 2px solid #a475f6;

  }
 }
 &.ant-menu-item{

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

const StyledModuleTitle = styled.p`
  opacity: 0.5;
  font-size: 12px;
  letter-spacing: 2px;
  color: #ffffff;
  margin-top: 50px;
  margin-left: 20px;
  margin-bottom: 24px;

  @media ${device.laptop}{
    font-size: 0.9vw;
  }
`


const StyledLink = styled(Link)`
  text-decoration: none;


  &:hover{
    text-decoration: none;
  }
`



























