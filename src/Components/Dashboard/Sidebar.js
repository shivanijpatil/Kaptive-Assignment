import React from 'react';
import { MdTableChart } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";
import { BiSolidBinoculars } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

const Sidebar = () => {
  const navigate = (path) => {
    window.location.href = path;
  };

  return (
    <div className="sidebar">
      <div className='sidebar-top'>
        <a className="sidebar-link" style={{ fontSize: '15px' }} onClick={() => navigate('/Charts')}>
          <FaChartSimple />
          <span className="link-text" style={{ fontSize: '10px' }}>Charts</span>
        </a>
        <a className="sidebar-link" style={{ fontSize: '15px' }} onClick={() => navigate('/Result')}>
          <MdTableChart />
          <span className="link-text" style={{ fontSize: '10px' }}>Tables</span>
        </a>
        <a className="sidebar-link" style={{ fontSize: '15px' }} onClick={() => navigate('/Reports')}>
          <BiSolidReport />
          <span className="link-text" style={{ fontSize: '10px' }}>Reports</span>
        </a>

        <a className="sidebar-link" style={{ fontSize: '15px' }} onClick={() => navigate('/Forecast')}>
          <BiSolidBinoculars />
          <span className="link-text" style={{ fontSize: '10px' }}>Forecast</span>
        </a>
      </div>
      <div className='sidebar-bottom'>
        <a className="sidebar-link" style={{ fontSize: '15px' }} onClick={() => navigate('/LoginSignup')}>
          <FaRegUser />
          <span className="link-text" style={{ fontSize: '10px' }}>Shivani Patil</span>
        </a>
        <a className="sidebar-link" style={{ fontSize: '15px' }} onClick={() => navigate('/LoginSignup')}>
          <IoIosLogOut />
          <span className="link-text" style={{ fontSize: '10px' }}>Logout</span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;

