import React from 'react'
import "./Sidebar.scss";
import { MdWorkOutline } from 'react-icons/md';
import { AiOutlineDown } from 'react-icons/ai';
import { FaHome,FaUserFriends,FaHandshake } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
//import { GrStatusPlaceholderSmall } from 'react-icons/gr';
import sack from '../images/sack.png'

const Sidebar = () => {
  return (
    <div className="wrapper">
        <div className="sidebar">
            <p><MdWorkOutline/><span className='sidebar-focus'>Switch Organisation</span><AiOutlineDown/></p>
        </div>
        <div className='sidebar-one'>
            <p> <FaHome/> <span className="sidebar-focus">Dashboard</span></p>
        </div>
        <div>
            <h4 className='sidebar-heading'>CUSTOMERS</h4>
            <ul className='sidebar-ul'>
                <li className='sidebarlist'><FaUserFriends/><span className="sidebar-focus">Users</span></li>
                <li className='sidebarlist'><HiUserGroup/><span className="sidebar-focus">Guarantors</span></li>
                <li className='sidebarlist'><img src={sack} alt="data"/><span className="sidebar-focus">Loans</span></li>
                <li className='sidebarlist'><FaHandshake/><span className="sidebar-focus">Decision Models</span></li>
                <li className='sidebarlist'><span className="sidebar-focus">Savings</span></li>
                <li className='sidebarlist'><span className="sidebar-focus">Loan Requests</span></li>
                <li className='sidebarlist'><span className="sidebar-focus">Whitelist</span></li>
                <li className='sidebarlist'><span className="sidebar-focus">Karma</span></li>
            </ul>
        </div>
        <div>
            <h4 className='sidebar-heading'>BUSINESSES</h4>
            <ul className='sidebar-ul'>
                <li className='sidebarlist'> <span className="sidebar-focus">Organization</span></li>
                <li className='sidebarlist'> <span className="sidebar-focus">Loan Products</span></li>
                <li className='sidebarlist'> <span className="sidebar-focus">Savings Products</span></li>
                <li className='sidebarlist'> <span className="sidebar-focus">Fees and Charges</span></li>
                <li className='sidebarlist'> <span className="sidebar-focus">Transactions</span></li>
                <li className='sidebarlist'> <span className="sidebar-focus">Services</span></li>
                <li className='sidebarlist'> <span className="sidebar-focus">Service Account</span></li>
                <li className='sidebarlist'> <span className="sidebar-focus">Settlements</span></li>
                <li className='sidebarlist'> <span className="sidebar-focus">Reports</span></li>
            </ul>
        </div>
        <div>
            <h4 className='sidebar-heading'>SETTINGS</h4>
            <ul className='sidebar-ul'>
                <li className='sidebarlist'> <span className="sidebar-focus">Preferences</span></li>
                <li className='sidebarlist'> <span className="sidebar-focus">Fees and Pricing</span></li>
                <li className='sidebarlist'> <span className="sidebar-focus">Audit Logs</span></li>
            </ul>
        </div>
    </div>
  )
  }

export default Sidebar